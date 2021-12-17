import React from 'react';
import styled from '@emotion/styled';
import { GrGroup } from 'react-icons/gr';

const Container = styled.div`
  width: 1200px;
  margin: 9rem auto 0 auto;
`;

const SoloProjectsContainer = styled.div`
  margin-bottom: 2rem;

  .icons {
    margin-right: 0.5rem;
  }

  .soloProjectsTitle {
    font-size: 2rem;
    font-weight: bold;
  }
`;

const ProjectsComponent = () => (
  <Container>
    <SoloProjectsContainer>
      <GrGroup size="25" className="icons" />
      <span className="soloProjectsTitle">개인 프로젝트</span>
    </SoloProjectsContainer>
  </Container>
);

export default ProjectsComponent;
