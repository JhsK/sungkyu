import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const verticalScroll = keyframes`
    0% { 
        -moz-transform: translateY(0);
        -ms-transform: translateY(0);
        -webkit-transform: translateY(0);
        transform: translateY(0);
    }
	100% {
        -moz-transform: translateY(-8448px);
        -ms-transform: translateY(-8448px);
        -webkit-transform: translateY(-8448px);
        transform: translateY(-8448px);
        }
`;

const fadeInAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: auto;
  scroll-snap-type: y mandatory;
`;

const Section = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  scroll-snap-type: start;
  background-color: ${(props) => props.theme.BACKGROUND_PROJECTS_COLOR};
  background-blend-mode: multiply;
  background-attachment: fixed;
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;

  span {
    font-size: 2rem;
    font-weight: bold;
    display: block;
    margin-bottom: 2.3rem;
  }

  .textContainer {
    transform: translateX(-30%);
  }

  .projectsContainer {
    transform: translateX(+30%);
    /* height: 100vh; */
    vertical-align: middle;

    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      /* min-height: 100vh; */
      height: 100vh;

      .projects {
        width: 400px;
        height: 140px;
        margin-bottom: 4.5rem;
        background-color: gray;
      }
    }

    .containerActive {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      /* min-height: 100vh; */
      height: calc(280px * 4);
      /* animation: ${verticalScroll} 180s linear infinite;
      -ms-animation: ${verticalScroll} 180s linear infinite; */

      .projects {
        width: 400px;
        height: 140px;
        margin-bottom: 4.5rem;
        background-color: ${(props) => props.theme.FONT_COLOR_WHITE};

        img {
          width: 40%;
          object-fit: cover;
          height: 100%;
        }
      }
    }
  }
`;

const ListContainer = styled.div`
  width: 300px;
  height: 250px;
  border-radius: 15px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
  background-color: ${(props) => props.theme.FONT_COLOR_WHITE};
  margin-bottom: 2rem;
  animation: ${fadeInAnimation} 1s linear;

  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 15px 15px 0 0;
  }

  .projects {
    padding: 1rem 0 0 1rem;
    height: 100%;

    span:nth-child(1) {
      display: block;
      font-size: 1.3rem;
      font-weight: bold;
      margin-bottom: 0.5rem;
    }
    span:nth-child(2) {
      font-size: 0.9rem;
    }
  }
`;

const Projects = () => (
  <Container>
    <Section>
      <Content>
        <div className="textContainer">
          <span>개인 &sdot; 팀 프로젝트를</span>
          <span>통해 진행한</span>
          <span>프로젝트입니다.</span>
        </div>
        <div className="projectsContainer">
          {/* <div className={projects ? 'containerActive' : 'container'}>
            {projects && (
              <div className="containerActive">
                <div className="projects" />
                <div className="projects" />
              </div>
            )}
          </div> */}
          <motion.div className="card" whileHover={{ scale: 1.1 }}>
            <ListContainer>
              <Link href="/projects/Tre">
                <a>
                  <img
                    src="https://raw.githubusercontent.com/JhsK/Tre/master/front/public/image/plan_page.png"
                    alt="cover"
                  />
                  <div className="projects">
                    <span>Tre</span>
                    <span>To Record Everything - 일정 관리 사이트</span>
                  </div>
                </a>
              </Link>
            </ListContainer>
          </motion.div>
          <motion.div className="card" whileHover={{ scale: 1.1 }}>
            <ListContainer>
              <Link href="/projects/Groupstory">
                <a>
                  <img
                    src="https://raw.githubusercontent.com/JhsK/JS-Groupstory/dbclass/public/image/aaaa.png"
                    alt="cover"
                  />
                  <div className="projects">
                    <span>Groupstory</span>
                    <span>백석대학교 동아리 모집 사이트</span>
                  </div>
                </a>
              </Link>
            </ListContainer>
          </motion.div>
        </div>
      </Content>
    </Section>
  </Container>
);

export default Projects;
