import React from 'react';
import { FullPage, Slide } from 'react-full-page';
import { useInView } from 'react-intersection-observer';
import Typing from './Typing';
import Intro from './Intro';
import Projects from './Projects';
import Blog from './Blog';

const Main = ({ setLogoColor }) => (
  <FullPage>
    <Slide>
      <Typing setLogoColor={setLogoColor} />
    </Slide>
    <Slide>
      <Intro />
    </Slide>
    <Slide>
      <Projects />
    </Slide>
    <Slide>
      <Blog />
    </Slide>
  </FullPage>
);

export default Main;
