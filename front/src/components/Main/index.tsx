import React from 'react';
import { FullPage, Slide } from 'react-full-page';
import Blog from './Blog';
import Intro from './Intro';
import Projects from './Projects';
import Typing from './Typing';

interface MainProps {
  setLogoColor: React.Dispatch<React.SetStateAction<boolean>>;
}

const Main = ({ setLogoColor }: MainProps) => (
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
