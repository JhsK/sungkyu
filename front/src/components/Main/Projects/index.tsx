import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import useDevice from 'src/hooks/useDevice';
import { Autoplay } from 'swiper';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Container, Content, ListContainer, Section, SwiperContainer } from './style';

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
