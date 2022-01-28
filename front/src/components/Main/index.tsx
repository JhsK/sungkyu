import React from 'react';
import { FullPage, Slide } from 'react-full-page';
import Typing from './Typing';
import Intro from './Intro';
import Projects from './Projects';
import Blog from './Blog';

interface MainProps {
  projects: boolean;
  blog: boolean;
}

const Main = ({ projects, blog }: MainProps) => (
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
