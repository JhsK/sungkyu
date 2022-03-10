import styled from '@emotion/styled';
import React from 'react';

const IntroduceContainer = styled.div`
  span {
    display: block;
    font-weight: bold;
  }
  .title {
    font-size: 2.3rem;
    margin-bottom: 2rem;

    @media ${(props) => props.theme.TABLET_SM} {
      font-size: 1.8rem;
    }
    @media ${(props) => props.theme.MOBILE} {
      font-size: 1.5rem;
    }
  }

  .subTitle {
    font-size: 1.8rem;
    margin-bottom: 1.2rem;

    @media ${(props) => props.theme.TABLET_SM} {
      font-size: 1.3rem;
    }
    @media ${(props) => props.theme.MOBILE} {
      font-size: 1rem;
    }
  }

  ul {
    list-style: disc outside none;
    margin-left: 1.7rem;
  }

  li {
    margin-bottom: 1rem;

    @media ${(props) => props.theme.TABLET_SM} {
      font-size: 0.7rem;
    }
    @media ${(props) => props.theme.MOBILE} {
      font-size: 0.5rem;
    }
  }
`;

const IntroduceText = () => (
  <IntroduceContainer data-aos="fade-up">
    <span className="title" role="img" aria-labelledby="smile">
      안녕하세요 개발자 임성규입니다 😁
    </span>
    <span className="subTitle" role="img" aria-labelledby="computer">
      💻 Frontend Engineer, Web Developer
    </span>
    <ul>
      <li>안녕하세요 프론트엔드 개발자 000 입니다.</li>
      <li>불편한 점을 해소시킬 수 있는 개발자가 되기 위해 끊임없이 공부하는 중입니다.</li>
      <li>성실함이 강점인 저는 1일 1커밋 운동과 직접 개발한 기술 블로그를 운영하고 있습니다.</li>
      <li>Clean Code에 대해 생각하며 효울적인 코드를 작성하기 위해 고민합니다.</li>
    </ul>
  </IntroduceContainer>
);

export default IntroduceText;
