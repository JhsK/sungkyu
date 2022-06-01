import React from 'react';
import { FullPage, Slide } from 'react-full-page';
import Blog from './Blog';
import Intro from './Intro';
import Projects from './Projects';
import Typing from './Typing';

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
