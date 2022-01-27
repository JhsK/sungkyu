// import React from 'react';
// import PropTypes from 'prop-types';
// import { Editor } from '@toast-ui/react-editor';
// import '@toast-ui/editor/dist/toastui-editor.css';

// const WrappedEditor = (props) => {
//   const { forwardedRef } = props;

//   return <Editor {...props} ref={forwardedRef} usageStatistics={false} />;
// };

// export default WrappedEditor;

import React, { forwardRef, useCallback, useRef } from 'react';
import dynamic from 'next/dynamic';
import { Editor as EditorType, EditorProps } from '@toast-ui/react-editor';

// import { getUploadImageUrl, TYPE_FOLDER_POST } from '@lib/uploadImage';
import { PostEditorWithForwardedProps } from './PostEditor';

// interface EditorPropsWithHandlers extends EditorProps {
//   onChange?(value: string): void;
// }

const Editor = dynamic<PostEditorWithForwardedProps>(() => import('./PostEditor'), { ssr: false });
const EditorWithForwardedRef = forwardRef<EditorType | undefined>((props, ref) => (
  <Editor {...props} forwardedRef={ref as React.MutableRefObject<EditorType>} />
));

// interface Props extends EditorProps {
//   onChange(value: string): void;
//   setImage(imgUrl: string): void;

//   valueType?: 'markdown' | 'html';
// }

const PostEditorWrapper = (props) => {
  const { initialValue, height, setImage } = props;

  const editorRef = useRef<EditorType>();
  const handleChange = useCallback(() => {
    if (!editorRef.current) {
      return;
    }

    const instance = editorRef.current.getInstance();
    const valueType = props.valueType || 'markdown';

    // props.onChange(valueType === 'markdown' ? instance.getMarkdown() : instance.getHtml());
  }, [props, editorRef]);

  // const addImageBlobHook = useCallback(async (blob, callback) => {
  //   const url = await getUploadImageUrl(blob, TYPE_FOLDER_POST);

  //   setImage(url);
  //   callback(url, blob.name);
  // }, []);

  // const hooks = { addImageBlobHook };

  return (
    <>
      <EditorWithForwardedRef
        {...props}
        initialValue={initialValue || 'hello react editor world!'}
        previewStyle="vertical"
        height={height || '700px'}
        initialEditType="markdown"
        useCommandShortcut
        ref={editorRef}
        // plugins={[colorSyntax]}
        // onChange={handleChange}
        // hooks={hooks}
      />
    </>
  );
};

export default PostEditorWrapper;
