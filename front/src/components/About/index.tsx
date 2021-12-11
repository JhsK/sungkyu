import React from 'react';
import styled from '@emotion/styled';
import Introduce from './Introduce';
import Skill from './Skill';
import Footer from '../Footer';

const Container = styled.div`
  height: 100%;
`;

const AboutComponent = () => (
  <Container>
    <Introduce />
    <Skill />
    <Footer />
  </Container>
);

export default AboutComponent;
