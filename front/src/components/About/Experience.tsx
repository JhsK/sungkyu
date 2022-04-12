import React from 'react';
import styled from '@emotion/styled';
import { lightTheme } from 'src/theme';
import { Skill } from './style';

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;

  @media ${(props) => props.theme.HDPC} {
    max-width: 1000px;
  }

  @media ${(props) => props.theme.PC} {
    max-width: 700px;
  }

  .title {
    font-weight: bold;
    font-size: 1.4rem;
  }

  .experienceContainer {
    padding: 1rem 2rem;
    display: flex;
    gap: 2rem;
    margin-bottom: 1rem;

    .period {
      font-size: 1.4rem;
      font-weight: bold;
      color: ${(props) => props.theme.NO_ACTIVE_CATEGORY_COLOR};
    }

    .content {
      .top {
        margin-bottom: 1rem;
        h1 {
          font-size: 1.4rem;
          margin-bottom: 1rem;
        }

        span {
          opacity: 0.5;
          margin-bottom: 0.5rem;
          display: block;
        }
      }

      .project {
        padding-left: 1.5rem;
        padding-top: 1rem;
        margin: 1rem 0;

        li {
          list-style-type: disc;
          margin-bottom: 1rem;
        }
      }

      .task {
        padding-left: 1rem;

        li {
          list-style-type: circle;
        }
      }
    }
  }
`;

const INSOMENIA_FREE = [
  { name: 'React', color: lightTheme.REACT_SKY_BLUE_COLOR },
  { name: 'Next.js', color: lightTheme.PUBLIC_BLACK },
  { name: 'TypeScript', color: lightTheme.PUBLIC_BLUE },
  { name: 'Node.js', color: lightTheme.NODE_GREEN_COLOR },
];

const INSOMENIA_INTERN = [
  { name: 'React', color: lightTheme.REACT_SKY_BLUE_COLOR },
  { name: 'Next.js', color: lightTheme.PUBLIC_BLACK },
  { name: 'TypeScript', color: lightTheme.PUBLIC_BLUE },
  { name: 'Ruby on Rails', color: lightTheme.ROR_RED_COLOR },
  { name: 'Framework7', color: lightTheme.F7_ORANGE_COLOR },
  { name: 'TailwindCSS', color: lightTheme.REACT_SKY_BLUE_COLOR },
];

const Experience = () => (
  <Container>
    <span className="title" role="img" aria-labelledby="expreience">
      💼 Experience
    </span>
    <div className="experienceContainer">
      <span className="period">2022.01 ~ 2022.02</span>
      <div className="content">
        <div className="top">
          <h1>(주) 인썸니아</h1>
          <span>스타트업 전문 외주 개발사입니다. 고객사 프로젝트에 참여하여 기능 구현을 담당하였습니다.</span>
          <span>Full Stack Developer</span>
        </div>
        {INSOMENIA_FREE.map((skill) => (
          <Skill bgColor={skill.color}>{skill.name}</Skill>
        ))}
        <ul className="project">
          <li>[밀리앱] 내가 자주 가는 지점을 선택하고 해당 지점에 상품을 픽업할 수 있도록 예약/주문 웹앱 개발</li>
          <ul className="task">
            <li>상품 결제 시 사용할 수 있는 쿠폰 및 포인트 기능 구현</li>
            <li>리뷰 기능 구현</li>
            <li>카드 등록 후 자동결제 기능 구현</li>
            <li>카드 등록 없이 카드 정보 및 간편 결제 기능 구현</li>
          </ul>
          <li>[배낭버스] 여행을 위한 버스 예약 서비스 웹앱 개발</li>
          <ul className="task">
            <li>카카오톡 공유하기 딥링크 기능 프론트 구현</li>
            <li>토스 지급대행 API 이용한 버스기사 예약금 전달 기능 구현</li>
          </ul>
        </ul>
      </div>
    </div>
    <div className="experienceContainer">
      <span className="period">2021.09 ~ 2022.12</span>
      <div className="content">
        <div className="top">
          <h1>ICT 학점연계 프로젝트 인턴쉽 - (주) 인썸니아</h1>
          <span>ICT 학점연계 프로젝트 인턴쉽을 통해 인썸니아에서 4개월동안 인턴으로 참여하였습니다.</span>
          <span>Full Stack Developer</span>
        </div>
        {INSOMENIA_INTERN.map((skill) => (
          <Skill bgColor={skill.color}>{skill.name}</Skill>
        ))}
        <ul className="project">
          <li>회사 내 기술 스택 적응을 위한 상거래 웹앱 프로젝트 진행(1개월)</li>
          <li>실제 고객사 프로젝트 서브 개발자 투입(3개월)</li>
          <ul className="task">
            <li>기능 구현</li>
            <li>퍼블리싱 및 유지 보수 진행</li>
          </ul>
        </ul>
      </div>
    </div>
  </Container>
);

export default Experience;
