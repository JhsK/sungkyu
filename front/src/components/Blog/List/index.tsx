/* eslint-disable no-useless-escape */
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import { useInfiniteQuery } from 'react-query';
import { useRecoilState } from 'recoil';
import { getPostsAPI } from 'src/api';
import { postsInfinite } from 'src/atom';
import { PostModel } from 'src/constant';
import useAuth from 'src/hooks/useAuth';
import useDevice from 'src/hooks/useDevice';
import MobileTags from '../MobileTags';
import Search from '../Search';
import {
  All,
  Container,
  ContentContainer,
  CreateBtn,
  Hr,
  LableContainer,
  Latest,
  ListContainer,
  Newest,
  PostTitle,
  TagsContainer,
} from './style';

interface CategoryType {
  name: '최신순' | '후순위' | '태그' | 'All';
  option: 'DESC' | 'ASC';
}

const List = ({ inView }) => {
  const currentUser = useAuth();
  const router = useRouter();
  const isTablet = useDevice(980);
  const isMobile = useDevice(650);
  const isMobileSM = useDevice(400);
  const [infiniteBool, setInfiniteBool] = useRecoilState(postsInfinite);
  const [textLength, setTextLength] = useState(160);
  const [posts, setPosts] = useState<PostModel[]>([]);
  const [serachValue, setSearchValue] = useState('');
  const categoryRef = useRef<CategoryType>({ name: 'All', option: 'DESC' });
  const [tagId, setTagId] = useState<string>(null);

  const {
    data: postsData,
    isLoading,
    fetchNextPage,
    refetch,
    hasNextPage,
  } = useInfiniteQuery(
    ['posts', tagId, serachValue],
    ({ pageParam = 0 }) => getPostsAPI(categoryRef.current.option, pageParam, serachValue, tagId),
    {
      onSuccess: (data) => setPosts(data?.pages.flat()),
      getNextPageParam: (lastPage) => lastPage?.[lastPage.length - 1]?.id,
    },
  );

  useEffect(() => {
    setInfiniteBool(!isLoading && hasNextPage);
  }, [isLoading, hasNextPage]);

  useEffect(() => {
    if (router.query?.tag) {
      categoryRef.current = { name: '태그', option: 'DESC' };
      setTagId(router.query?.tag as string);
    }
  }, [router.query]);

  useEffect(() => {
    if (inView && infiniteBool) {
      fetchNextPage();
    }
  }, [inView, infiniteBool, fetchNextPage]);

  useEffect(() => {
    if (isTablet) setTextLength(100);
    if (isMobile) setTextLength(40);
  }, [isTablet, isMobile]);

  const onClickAll = () => {
    categoryRef.current = { name: 'All', option: 'DESC' };
    setTagId(null);
    setSearchValue('');
  };

  return (
    <Container>
      <CreateBtn>
        {currentUser?.isAuthenticated && (
          <Link href="/blog/new">
            <a>작성하기</a>
          </Link>
        )}
      </CreateBtn>
      {isMobile && <MobileTags />}
      <LableContainer>
        <div className="filter">
          <All onClick={onClickAll} color={categoryRef.current.name}>
            All
          </All>
          <Newest
            color={categoryRef.current.name}
            onClick={() => {
              categoryRef.current = { name: '최신순', option: 'DESC' };
              refetch();
            }}
          >
            최신순
          </Newest>
          <Latest
            color={categoryRef.current.name}
            onClick={(e) => {
              e.preventDefault();
              categoryRef.current = { name: '후순위', option: 'ASC' };
              refetch();
            }}
          >
            후순위
          </Latest>
        </div>
        <Search setSearchValue={setSearchValue} />
      </LableContainer>
      {posts &&
        posts.map((post) => (
          <>
            <ListContainer key={post.id} onClick={() => router.push(`/blog/${post.id}`)}>
              <ContentContainer key={post.id}>
                <div key={post.id}>
                  <PostTitle>{isMobile ? `${post?.title.substring(0, 6)}...` : post?.title}</PostTitle>
                  <div className="content">
                    {post?.content.length > textLength
                      ? `${post?.content.substring(0, textLength).replaceAll(/<[^>]*>?|[#<>*_\+\[\]-`]/gm, '')}...`
                      : post?.content.replaceAll(/<[^>]*>?|[#<>*_\+\[\]-`]/gm, '')}
                  </div>
                </div>
                <TagsContainer>
                  {post?.Tags.map((tag) => (
                    <span key={tag.id}>{`#${tag.name}`}</span>
                  ))}
                </TagsContainer>
              </ContentContainer>
              <div className="nextImage">
                <Image
                  layout="fill"
                  src={post?.Images.length > 0 ? `${post?.Images[0].image_url}` : '/default.png'}
                  alt="sumnail"
                  objectFit="cover"
                />
              </div>
              {isMobileSM && (
                <PostTitle>{post?.title.length > 20 ? `${post?.title.substring(0, 20)}...` : post?.title}</PostTitle>
              )}
            </ListContainer>
            <Hr key={post.createdAt} />
          </>
        ))}
    </Container>
  );
};

export default List;
