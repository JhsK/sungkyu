import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;

  .title {
    font-size: 1rem;
    font-weight: bold;
  }
`;

const Tags = () => (
  <Container>
    <span className="title">인기태그</span>
  </Container>
);

export default Tags;
