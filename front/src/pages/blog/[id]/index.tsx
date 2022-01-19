import React, { useEffect, useMemo } from 'react';
import styled from '@emotion/styled';
import Header from 'src/components/Header';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { getPostAPI, postDeleteAPI } from 'src/api';
import { useMutation, useQuery } from 'react-query';
import moment from 'moment';
import 'moment/locale/ko';
import { toast, ToastContainer } from 'react-toastify';
import { useRecoilValueLoadable } from 'recoil';
import { currentUserSelector } from 'src/atom';
import 'react-toastify/dist/ReactToastify.css';
import { TagValue } from 'src/components/Blog/Post';

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
  const currentUser = useRecoilValueLoadable(currentUserSelector);
  const { data: post } = useQuery(`post-${id}`, async () => {
    const data = await getPostAPI(String(id));
    return data;
  });

  const deleteMutate = useMutation(postDeleteAPI);
  return (
    <>
      <ToastContainer />
      <Header logoColor />
      <Container>
        <TitleContainer>
          <Title>{post?.title}</Title>
          <SubTitle>
            <span>{moment(post?.createdAt).format('LL')}</span>
            {currentUser?.contents?.isAuthenticated && (
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
      </Container>
    </>
  );
};

export default PostView;
