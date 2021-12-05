import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { Viewer } from '@toast-ui/react-editor';
import React from 'react';

const test = `# markdown`;

const PostViewer = () => <Viewer initialValue={test} />;

export default PostViewer;
