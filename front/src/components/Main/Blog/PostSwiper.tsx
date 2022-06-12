import React from 'react';
import { PostModel } from 'src/constant';
import { Autoplay } from 'swiper';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import Link from 'next/link';
import { MdKeyboardArrowRight } from '@react-icons/all-files/md/MdKeyboardArrowRight';
import styled from '@emotion/styled';

const Container = styled.div`
  width: 100%;

  .swiperContainer {
    width: 100%;
  }
`;

const PostContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;

  @media ${(props) => props.theme.TABLET} {
    width: 450px;
    margin: 0 auto;
  }

  @media ${(props) => props.theme.MOBILE} {
    width: 300px;
  }

  @media ${(props) => props.theme.MOBILE_FOLD} {
    width: 200px;
  }

  .postImg {
    position: relative;
    width: 100%;
    background-color: gray;
    height: 200px;
    margin-bottom: 1.5rem;

    @media ${(props) => props.theme.TABLET} {
      height: 300px;
    }

    @media ${(props) => props.theme.MOBILE} {
      height: 250px;
    }

    @media ${(props) => props.theme.MOBILE_FOLD} {
      height: 200px;
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
`;

interface PostSwiperProps {
  posts: PostModel[];
}

const PostSwiper = ({ posts }: PostSwiperProps) => {
  console.log(posts);
  return (
    <Container>
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
            <SwiperSlide key={post.id}>
              <PostContainer key={post.id}>
                <div className="postImg" key={post.id}>
                  <Image
                    layout="fill"
                    objectFit="cover"
                    alt="post"
                    src={post?.Images.length > 0 ? `${post?.Images[0]?.image_url}` : '/default.png'}
                  />
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
              </PostContainer>
            </SwiperSlide>
          ))}
      </Swiper>
    </Container>
  );
};

export default PostSwiper;
