import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { Viewer } from '@toast-ui/react-editor';
import React from 'react';

// const test = `# markdown`;

const PostViewer = ({ content }) => <Viewer initialValue={content} />;

export default PostViewer;
