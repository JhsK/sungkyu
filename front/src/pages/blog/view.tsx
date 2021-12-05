import React from 'react';
import dynamic from 'next/dynamic';

const PostViewer = dynamic(() => import('../../components/Blog/Post/PostViewer'), { ssr: false });

const Post = () => <PostViewer />;

export default Post;
