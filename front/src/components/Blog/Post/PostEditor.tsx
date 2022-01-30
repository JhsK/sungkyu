// // import React, { createRef } from 'react';
// import '@toast-ui/editor/dist/toastui-editor.css';
// // import { Editor } from '@toast-ui/react-editor';
// import dynamic from 'next/dynamic';
// import React, { useRef } from 'react';
// import { EditorProps } from '@toast-ui/react-editor';

// const Editor = dynamic<EditorProps>(() => import('@toast-ui/react-editor').then((m) => m.Editor), { ssr: false });

// const PostEditor = () => {
//   const editorRef = useRef(null);
//   console.log(editorRef.current); // {retry: ƒ}
//   return (
//     <>
//       <Editor
//         initialValue="hello react editor world!"
//         previewStyle="vertical"
//         height="600px"
//         initialEditType="markdown"
//         useCommandShortcut={false}
//         ref={editorRef}
//       />
//     </>
//   );
// };
// export default PostEditor;

// import React, { useState, forwardRef, useRef, useCallback } from 'react';
// import dynamic from 'next/dynamic';

// const Editor = dynamic(() => import('./test'), { ssr: false });
// // 2. Pass down to child components using forwardRef
// const EditorWithForwardedRef = React.forwardRef((props, ref) => <Editor {...props} forwardedRef={ref} />);

// const ToastEditorComponent = (props) => {
//   const { heightMin, onChange } = props;

//   const editorRef = useRef(null);
//   console.log(editorRef);

//   const handleChange = useCallback(() => {
//     if (!editorRef.current) {
//       return;
//     }

//     console.log(editorRef.current);
//     const instance = editorRef.current.getInstance();
//     onChange(instance.getHTML()); // maximum call stack error at the moment(2021.07.02)
//   }, [editorRef, onChange]);

//   return (
//     // 1. Pass down ref
//     <EditorWithForwardedRef
//       {...props}
//       placeholder="필수 입력사항 입니다."
//       previewStyle="vertical"
//       setMinHeight={heightMin || 250}
//       setHeight="600px"
//       initialEditType="markdown"
//       useCommandShortcut
//       ref={editorRef}
//     />
//   );
// };

// export default ToastEditorComponent;

import React, { Component, useRef, useState } from 'react';
// import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import tableMergedCell from '@toast-ui/editor-plugin-table-merged-cell';
import { Editor, EditorProps } from '@toast-ui/react-editor';
import styled from '@emotion/styled';
import Link from 'next/link';
import router from 'next/router';
import { postCreateAPI } from 'src/api';
import ImageUploader from 'src/components/share/ImageUploader';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import Prism from 'prismjs';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import { BtnContainer, Container, TagInput, TagValue, TitleInput } from '.';
import 'prismjs/themes/prism.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import '@toast-ui/editor-plugin-table-merged-cell/dist/toastui-editor-plugin-table-merged-cell.css';

export interface PostEditorWithForwardedProps extends EditorProps {
  forwardedRef?: React.MutableRefObject<Editor>;
}

const PostEditor = () => {
  const editorRef = React.createRef<Editor>();
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
    const values = { title, content: editorRef.current?.getInstance()?.getMarkdown(), tag };
    console.log(values);
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
      {/* <form onSubmit={onSubmitPost}> */}
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
        {/* </form> */}
      </div>
      <ImageUploader />
    </Container>
  );
};

export default PostEditor;

// class App extends Component {
//   editorRef = React.createRef();

//   handleClick = () => {
//     this.editorRef.current.getInstance().exec('Bold');
//   };

//   render() {
//     return (
//       <>
//         <Editor
//           previewStyle="vertical"
//           height="400px"
//           initialEditType="markdown"
//           initialValue="hello"
//           ref={this.editorRef}
//         />
//         <button onClick={this.handleClick}>make bold</button>
//       </>
//     );
//   }
// }

// export default App;

// import React from 'react';
// import '@toast-ui/editor/dist/toastui-editor.css';
// import { Editor, EditorProps } from '@toast-ui/react-editor';

// const PostEditor = (props: PostEditorWithForwardedProps) => (
//   <>
//     <Editor {...props} ref={props.forwardedRef} />
//   </>
// );

// export default PostEditor;
