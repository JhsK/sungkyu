import React from 'react';
import IntroduceText from '../share/IntroduceText';
import { AboutContainer, TextContainer } from './style';

const Introduce = () => (
  <>
    <AboutContainer>
      <div>
        <span role="img" aria-labelledby="sunglass">
          😎 About me
        </span>
        <TextContainer>
          <IntroduceText />
        </TextContainer>
      </div>
    </AboutContainer>
  </>
);

export default Introduce;
