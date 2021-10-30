import React from 'react';
import styled from '@emotion/styled';
import IntroduceText from '../share/IntroduceText';

const AboutContainer = styled.div`
  width: 1200px;
  margin: 8rem auto 0 auto;

  span {
    font-weight: bold;
    font-size: 1.4rem;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  margin: 3rem 0;
`;

const Introduce = () => (
  <>
    <AboutContainer>
      <span role="img" aria-labelledby="sunglass">
        😎 About me
      </span>
      <TextContainer>
        <IntroduceText />
      </TextContainer>
    </AboutContainer>
  </>
);

export default Introduce;
