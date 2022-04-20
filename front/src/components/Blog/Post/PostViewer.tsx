import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { Viewer } from '@toast-ui/react-editor';
import React, { useEffect } from 'react';

import 'prismjs/themes/prism.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import Prism from 'prismjs';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import styled from '@emotion/styled';

const Container = styled.div`
  .toastui-editor-contents {
    font-size: 1rem;

    @media ${(props) => props.theme.MOBILE} {
      font-size: 14px;
    }
  }
`;
const PostViewer = ({ content = '' }) => {
  const viwerRef = React.createRef<Viewer>();

  useEffect(() => {
    viwerRef.current.getInstance().setMarkdown(content);
  }, [content]);
  return (
    <Container>
      <Viewer plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]} ref={viwerRef} initialValue={content} />
    </Container>
  );
};

export default PostViewer;
