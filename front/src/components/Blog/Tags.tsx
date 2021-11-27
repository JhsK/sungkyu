import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 25%; */

  .title {
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }
`;

const LabelContainer = styled.div`
  span {
    display: block;
    padding: 0.3rem 1rem;
    border-radius: 20px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
  }

  span:hover {
    background-color: #82a0aa;
    color: #fff;
  }
`;

const Tags = () => (
  <Container>
    <span className="title">인기태그</span>
    <LabelContainer>
      <span>Javascript - 21</span>
      <span>React - 3</span>
      <span>Web - 8</span>
    </LabelContainer>
  </Container>
);

export default Tags;
