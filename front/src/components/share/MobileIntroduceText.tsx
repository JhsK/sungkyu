import styled from '@emotion/styled';
import 'aos/dist/aos.css';
import React from 'react';
import { BsCheck } from '@react-icons/all-files/bs/BsCheck';

const Container = styled.div`
  padding: 2rem 1rem;
  span {
    display: block;
  }

  .title {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }

  .content {
    display: flex;
    align-items: flex-start;
    margin-bottom: 1rem;

    span {
      line-height: 1.5rem;
    }

    div {
      margin-right: 0.3rem;
    }
  }
`;

const MobileIntroduceText = () => (
  <Container>
    <span data-aos="fade-up" className="title" role="img" aria-labelledby="smile">
      저는 개발자 임성규입니다 😁
    </span>
    <div>
      <div data-aos="fade-up" data-aos-duration="3000" className="content">
        <div>
          <BsCheck color="#007fff" />
        </div>
        <span>불편한 점을 해소시킬 수 있는 개발자가 되기 위해 끊임없이 공부하는 중입니다.</span>
      </div>
      <div data-aos="fade-up" data-aos-duration="3000" className="content">
        <div>
          <BsCheck color="#007fff" />
        </div>
        <span>성실함이 강점인 저는 1일 1커밋 운동과 직접 개발한 기술 블로그를 운영하고 있습니다.</span>
      </div>
      <div data-aos="fade-up" data-aos-duration="3000" className="content">
        <div>
          <BsCheck color="#007fff" />
        </div>
        <span>Clean Code에 대해 생각하며 효율적인 코드를 작성하기 위해 고민합니다.</span>
      </div>
    </div>
  </Container>
);

export default MobileIntroduceText;
