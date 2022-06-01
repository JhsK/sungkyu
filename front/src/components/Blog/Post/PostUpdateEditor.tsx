import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Editor } from '@toast-ui/react-editor';
import { BtnContainer, Container, TagInput, TagValue, TitleInput } from 'src/components/Blog/Post';
import { useRouter } from 'next/router';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { getPostAPI, postUpdateAPI } from 'src/api';
import '@toast-ui/editor/dist/toastui-editor.css';
import ImageUploader from 'src/components/share/ImageUploader';

const PostUpdateEditor = () => {
  const router = useRouter();
  const { id } = router.query;
  const [imagePath, setImagePath] = useState('');
  const queryClient = useQueryClient();
  const updatePostMutation = useMutation(postUpdateAPI);
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
      return alert('제목은 필수 입니다');
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
      alert('오류가 발생했습니다. 관리자에게 문의해주세요');
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
          placeholder="제목을 입력해주세요"
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
          placeholder="태그를 입력하세요"
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
          <button onClick={onSubmitPost}>작성하기</button>
          <button>
            <Link href="/blog">
              <a>목록이동</a>
            </Link>
          </button>
        </BtnContainer>
      </div>
      <ImageUploader imagePath={imagePath} setImagePath={setImagePath} />
    </Container>
  );
};

export default PostUpdateEditor;
