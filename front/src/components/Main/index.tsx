import React from 'react';
import { FullPage, Slide } from 'react-full-page';
import Typing from './Typing';
import Intro from './Intro';
import Projects from './Projects';
import Blog from './Blog';

const Main = ({ projects, blog }) => (
  <FullPage>
    <Slide>
      <Typing />
    </Slide>
    <Slide>
      <Intro />
    </Slide>
    <Slide>
      <Projects projects={projects} />
    </Slide>
    <Slide>
      <Blog blog={blog} />
    </Slide>
  </FullPage>
);

export default Main;
