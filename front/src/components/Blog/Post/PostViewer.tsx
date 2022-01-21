import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { Viewer } from '@toast-ui/react-editor';
import React, { useEffect } from 'react';

const PostViewer = ({ content }) => {
  const viwerRef = React.createRef<Viewer>();

  useEffect(() => {
    viwerRef.current.getInstance().setMarkdown(content);
  }, [content]);
  return <Viewer ref={viwerRef} initialValue={content} />;
};

export default PostViewer;
