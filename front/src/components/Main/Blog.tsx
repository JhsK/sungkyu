import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { useInView } from 'react-intersection-observer';
import { useQuery } from 'react-query';
import { getMainPostsAPI } from 'src/api';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import PostCard from './PostCard';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: auto;
`;

const Section = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.PUBLIC_WHITE};
`;

const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  @media ${(props) => props.theme.HDPC} {
    max-width: 1000px;
  }

  @media ${(props) => props.theme.PC} {
    max-width: 700px;
  }

  .activeFade {
    width: 100%;
    animation: ${fadeIn} 5s;
  }

  .disableFade {
    width: 100%;
    animation: ${fadeOut} 5s;
  }

  .title {
    font-size: 2rem;
    font-weight: bold;
  }
`;

const PostContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  padding-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${(props) => props.theme.HDPC} {
    max-width: 1000px;
  }

  @media ${(props) => props.theme.PC} {
    max-width: 700px;
  }

  @media ${(props) => props.theme.TABLET} {
    width: 100%;
  }

  .post {
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;

    @media ${(props) => props.theme.TABLET} {
      width: 100%;
    }

    .postImg {
      width: 100%;
      background-color: gray;
      height: 200px;
      margin-bottom: 1.5rem;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .postTitle {
      font-size: 1.5rem;
      font-weight: bold;
    }

    .moreContainer {
      display: flex;
      align-items: center;
      color: ${(props) => props.theme.PUBLIC_DARKGRAY};
      margin-top: 1rem;

      .font {
        font-size: 0.9rem;
      }
      .icon {
        font-size: 1rem;
      }
    }
  }

  .swiperContainer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Blog = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [ref, inView] = useInView({ threshold: 0 });
  const { data: posts } = useQuery('main', getMainPostsAPI, {
    staleTime: 5000,
  });

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else setIsMobile(false);
  });

  return (
    <Container>
      <Section>
        <Content>
          <div ref={ref} className={inView ? 'activeFade' : 'disableFade'}>
            <span className="title">BLOG</span>
            <PostContainer>
              {posts && isMobile ? (
                <Swiper
                  className="swiperContainer"
                  modules={[Autoplay]}
                  loop
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                >
                  {posts &&
                    posts.map((post) => (
                      <SwiperSlide>
                        <div className="post" key={post.id}>
                          <div className="postImg">
                            {post?.Images && (
                              <img src={`http://localhost:3001/${post?.Images[0].image_url}`} alt="post" />
                            )}
                          </div>
                          <span className="postTitle">{post.title}</span>
                          <Link href={`/blog/${post.id}`}>
                            <a>
                              <div className="moreContainer">
                                <span className="font">more</span>
                                <MdKeyboardArrowRight className="icon" />
                              </div>
                            </a>
                          </Link>
                        </div>
                      </SwiperSlide>
                    ))}
                </Swiper>
              ) : (
                <PostCard posts={posts} />
              )}
            </PostContainer>
          </div>
        </Content>
      </Section>
    </Container>
  );
};

export default Blog;
