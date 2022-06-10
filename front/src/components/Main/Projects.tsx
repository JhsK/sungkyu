import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import useDevice from 'src/hooks/useDevice';
import { Autoplay } from 'swiper';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

const verticalScroll = keyframes`
    0% { 
        -moz-transform: translateY(0);
        -ms-transform: translateY(0);
        -webkit-transform: translateY(0);
        transform: translateY(0);
    }
	100% {
        -moz-transform: translateY(-8448px);
        -ms-transform: translateY(-8448px);
        -webkit-transform: translateY(-8448px);
        transform: translateY(-8448px);
        }
`;

const fadeInAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

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
  scroll-snap-type: start;
  background-color: ${(props) => props.theme.FOOTER_GRAY};
  background-blend-mode: multiply;
  background-attachment: fixed;
`;

const Content = styled.div`
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

  .textContainer {
    /* transform: translateX(-30%); */
  }

  .projectsContainer {
    vertical-align: middle;

    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      height: 100vh;

      .projects {
        width: 400px;
        height: 140px;
        margin-bottom: 4.5rem;
        background-color: gray;
      }
    }

    .containerActive {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      height: calc(280px * 4);

      .projects {
        width: 400px;
        height: 140px;
        margin-bottom: 4.5rem;
        background-color: ${(props) => props.theme.PUBLIC_WHITE};

        img {
          width: 40%;
          object-fit: cover;
          height: 100%;
        }
      }
    }
  }
`;

const ListContainer = styled.div`
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

  a {
    position: relative;
    width: 100%;
    height: 150px;
    border-radius: 15px 15px 0 0;

    & > * {
      height: 150px;
      position: relative !important;
      border-radius: 15px 15px 0 0;
    }
  }

  .projects {
    padding: 1rem 0 0 1rem;
    height: 100%;

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
`;

const SwiperContainer = styled.div`
  width: 100%;
`;

const Projects = () => {
  const isMobile = useDevice(650);

  return (
    <Container>
      <Section>
        <Content>
          <div className="textContainer">
            <span>개인 &sdot; 팀 프로젝트를</span>
            <span>통해 진행한</span>
            <span>프로젝트입니다.</span>
          </div>
          {isMobile ? (
            <SwiperContainer>
              <Swiper
                modules={[Autoplay]}
                loop
                slidesPerView={1}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
              >
                <SwiperSlide>
                  <motion.div className="card" whileHover={{ scale: 1.1 }}>
                    <ListContainer>
                      <Link href="/projects/Tre">
                        <a>
                          <Image
                            layout="fill"
                            objectFit="cover"
                            alt="cover"
                            src="https://raw.githubusercontent.com/JhsK/Tre/master/front/public/image/plan_page.png"
                          />
                          <div className="projects">
                            <span>Tre</span>
                            <span>To Record Everything - 일정 관리 사이트</span>
                          </div>
                        </a>
                      </Link>
                    </ListContainer>
                  </motion.div>
                </SwiperSlide>
                <SwiperSlide>
                  <motion.div className="card" whileHover={{ scale: 1.1 }}>
                    <ListContainer>
                      <Link href="/projects/Groupstory">
                        <a>
                          <Image
                            layout="fill"
                            objectFit="cover"
                            alt="cover"
                            src="https://raw.githubusercontent.com/JhsK/JS-Groupstory/dbclass/public/image/aaaa.png"
                          />
                          <div className="projects">
                            <span>Groupstory</span>
                            <span>백석대학교 동아리 모집 사이트</span>
                          </div>
                        </a>
                      </Link>
                    </ListContainer>
                  </motion.div>
                </SwiperSlide>
                <SwiperSlide>
                  <motion.div className="card" whileHover={{ scale: 1.1 }}>
                    <ListContainer>
                      <Link href="/projects/Sungkyu">
                        <a>
                          <Image
                            layout="fill"
                            objectFit="cover"
                            alt="cover"
                            src="https://s3.ap-northeast-2.amazonaws.com/sungkyu.info/original/about_page.png"
                          />
                          <div className="projects">
                            <span>Sungkyu</span>
                            <span>프론트엔드 개발자 임성규 블로그</span>
                          </div>
                        </a>
                      </Link>
                    </ListContainer>
                  </motion.div>
                </SwiperSlide>
              </Swiper>
            </SwiperContainer>
          ) : (
            <div className="projectsContainer">
              <motion.div className="card" whileHover={{ scale: 1.1 }}>
                <ListContainer>
                  <Link href="/projects/Tre">
                    <a>
                      <Image
                        layout="fill"
                        objectFit="cover"
                        alt="cover"
                        src="https://raw.githubusercontent.com/JhsK/Tre/master/front/public/image/plan_page.png"
                      />
                      <div className="projects">
                        <span>Tre</span>
                        <span>To Record Everything - 일정 관리 사이트</span>
                      </div>
                    </a>
                  </Link>
                </ListContainer>
              </motion.div>
              <motion.div className="card" whileHover={{ scale: 1.1 }}>
                <ListContainer>
                  <Link href="/projects/Groupstory">
                    <a>
                      <Image
                        layout="fill"
                        objectFit="cover"
                        alt="cover"
                        src="https://raw.githubusercontent.com/JhsK/JS-Groupstory/dbclass/public/image/aaaa.png"
                      />
                      <div className="projects">
                        <span>Groupstory</span>
                        <span>백석대학교 동아리 모집 사이트</span>
                      </div>
                    </a>
                  </Link>
                </ListContainer>
              </motion.div>
              <motion.div className="card" whileHover={{ scale: 1.1 }}>
                <ListContainer>
                  <Link href="/projects/Sungkyu">
                    <a>
                      <Image
                        layout="fill"
                        objectFit="cover"
                        alt="cover"
                        src="https://s3.ap-northeast-2.amazonaws.com/sungkyu.info/original/about_page.png"
                      />
                      <div className="projects">
                        <span>Sungkyu</span>
                        <span>프론트엔드 개발자 임성규 블로그</span>
                      </div>
                    </a>
                  </Link>
                </ListContainer>
              </motion.div>
            </div>
          )}
        </Content>
      </Section>
    </Container>
  );
};

export default Projects;
