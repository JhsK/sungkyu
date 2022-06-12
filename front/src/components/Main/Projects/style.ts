import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

export const fadeInAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: auto;
  scroll-snap-type: y mandatory;
`;

export const Section = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  scroll-snap-type: start;
  background-color: ${(props) => props.theme.FOOTER_GRAY};
  background-blend-mode: multiply;
  background-attachment: fixed;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;

  @media ${(props) => props.theme.TABLET_SM} {
    flex-direction: column;
    justify-content: center;
    align-content: center;
    margin-top: 3rem;
  }

  & > .textContainer {
    span {
      font-size: 2rem;
      font-weight: bold;
      display: block;
      margin-bottom: 2.3rem;

      @media ${(props) => props.theme.TABLET_SM} {
        font-size: 1.5rem;
      }

      @media ${(props) => props.theme.MOBILE_SM} {
        margin-top: 1.2rem;
      }
    }
  }
`;

export const ListContainer = styled.div`
  width: 300px;
  height: 250px;
  border-radius: 15px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
  background-color: ${(props) => props.theme.PUBLIC_WHITE};
  margin-bottom: 2rem;
  animation: ${fadeInAnimation} 1s linear;

  @media ${(props) => props.theme.TABLET_SM} {
    width: 350px;
    margin-left: auto;
    margin-right: auto;
  }

  @media ${(props) => props.theme.MOBILE_SM} {
    width: 300px;
  }

  @media ${(props) => props.theme.MOBILE_FOLD} {
    width: 250px;
  }

  & > a {
    position: relative;
    width: 100%;
    height: 150px;
    border-radius: 15px 15px 0 0;

    & > * {
      height: 150px !important;
      position: relative !important;
      border-radius: 15px 15px 0 0;
    }
  }

  .projects {
    padding: 1rem 0 0 1rem;
    height: 100%;

    & > span:nth-of-type(1) {
      display: block;
      font-size: 1.3rem;
      font-weight: bold;
      margin-bottom: 0.5rem;
    }
    & > span:nth-of-type(2) {
      font-size: 0.9rem;
    }
  }
`;

export const SwiperContainer = styled.div`
  width: 100%;
`;
