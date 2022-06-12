import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useQuery } from 'react-query';
import { getMainPostsAPI } from 'src/api';
import useDevice from 'src/hooks/useDevice';
import PostCard from './PostCard';
import PostSwiper from './PostSwiper';
import { Container, Content, PostContainer, Section } from './style';

const Blog = () => {
  const isMobile = useDevice(768);
  const [ref, inView] = useInView({ threshold: 0 });
  const { data: posts } = useQuery('main', getMainPostsAPI, {
    staleTime: 5000,
  });

  return (
    <Container>
      <Section>
        <Content>
          <div ref={ref} className={inView ? 'activeFade' : 'disableFade'}>
            <span className="title">BLOG</span>
            <PostContainer>
              {posts && isMobile ? <PostSwiper posts={posts} /> : <PostCard posts={posts} />}
            </PostContainer>
          </div>
        </Content>
      </Section>
    </Container>
  );
};

export default Blog;
