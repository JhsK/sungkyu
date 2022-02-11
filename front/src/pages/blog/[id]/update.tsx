import dynamic from 'next/dynamic';
import React, { useState } from 'react';

const PostUpdateEditor = dynamic(() => import('src/components/Blog/Post/PostUpdateEditor'), { ssr: false });

const PostUpdate = () => (
  <>
    <PostUpdateEditor />
  </>
);

export default PostUpdate;
