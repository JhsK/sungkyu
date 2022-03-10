import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  img {
    width: 600px;
    height: 600px;
  }

  div {
    font-weight: bold;
    font-size: 1.5rem;
    text-align: center;
    span {
      display: block;
      margin-bottom: 2rem;
    }
  }
`;

export default function ErrorPage() {
  return (
    <>
      <Container>
        <img src="./error.png" alt="error" />
        <div>
          <span>에러가 발생했습니다.</span>
          <span>문의사항은 qwe6293@nate.com으로 부탁드립니다.</span>
        </div>
      </Container>
    </>
  );
}
