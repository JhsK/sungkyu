import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { lightTheme } from 'src/theme';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: auto;
  scroll-snap-type: y mandatory;
`;

const Section = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
<<<<<<< HEAD
  ${fadeAnimation};
  color: red;
  /* scroll-snap-align: start; */
  background-color: ${lightTheme.BACKGROUND_TYPING_COLOR};
=======
  scroll-snap-align: start;
  background-color: ${lightTheme.BACKGROUND_INTRO_COLOR};
>>>>>>> 38ab944238a00fc8670c6df4d6defe147a784aa9
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  height: 100%;
  width: 100%;

  .title {
    display: block;
    font-size: 2.3rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }

  .subTitle {
    display: block;
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 1.2rem;
  }

  ul {
    list-style: disc outside none;
    margin-left: 1.9rem;
  }

  li {
    margin-bottom: 1rem;
  }
`;

const Intro = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <Container>
      <Section>
        <Content>
          <div data-aos="fade-up">
            <span className="title" role="img" aria-labelledby="smile">
              안녕하세요 개발자 임성규입니다 😁
            </span>
            <span className="subTitle" role="img" aria-labelledby="computer">
              💻 Frontend Engineer, Web Developer
            </span>
            <ul>
              <li>안녕하세요 프론트엔드 개발자 임성규 입니다.</li>
              <li>불편한 점을 해소시킬 수 있는 개발자가 되기 위해 끊임없이 공부하는 중입니다.</li>
              <li>성실함이 강점인 저는 1일 1커밋 운동과 직접 개발한 기술 블로그를 운영하고 있습니다.</li>
              <li>Clean Code에 대해 생각하며 효울적인 코드를 작성하기 위해 고민합니다.</li>
            </ul>
          </div>
        </Content>
      </Section>
    </Container>
  );
};

export default Intro;
