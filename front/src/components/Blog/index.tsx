import React from 'react';
import styled from '@emotion/styled';
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
  margin: 10rem auto 0 auto;
  gap: 2.2rem;
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
