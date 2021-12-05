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

import React, { Component } from 'react';
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import styled from '@emotion/styled';

const Container = styled.div`
  /* margin-top: 7rem; */
  padding: 0 2rem;
`;
const TitleInput = styled.input`
  height: 80px;
  width: 50%;
  border: none;
  margin-bottom: 2rem;
  border-bottom: 2px solid #a3cfcd;
`;

const TagInput = styled.input`
  height: 40px;
  width: 50%;
  border: none;
`;

const BtnContainer = styled.div`
  text-align: right;
  margin-top: 2rem;
`;

const PostEditor = () => {
  const editorRef = React.createRef<Editor>();

  const handleClick = () => {
    console.log(editorRef.current.getInstance().getMarkdown());
  };

  return (
    <Container>
      <TitleInput type="text" placeholder="제목을 입력해주세요" />
      <TagInput placeholder="태그를 입력하세요" type="text" />
      <Editor
        previewStyle="vertical"
        height="600px"
        hideModeSwitch
        initialEditType="markdown"
        initialValue="hello"
        ref={editorRef}
      />
      <BtnContainer>
        <button>작성하기</button>
        <button>목록이동</button>
      </BtnContainer>
      {/* <button onClick={handleClick}>ttt</button> */}
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

// export interface PostEditorWithForwardedProps extends EditorProps {
//   forwardedRef?: React.MutableRefObject<Editor>;
// }

// const PostEditor = (props: PostEditorWithForwardedProps) => (
//   <>
//     <Editor {...props} ref={props.forwardedRef} />
//   </>
// );

// export default PostEditor;
