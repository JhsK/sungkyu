import React from 'react';
import styled from '@emotion/styled';
import IntroduceText from '../share/IntroduceText';

const AboutContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 5rem auto 0 auto;

  @media ${(props) => props.theme.HDPC} {
    max-width: 1000px;
  }

  @media ${(props) => props.theme.PC} {
    max-width: 700px;
  }

  @media ${(props) => props.theme.TABLET_SM} {
    display: flex;
    justify-content: center;
    align-items: center;
  }

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
