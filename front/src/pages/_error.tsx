import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

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
        <Image src="/error.png" alt="error" width={600} height={600} />
        <div>
          <span>에러가 발생했습니다.</span>
          <span>문의사항은 qwe6293@nate.com으로 부탁드립니다.</span>
        </div>
      </Container>
    </>
  );
}
