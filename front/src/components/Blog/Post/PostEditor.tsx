import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import tableMergedCell from '@toast-ui/editor-plugin-table-merged-cell';
import '@toast-ui/editor-plugin-table-merged-cell/dist/toastui-editor-plugin-table-merged-cell.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor, EditorProps } from '@toast-ui/react-editor';
import Link from 'next/link';
import router from 'next/router';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import React, { useState } from 'react';
import { postCreateAPI } from 'src/api';
import ImageUploader from 'src/components/share/ImageUploader';
import 'tui-color-picker/dist/tui-color-picker.css';
import { BtnContainer, Container, TagInput, TagValue, TitleInput } from '.';

// const Editor = dynamic<EditorProps>(() => import('@toast-ui/react-editor').then((m) => m.Editor), { ssr: false });

export interface PostEditorWithForwardedProps extends EditorProps {
  forwardedRef?: React.MutableRefObject<Editor>;
}

const PostEditor = () => {
  const editorRef = React.createRef<Editor>();
  const [imagePath, setImagePath] = useState(null);
  const [title, setTitle] = useState('');
  const [tag, setTag] = useState([]);
  const [tagInputValue, setTagInputValue] = useState('');

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
    // if (!(imagePath.length > 0)) return alert('이미지는 필수 입니다');
    const values = { title, content: editorRef.current?.getInstance()?.getMarkdown(), tag, image: imagePath };
    // console.log(editorRef.current?.getInstance()?.getMarkdown());
    try {
      await postCreateAPI(values);
      router.replace('/blog');
    } catch (error) {
      console.log(error);
      alert('오류가 발생했습니다. 관리자에게 문의해주세요');
    }

    return '';
  };
  return (
    <Container>
      <div>
        <TitleInput onChange={onChangeTitle} name="title" type="text" placeholder="제목을 입력해주세요" />
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
          // onKeyUp={onKeyUpTag}
          onKeyDown={onKeyUpTag}
        />
        <Editor
          previewStyle="vertical"
          height="75vh"
          hideModeSwitch
          initialEditType="markdown"
          initialValue="hello"
          plugins={[[codeSyntaxHighlight, { highlighter: Prism }], colorSyntax, tableMergedCell]}
          // onChange={onChangeEditor}
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

export default PostEditor;
