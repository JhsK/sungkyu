import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const typing = keyframes`
    0% {
        width: 0%;
    }
    50% {
        width: 100%;
    }
    100%{
        width: 0%;
    }
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: auto;
  background-color: ${(props) => props.theme.MAIN_BACKGROUND_COLOR};
  background-image: linear-gradient(90deg, #ffdee9 0%, #b5fffc 100%);
`;

export const Section = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2.3rem;
  font-weight: bold;
  color: ${(props) => props.theme.PUBLIC_BLACK};

  & > h1 {
    margin-bottom: 1rem;
  }

  @media ${(props) => props.theme.TABLET_SM} {
    font-size: 1.8rem;
  }

  @media ${(props) => props.theme.MOBILE} {
    font-size: 1.5rem;
    transform: translate(-40%, -50%);
  }

  @media ${(props) => props.theme.MOBILE_FOLD} {
    font-size: 1.2rem;
  }
`;

export const H1 = styled.h1`
  color: transparent;
  text-transform: capitalize;
  white-space: nowrap;

  &::before {
    color: ${(props) => props.theme.PUBLIC_BLACK};
    position: absolute;
    top: 3.3rem;
    left: 0;
    content: '불편함을 해소하기 위해 고민하는';
    overflow: hidden;
    border-right: 3px solid black;
    animation: ${typing} 6s steps(30) infinite;

    @media ${(props) => props.theme.TABLET_SM} {
      top: 2.8rem;
    }

    @media ${(props) => props.theme.MOBILE} {
      top: 2.3rem;
    }
  }
`;
