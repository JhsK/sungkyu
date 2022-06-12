import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: auto;
`;

export const Section = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.PUBLIC_WHITE};
`;

export const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  @media ${(props) => props.theme.HDPC} {
    max-width: 1000px;
  }

  @media ${(props) => props.theme.PC} {
    max-width: 700px;
  }

  & > .activeFade {
    width: 100%;
    animation: ${fadeIn} 5s;
  }

  & > .disableFade {
    width: 100%;
    animation: ${fadeOut} 5s;
  }

  .title {
    font-size: 2rem;
    font-weight: bold;

    @media ${(props) => props.theme.TABLET} {
      margin-left: 1rem;
    }
  }
`;

export const PostContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  padding-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${(props) => props.theme.HDPC} {
    max-width: 1000px;
  }

  @media ${(props) => props.theme.PC} {
    max-width: 700px;
  }

  @media ${(props) => props.theme.TABLET} {
    width: 100%;
  }
`;
