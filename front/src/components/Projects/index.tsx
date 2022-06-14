import { BsPerson } from '@react-icons/all-files/bs/BsPerson';
import { GrGroup } from '@react-icons/all-files/gr/GrGroup';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import useDevice from 'src/hooks/useDevice';
import { Autoplay } from 'swiper';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Container, ProjectsContainer, SwiperConatiner } from './style';

const ProjectsComponent = () => {
  const isMobile = useDevice(650);

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
                        <Image
                          layout="fill"
                          objectFit="cover"
                          alt="cover"
                          src="https://raw.githubusercontent.com/JhsK/Tre/master/front/public/image/plan_page.png"
                        />
                        <div className="cardTitleContainer">
                          <span>Tre</span>
                          <span>To Record Everything - 일정 관리 사이트</span>
                        </div>
                      </a>
                    </Link>
                  </motion.div>
                </SwiperSlide>
                <SwiperSlide>
                  <motion.div className="card" whileHover={{ scale: 1.1 }}>
                    <Link href="/projects/Sungkyu">
                      <a>
                        <Image
                          layout="fill"
                          objectFit="cover"
                          alt="cover"
                          src="https://s3.ap-northeast-2.amazonaws.com/sungkyu.info/original/about_page.png"
                        />
                        <div className="cardTitleContainer">
                          <span>Sungkyu</span>
                          <span>프론트엔드 개발자 임성규 블로그</span>
                        </div>
                      </a>
                    </Link>
                  </motion.div>
                </SwiperSlide>
              </Swiper>
            </SwiperConatiner>
          ) : (
            <>
              <motion.div className="card" whileHover={{ scale: 1.1 }}>
                <Link href="/projects/Tre">
                  <a>
                    <Image
                      layout="fill"
                      objectFit="cover"
                      alt="cover"
                      src="https://raw.githubusercontent.com/JhsK/Tre/master/front/public/image/plan_page.png"
                    />
                    <div className="cardTitleContainer">
                      <span>Tre</span>
                      <span>To Record Everything - 일정 관리 사이트</span>
                    </div>
                  </a>
                </Link>
              </motion.div>
              <motion.div className="card" whileHover={{ scale: 1.1 }}>
                <Link href="/projects/Sungkyu">
                  <a>
                    <Image
                      layout="fill"
                      objectFit="cover"
                      alt="cover"
                      src="https://s3.ap-northeast-2.amazonaws.com/sungkyu.info/original/about_page.png"
                    />
                    <div className="cardTitleContainer">
                      <span>Sungkyu</span>
                      <span>프론트엔드 개발자 임성규 블로그</span>
                    </div>
                  </a>
                </Link>
              </motion.div>
            </>
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
                        <Image
                          layout="fill"
                          objectFit="cover"
                          alt="cover"
                          src="https://raw.githubusercontent.com/JhsK/JS-Groupstory/dbclass/public/image/aaaa.png"
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
                  <Image
                    layout="fill"
                    objectFit="cover"
                    alt="cover"
                    src="https://raw.githubusercontent.com/JhsK/JS-Groupstory/dbclass/public/image/aaaa.png"
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
