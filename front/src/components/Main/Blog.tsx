import React from 'react';
import styled from '@emotion/styled';
import { lightTheme } from 'src/theme';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: auto;
  scroll-snap-type: y mandatory;
`;

const Section = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  scroll-snap-type: start;
  background-color: ${lightTheme.BACKGROUND_INTRO_COLOR};
  background-blend-mode: multiply;
  background-attachment: fixed;
`;

const Content = styled.div`
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  .title {
    font-size: 2rem;
    font-weight: bold;
    height: 10%;
  }
`;

const PostContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .post {
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;

    .postImg {
      width: 100%;
      background-color: gray;
      height: 200px;
      margin-bottom: 1.5rem;
    }

    .postTitle {
      font-size: 1.5rem;
      font-weight: bold;
    }

    .more {
      color: ${lightTheme.FONT_COLOR_DARKGRAY};
      margin-top: 1rem;
    }
  }
`;

const Blog = () => (
  <Container>
    <Section>
      <Content>
        <span className="title">BLOG</span>
        <PostContainer>
          <div className="post">
            <div className="postImg" />
            <span className="postTitle">제목 테스트1</span>
            <span className="more">more &gt;</span>
          </div>
          <div className="post">
            <div className="postImg" />
            <span>제목 테스트1</span>
          </div>
          <div className="post">
            <div className="postImg" />
            <span>제목 테스트1</span>
          </div>
        </PostContainer>
      </Content>
    </Section>
  </Container>
);

export default Blog;
