import styled from '@emotion/styled';
import dayjs from 'dayjs';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { useQuery } from 'react-query';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getPostAPI } from 'src/api';
import Comment from 'src/components/Blog/Comment';
import usePostDeleteMutation from 'src/components/Blog/hooks/usePostDeleteMutation';
import { TagValue } from 'src/components/Blog/Post';
import Header from 'src/components/Header';
import useAuth from 'src/hooks/useAuth';

const Viewer = dynamic(() => import('../../../components/Blog/Post/PostViewer'), { ssr: false });

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 10rem auto 0 auto;

  @media ${(props) => props.theme.HDPC} {
    max-width: 1000px;
  }

  @media ${(props) => props.theme.PC} {
    max-width: 700px;
  }

  @media ${(props) => props.theme.TABLET_SM} {
    width: 80%;
  }
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
  color: ${(props) => props.theme.PUBLIC_DARKGRAY};

  span {
    margin-left: 0.5rem;
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme.PUBLIC_BLACK};
    }
  }
`;

const CommentContainer = styled.div`
  margin-top: 5rem;
  font-size: 1.2rem;
  font-weight: bold;
  width: 100%;
`;

const PostView = () => {
  const router = useRouter();
  const { id } = router.query;
  const currentUser = useAuth();
  const { mutate: deleteMutate } = usePostDeleteMutation();
  const { data: post } = useQuery(`post-${id}`, async () => {
    const data = await getPostAPI(String(id));
    return data;
  });

  const onClickDeletePost = () => {
    const deleteBoolean = window.confirm('정말 삭제하시겠습니까?');
    if (deleteBoolean) {
      deleteMutate(post?.id, {
        onSuccess: (data) => router.push('/blog'),
      });
    }
  };
  return (
    <>
      <Head>
        <title>{`${post?.title} - Sungkyu`}</title>
        <meta name="description" content={post?.content} />
        <meta property="og:title" content={post?.title} />
        <meta property="og:description" content={post?.content} />
        <meta property="og:image" content={post?.Images.length > 0 ? `${post?.Images[0].image_url}` : 'default.png'} />
        <meta property="og:url" content={`https://sungkyu.info/blog/${id}`} />
      </Head>
      <ToastContainer />
      <Header logoColor />
      <Container>
        <TitleContainer>
          <Title>{post?.title}</Title>
          <SubTitle>
            <span>{dayjs(post?.createdAt).format('YY년 M월 D일')}</span>
            {currentUser?.isAuthenticated && (
              <UpdateAndDeleteBtn>
                <span onClick={() => router.push(`/blog/${id}/update`)}>수정</span>
                <span onClick={onClickDeletePost}>삭제</span>
              </UpdateAndDeleteBtn>
            )}
          </SubTitle>
          <TagList>
            {post?.Tags.map((tag) => (
              <TagValue key={tag.id}>{`#${tag.name}`}</TagValue>
            ))}
          </TagList>
        </TitleContainer>
        <Viewer content={post?.content} />
        <CommentContainer>
          <span>Comments</span>
          <hr />
          <Comment repo="JhsK/sungkyu" />
        </CommentContainer>
      </Container>
    </>
  );
};

export default PostView;
