import dynamic from 'next/dynamic';
import router from 'next/router';
import React, { useEffect } from 'react';
import useAuth from 'src/hooks/useAuth';

const PostEditor = dynamic(() => import('src/components/Blog/Post/PostEditor'), { ssr: false });

const PostNew = () => {
  const currentUser = useAuth();

  useEffect(() => {
    if (!currentUser.isAuthenticated) {
      router.replace('/');
    }
  }, [currentUser]);
  return (
    <>
      <PostEditor />
    </>
  );
};

export default PostNew;
