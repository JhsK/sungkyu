import React from 'react';
import styled from '@emotion/styled';
import { getPostsAPI } from 'src/api';
import { useQuery } from 'react-query';
import ClipLoader from 'react-spinners/ClipLoader';
import { css } from '@emotion/react';
import List from './List';
import Tags from './Tags';
import Footer from '../Footer';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const BlogContainer = styled.div`
  display: flex;
  align-items: flex-start;
  width: 1200px;
  margin: 9rem auto 0 auto;
  gap: 2rem;
`;

const BlogComponent = () => {
  const { data: posts, isLoading } = useQuery('posts', getPostsAPI);

  return (
    <>
      {isLoading ? (
        <ClipLoader
          css={css`
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          `}
          size={200}
        />
      ) : (
        <Container>
          <BlogContainer>
            <List postsData={posts} />
            <Tags />
          </BlogContainer>
          <Footer />
        </Container>
      )}
    </>
  );
};

export default BlogComponent;
