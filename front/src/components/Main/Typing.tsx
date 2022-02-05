import React, { useEffect } from 'react';
import { Global, css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { useInView } from 'react-intersection-observer';

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

const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: auto;
  background-color: ${(props) => props.theme.MAIN_BACKGROUND_COLOR};
  background-image: linear-gradient(90deg, #ffdee9 0%, #b5fffc 100%);
`;

const Section = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2.3rem;
  font-weight: bold;

  & h1 {
    margin-bottom: 1rem;
  }
`;

const H1 = styled.h1`
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
  }
`;

const Typing = ({ setLogoColor }) => {
  const [ref, inView] = useInView({
    threshold: 0,
  });

  useEffect(() => {
    setLogoColor(!inView);
  }, [inView]);
  return (
    <Container>
      <Section>
        <Content ref={ref}>
          <h1>저는</h1>
          <H1>불편함을 해소하기 위해 고민하는</H1>
          <h1>개발자 입니다.</h1>
        </Content>
      </Section>
    </Container>
  );
};

export default Typing;
