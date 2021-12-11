import React from 'react';
import styled from '@emotion/styled';
import Header from 'src/components/Header';
import dynamic from 'next/dynamic';

const Viewer = dynamic(() => import('../../../components/Blog/Post/PostViewer'), { ssr: false });

const Container = styled.div`
  width: 1200px;
  margin: 10rem auto 0 auto;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
`;

const Title = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

const SubTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const TagList = styled.div`
  display: flex;
  align-items: center;
`;

const PostView = () => (
  <>
    <Header logoColor />
    <Container>
      <TitleContainer>
        <Title>테스트 블로그 제목</Title>
        <SubTitle>
          <span>2021.08.18</span>
          <div>
            <span>수정</span>
            <span>삭제</span>
          </div>
        </SubTitle>
        <TagList>
          <span>JS</span>
          <span>자바스크립트</span>
          <span>React</span>
        </TagList>
      </TitleContainer>
      <Viewer />
    </Container>
  </>
);

export default PostView;
