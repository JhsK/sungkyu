import dynamic from 'next/dynamic';
import React from 'react';

const PostEditor = dynamic(() => import('src/components/Blog/Post/PostEditor'), { ssr: false });

const PostNew = () => (
  <>
    <PostEditor />
  </>
);

export default PostNew;
