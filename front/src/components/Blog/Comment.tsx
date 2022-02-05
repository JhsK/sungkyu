import React, { useEffect, useRef } from 'react';

const Comment = ({ repo }) => {
  const commentRef = useRef(null);

  useEffect(() => {
    const utterances = document.createElement('script');
    const attributes = {
      src: 'https://utteranc.es/client.js',
      repo,
      'issue-term': 'pathname',
      label: 'comment',
      theme: 'github-light',
      crossOrigin: 'anonymous',
      async: 'true',
    };
    Object.entries(attributes).forEach(([key, value]) => {
      utterances.setAttribute(key, value);
    });
    commentRef.current.appendChild(utterances);
  }, [repo]);

  return <div ref={commentRef} />;
};

export default Comment;
