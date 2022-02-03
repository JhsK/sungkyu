import styled from '@emotion/styled';
import React from 'react';
import Footer from '../Footer';
import List from './List';
import Tags from './Tags';

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

const BlogComponent = () => (
  <Container>
    <BlogContainer>
      <List />
      <Tags />
    </BlogContainer>
    <Footer />
  </Container>
);

export default BlogComponent;
