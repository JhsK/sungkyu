import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';

const StyledComment = styled.div`
  width: 100%;
`;

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

  return <StyledComment ref={commentRef} />;
};

export default Comment;
