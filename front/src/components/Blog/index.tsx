import React from 'react';
import styled from '@emotion/styled';
import { getPostAPI } from 'src/api';
import { useQuery } from 'react-query';
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
  const { data: posts } = useQuery('posts', getPostAPI);
  console.log(posts);
  return (
    <Container>
      <BlogContainer>
        <List />
        <Tags />
      </BlogContainer>
      <Footer />
    </Container>
  );
};

export default BlogComponent;
