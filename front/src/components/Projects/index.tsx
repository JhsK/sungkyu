import React from 'react';
import styled from '@emotion/styled';
import { GrGroup } from 'react-icons/gr';
import { BsPerson } from 'react-icons/bs';
import { motion } from 'framer-motion';
import Link from 'next/link';
import useDevice from 'src/hooks/useDevice';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 5rem auto 0 auto;

  @media ${(props) => props.theme.HDPC} {
    max-width: 1000px;
  }

  @media ${(props) => props.theme.PC} {
    max-width: 700px;
  }
`;

const ProjectsContainer = styled.div`
  margin-bottom: 5rem;
  width: 100%;

  .titleContainer {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

    @media ${(props) => props.theme.TABLET} {
      justify-content: center;
    }

    .icons {
      margin-right: 0.5rem;
    }

    .ProjectsTitle {
      font-size: 2rem;
      font-weight: bold;
      line-height: 3rem;
    }
  }

  .cardContainer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    @media ${(props) => props.theme.TABLET} {
      flex-wrap: nowrap;
      justify-content: center;
    }

    .card {
      width: 23%; /* 반응형으로 적용 필요 */
      height: 250px;
      border-radius: 15px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      cursor: pointer;

      @media ${(props) => props.theme.HDPC} {
        width: 28%;
      }

      @media ${(props) => props.theme.PC} {
        width: 40%;
      }

      @media ${(props) => props.theme.TABLET} {
        width: 250px;
      }

      img {
        width: 100%;
        height: 150px;
        object-fit: cover;
        border-radius: 15px 15px 0 0;
      }

      .cardTitleContainer {
        padding: 1rem 0 0 1rem;

        span:nth-of-type(1) {
          display: block;
          font-size: 1.3rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }
        span:nth-of-type(2) {
          font-size: 0.9rem;
        }
      }
    }
  }
`;

const SwiperConatiner = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ProjectsComponent = () => {
  const isMobile = useDevice(768);

  return (
    <Container>
      <ProjectsContainer>
        <div className="titleContainer">
          <BsPerson size="40" className="icons" />
          <span className="ProjectsTitle">개인 프로젝트</span>
        </div>
        <div className="cardContainer">
          {isMobile ? (
            <SwiperConatiner>
              <Swiper
                modules={[Autoplay]}
                loop
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
              >
                <SwiperSlide>
                  <motion.div className="card" whileHover={{ scale: 1.1 }}>
                    <Link href="/projects/Tre">
                      <a>
                        <img
                          src="https://raw.githubusercontent.com/JhsK/Tre/master/front/public/image/plan_page.png"
                          alt="cover"
                        />
                        <div className="cardTitleContainer">
                          <span>Tre</span>
                          <span>To Record Everything - 일정 관리 사이트</span>
                        </div>
                      </a>
                    </Link>
                  </motion.div>
                </SwiperSlide>
              </Swiper>
            </SwiperConatiner>
          ) : (
            <motion.div className="card" whileHover={{ scale: 1.1 }}>
              <Link href="/projects/Tre">
                <a>
                  <img
                    src="https://raw.githubusercontent.com/JhsK/Tre/master/front/public/image/plan_page.png"
                    alt="cover"
                  />
                  <div className="cardTitleContainer">
                    <span>Tre</span>
                    <span>To Record Everything - 일정 관리 사이트</span>
                  </div>
                </a>
              </Link>
            </motion.div>
          )}
        </div>
      </ProjectsContainer>
      <ProjectsContainer>
        <div className="titleContainer">
          <GrGroup size="40" className="icons" />
          <span className="ProjectsTitle">팀 프로젝트</span>
        </div>
        <div className="cardContainer">
          {isMobile ? (
            <SwiperConatiner>
              <Swiper
                modules={[Autoplay]}
                loop
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
              >
                <SwiperSlide>
                  <motion.div className="card" whileHover={{ scale: 1.1 }}>
                    <Link href="/projects/Groupstory">
                      <a>
                        <img
                          src="https://raw.githubusercontent.com/JhsK/JS-Groupstory/dbclass/public/image/aaaa.png"
                          alt="cover"
                        />
                        <div className="cardTitleContainer">
                          <span>Groupstory</span>
                          <span>백석대학교 동아리 모집 사이트</span>
                        </div>
                      </a>
                    </Link>
                  </motion.div>
                </SwiperSlide>
              </Swiper>
            </SwiperConatiner>
          ) : (
            <motion.div className="card" whileHover={{ scale: 1.1 }}>
              <Link href="/projects/Groupstory">
                <a>
                  <img
                    src="https://raw.githubusercontent.com/JhsK/JS-Groupstory/dbclass/public/image/aaaa.png"
                    alt="cover"
                  />
                  <div className="cardTitleContainer">
                    <span>Groupstory</span>
                    <span>백석대학교 동아리 모집 사이트</span>
                  </div>
                </a>
              </Link>
            </motion.div>
          )}
        </div>
      </ProjectsContainer>
    </Container>
  );
};

export default ProjectsComponent;
