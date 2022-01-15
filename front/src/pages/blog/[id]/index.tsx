import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import Header from 'src/components/Header';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { getPostAPI } from 'src/api';
import { useQuery } from 'react-query';
import moment from 'moment';
import 'moment/locale/ko';

const Viewer = dynamic(() => import('../../../components/Blog/Post/PostViewer'), { ssr: false });

const Container = styled.div`
  width: 1200px;
  margin: 10rem auto 0 auto;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

const SubTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const TagList = styled.div`
  display: flex;
  align-items: center;
`;

const UpdateAndDeleteBtn = styled.div`
  color: ${(props) => props.theme.FONT_COLOR_DARKGRAY};

  span {
    margin-left: 0.5rem;
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme.PUBLIC_BLACK};
    }
  }
`;

const PostView = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: post } = useQuery(`post-${id}`, async () => {
    const data = await getPostAPI(String(id));
    return data;
  });

  console.log(post);
  return (
    <>
      <Header logoColor />
      <Container>
        <TitleContainer>
          <Title>{post?.title}</Title>
          <SubTitle>
            <span>{moment(post?.createdAt).format('LL')}</span>
            <UpdateAndDeleteBtn>
              <span>수정</span>
              <span>삭제</span>
            </UpdateAndDeleteBtn>
          </SubTitle>
          <TagList>
            <span>JS</span>
            <span>자바스크립트</span>
            <span>React</span>
          </TagList>
        </TitleContainer>
        <Viewer content={post?.content} />
      </Container>
    </>
  );
};

export default PostView;
