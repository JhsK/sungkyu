import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { Viewer } from '@toast-ui/react-editor';
import React, { useEffect } from 'react';

import 'prismjs/themes/prism.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import Prism from 'prismjs';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';

const PostViewer = ({ content }) => {
  const viwerRef = React.createRef<Viewer>();

  useEffect(() => {
    viwerRef.current.getInstance().setMarkdown(content);
  }, [content]);
  return <Viewer plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]} ref={viwerRef} initialValue={content} />;
};

export default PostViewer;
