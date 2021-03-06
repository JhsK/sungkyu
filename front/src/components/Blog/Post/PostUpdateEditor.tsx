import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Editor } from '@toast-ui/react-editor';
import { BtnContainer, Container, TagInput, TagValue, TitleInput } from 'src/components/Blog/Post';
import { useRouter } from 'next/router';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { getPostAPI, postUpdateAPI } from 'src/api';
import '@toast-ui/editor/dist/toastui-editor.css';
import ImageUploader from 'src/components/share/ImageUploader';
import useImageMutation from '../hooks/useImageMutation';

const PostUpdateEditor = () => {
  const router = useRouter();
  const { id } = router.query;
  const [imagePath, setImagePath] = useState('');
  const queryClient = useQueryClient();
  const updatePostMutation = useMutation(postUpdateAPI);
  const { mutate: imageMutate } = useImageMutation();
  const editorRef = React.createRef<Editor>();

  const { data: post } = useQuery(`post-${id}`, async () => {
    const data = await getPostAPI(String(id));
    return data;
  });

  const [title, setTitle] = useState(post?.title);
  const [tag, setTag] = useState([]);
  const [tagInputValue, setTagInputValue] = useState('');
  const [newTag, setNewTag] = useState([]);

  useEffect(() => {
    if (post) {
      const tagData = post?.Tags.map((item) => item.name);
      setTag([...tagData]);
    }
  }, [post]);

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.getInstance().removeHook('addImageBlobHook');
      editorRef.current.getInstance().addHook('addImageBlobHook', (blob, callback) => {
        (async () => {
          const formData = new FormData();
          formData.append('img', blob);

          imageMutate(formData, {
            onSuccess: (data) => {
              const imageUrl = data.replace(/\/thumb\//, '/original/');
              callback(imageUrl, 'image');
            },
          });
        })();
      });
    }
  }, [editorRef]);

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onChangeTag = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTagInputValue(e.target.value);
  };

  const onKeyUpTag = (e) => {
    if (e.keyCode === 13) {
      const addTagValue = e.target.value;
      setTag((prev) => [...prev, addTagValue]);
      setNewTag((prev) => [...prev, addTagValue]);
      setTagInputValue('');
    } else setTag((prev) => [...prev]);
  };

  const deleteTag = (index: number) => {
    setTag([...tag.filter((tavValue, i) => index !== i)]);
  };

  const onSubmitPost = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (title === '') {
      return alert('????????? ?????? ?????????');
    }
    const values = { title, content: editorRef.current?.getInstance()?.getMarkdown(), tag: newTag, image: imagePath };
    try {
      updatePostMutation.mutate(
        { id, values },
        {
          onSuccess: () => {
            queryClient.invalidateQueries(`post-${id}`);
          },
        },
      );
      router.push(`/blog/${id}`);
    } catch (error) {
      console.log(error);
      alert('????????? ??????????????????. ??????????????? ??????????????????');
    }

    return '';
  };

  return (
    <Container>
      <div>
        <TitleInput
          defaultValue={title}
          onChange={onChangeTitle}
          name="title"
          type="text"
          placeholder="????????? ??????????????????"
        />
        {tag &&
          tag.map((tagValue, index) => (
            <TagValue key={tagValue} onClick={() => deleteTag(index)}>
              {tagValue}
            </TagValue>
          ))}
        <TagInput
          value={tagInputValue}
          onChange={onChangeTag}
          placeholder="????????? ???????????????"
          type="text"
          onKeyDown={onKeyUpTag}
        />
        <Editor
          previewStyle="vertical"
          height="75vh"
          hideModeSwitch
          initialEditType="markdown"
          initialValue={post?.content}
          ref={editorRef}
        />
        <BtnContainer>
          <button onClick={onSubmitPost}>????????????</button>
          <button>
            <Link href="/blog">
              <a>????????????</a>
            </Link>
          </button>
        </BtnContainer>
      </div>
      <ImageUploader imagePath={imagePath} setImagePath={setImagePath} />
    </Container>
  );
};

export default PostUpdateEditor;
