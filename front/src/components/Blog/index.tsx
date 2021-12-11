import React from 'react';
import styled from '@emotion/styled';
import List from './List';
import Tags from './Tags';

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  width: 1200px;
  margin: 10rem auto 0 auto;
  gap: 2.2rem;
`;

const BlogComponent = () => (
  <Container>
    <List />
    <Tags />
  </Container>
);

export default BlogComponent;
