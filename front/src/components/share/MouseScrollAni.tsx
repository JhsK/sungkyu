import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const MoustAct = keyframes`
    0% {
      transform: translateY(5px);
    }

    50% {
      transform: translateY(-5px);
    }

    100% {
      transform: translateY(5px);
    }
`;

const AnimationContainer = styled.div`
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 1;
  width: 30px;
  height: 50px;
  border: 2px solid ${(props) => props.theme.PUBLIC_WHITE};
  border-radius: 20px;

  /* @keyframes Mouse_act {
    0% {
      transform: translateY(5px);
    }

    50% {
      transform: translateY(-5px);
    }

    100% {
      transform: translateY(5px);
    }
  } */

  &::before {
    content: 'SCROLL';
    display: block;
    position: absolute;
    top: -35px;
    left: 50%;
    margin-left: -29px;
    width: 60px;
    font-size: 16px;
    color: ${(props) => props.theme.PUBLIC_WHITE};
    letter-spacing: 0px;
    font-weight: 600;
  }
  & .ball {
    position: absolute;
    top: 8px;
    left: 13px;
    width: 4px;
    height: 4px;
    background: ${(props) => props.theme.PUBLIC_WHITE};
    border-radius: 50%;
    animation: ${MoustAct} 1s ease-out infinite;
  }
`;

const MouseScrollAni = () => (
  <AnimationContainer>
    <span className="ball" />
  </AnimationContainer>
);

export default MouseScrollAni;
