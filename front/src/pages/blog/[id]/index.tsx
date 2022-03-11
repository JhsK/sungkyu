import styled from '@emotion/styled';
import moment from 'moment';
import 'moment/locale/ko';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React from 'react';
import { useMutation, useQuery } from 'react-query';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getPostAPI, postDeleteAPI } from 'src/api';
import { TagValue } from 'src/components/Blog/Post';
import Comment from 'src/components/Blog/Comment';
import Header from 'src/components/Header';
import useAuth from 'src/hooks/useAuth';
import Head from 'next/head';

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
  const { data: post } = useQuery(`post-${id}`, async () => {
    const data = await getPostAPI(String(id));
    return data;
  });

  const deleteMutate = useMutation(postDeleteAPI);
  return (
    <>
      <Head>
        <meta name="description" content={post?.content} />
        <meta property="og:title" content={post?.title} />
        <meta property="og:description" content={post?.content} />
        <meta property="og:image" content={post?.Images[0].image_url} />
        <meta property="og:url" content={`https://sungkyu.info/blog/${id}`} />
      </Head>
      <ToastContainer />
      <Header logoColor />
      <Container>
        <TitleContainer>
          <Title>{post?.title}</Title>
          <SubTitle>
            <span>{moment(post?.createdAt).format('LL')}</span>
            {currentUser?.isAuthenticated && (
              <UpdateAndDeleteBtn>
                <span onClick={() => router.push(`/blog/${id}/update`)}>수정</span>
                <span
                  onClick={() => {
                    const deleteBoolean = window.confirm('정말 삭제하시겠습니까?');
                    if (deleteBoolean) {
                      deleteMutate.mutate(post.id, {
                        onSuccess: () => {
                          toast.success('게시물을 삭제했습니다', {
                            position: 'top-center',
                            autoClose: 2000,
                            hideProgressBar: true,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                          });

                          setTimeout(() => {
                            router.replace('/blog');
                          }, 2000);
                        },
                      });
                    }
                  }}
                >
                  삭제
                </span>
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
