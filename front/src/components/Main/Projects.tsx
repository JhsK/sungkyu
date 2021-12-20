import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

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
        transform: translateY(-8448px)
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
    height: 100vh;
    vertical-align: middle;

    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      min-height: 100vh;

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
      min-height: 100vh;
      animation: ${verticalScroll} 180s linear infinite;
      -ms-animation: ${verticalScroll} 180s linear infinite;

      .projects {
        width: 400px;
        height: 140px;
        margin-bottom: 4.5rem;
        background-color: gray;
      }
    }
  }
`;

const Projects = ({ projects }) => (
  <Container>
    <Section>
      <Content>
        <div className="textContainer">
          <span>개인 &sdot; 팀 프로젝트를</span>
          <span>통해 진행한</span>
          <span>프로젝트입니다.</span>
        </div>
        <div className="projectsContainer">
          <div className={projects ? 'containerActive' : 'container'}>
            <div className="projects" />
            <div className="projects" />
            <div className="projects" />
          </div>
        </div>
      </Content>
    </Section>
  </Container>
);

export default Projects;
