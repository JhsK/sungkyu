import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { useInView } from 'react-intersection-observer';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: auto;
`;

const Section = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.BACKGROUND_INTRO_COLOR};
`;

const Content = styled.div`
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  .activeFade {
    width: 100%;
    animation: ${fadeIn} 5s;
  }

  .disableFade {
    width: 100%;
    animation: ${fadeOut} 5s;
  }

  .title {
    font-size: 2rem;
    font-weight: bold;
  }
`;

const PostContainer = styled.div`
  width: 100%;
  padding-top: 2rem;
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

    .moreContainer {
      display: flex;
      align-items: center;
      color: ${(props) => props.theme.FONT_COLOR_DARKGRAY};
      margin-top: 1rem;

      .font {
        font-size: 0.9rem;
      }
      .icon {
        font-size: 1rem;
      }
    }
  }
`;

const Blog = () => {
  const [ref, inView] = useInView({ threshold: 0 });
  return (
    <Container>
      <Section>
        <Content>
          <div ref={ref} className={inView ? 'activeFade' : 'disableFade'}>
            <span className="title">BLOG</span>
            <PostContainer>
              <div className="post">
                <div className="postImg" />
                <span className="postTitle">제목 테스트1</span>
                <div className="moreContainer">
                  <span className="font">more</span>
                  <MdKeyboardArrowRight className="icon" />
                </div>
              </div>
              <div className="post">
                <div className="postImg" />
                <span className="postTitle">제목 테스트1</span>
                <div className="moreContainer">
                  <span className="font">more</span>
                  <MdKeyboardArrowRight className="icon" />
                </div>
              </div>
              <div className="post">
                <div className="postImg" />
                <span className="postTitle">제목 테스트1</span>
                <div className="moreContainer">
                  <span className="font">more</span>
                  <MdKeyboardArrowRight className="icon" />
                </div>
              </div>
            </PostContainer>
          </div>
        </Content>
      </Section>
    </Container>
  );
};

export default Blog;
