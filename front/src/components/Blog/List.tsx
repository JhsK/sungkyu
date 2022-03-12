import styled from '@emotion/styled';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { useInView } from 'react-intersection-observer';
import { dehydrate, QueryClient, useInfiniteQuery, useQuery } from 'react-query';
import { getPostsAPI, getTagFilterAPI } from 'src/api';
import { PostModel } from 'src/constant';
import useAuth from 'src/hooks/useAuth';
import useDevice from 'src/hooks/useDevice';
import MobileTags from './MobileTags';

const Container = styled.div`
  width: 73%;

  a {
    margin-bottom: 1rem;
  }
`;

const LableContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;

  .filter {
    span {
      margin-right: 1.5rem;
      font-weight: 800;
      font-size: 1rem;
      cursor: pointer;
    }
  }

  input {
    width: 150px;
    height: 20px;
    border-radius: 20px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    padding-left: 0.5rem;

    @media ${(props) => props.theme.MOBILE_SM} {
      width: 120px;
    }
  }

  input:focus {
    outline: none;
  }
`;

const All = styled.span`
  color: ${(props) => (props.color === 'All' ? props.theme.PUBLIC_BLACK : props.theme.NO_ACTIVE_CATEGORY_COLOR)};
`;

const Newest = styled.span`
  color: ${(props) => (props.color === '최신순' ? props.theme.PUBLIC_BLACK : props.theme.PUBLIC_DARKGRAY)};
`;

const Latest = styled.span`
  color: ${(props) => (props.color === '후순위' ? props.theme.PUBLIC_BLACK : props.theme.NO_ACTIVE_CATEGORY_COLOR)};
`;

const ListContainer = styled.div`
  width: 100%;
  height: 170px;
  cursor: pointer;
  display: flex;
  align-items: flex-start;
  transition: box-shadow 0.3s ease 0s, border-color 0.3s ease 0s;

  &:hover {
    box-shadow: 4px 4px 1px -1px rgba(0, 0, 0, 0.12);
    /* transition: box-shadow 0.3s ease 0s, border-color 0.3s ease 0s; */
  }

  img {
    width: 30%;
    height: 100%;
    object-fit: cover;

    @media ${(props) => props.theme.MOBILE} {
      width: 50%;
    }
  }
`;

const ContentContainer = styled.div`
  width: 70%;
  padding-right: 0.8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;

  @media ${(props) => props.theme.MOBILE} {
    width: 50%;
  }

  .title {
    display: block;
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 1.3rem;

    @media ${(props) => props.theme.MOBILE} {
      font-size: 1.3rem;
    }
  }

  .content {
    @media ${(props) => props.theme.PC} {
      font-size: 0.9rem;
    }
  }

  div {
    line-height: 1.5rem;
  }
`;

const TagsContainer = styled.div`
  display: flex;
  align-items: center;

  span {
    font-size: 0.8rem;
    color: ${(props) => props.theme.POST_EDIT_TITLE_BORDER_COLOR};
    margin-right: 0.8rem;
  }
`;

const Hr = styled.hr`
  opacity: 0.2;
  margin: 2rem 0;
`;

const CreateBtn = styled.div`
  margin-bottom: 1rem;
`;

const SearchContainer = styled.div`
  position: relative;
`;

const SearchBtnContainer = styled.div`
  position: absolute;
  top: 5px;
  right: 10px;
  cursor: pointer;
`;

interface CategoryType {
  name: '최신순' | '후순위' | '태그';
  option: 'DESC' | 'ASC';
}

const List = () => {
  const currentUser = useAuth();
  const router = useRouter();
  const isTablet = useDevice(980);
  const isMobile = useDevice(650);
  const [textLength, setTextLength] = useState(160);
  const [posts, setPosts] = useState<PostModel[]>([]);
  const [serachValue, setSearchValue] = useState('');
  const categoryRef = useRef<CategoryType>({ name: '최신순', option: 'DESC' });
  const [ref, inView] = useInView();

  const {
    data: postsData,
    isLoading,
    fetchNextPage,
    refetch,
    hasNextPage,
  } = useInfiniteQuery(
    'posts',
    ({ pageParam = 0 }) => getPostsAPI(categoryRef.current.option, pageParam, serachValue),
    {
      onSuccess: (data) => setPosts(data?.pages.flat()),
      getNextPageParam: (lastPage) => lastPage?.[lastPage.length - 1]?.id,
      staleTime: 1000,
    },
  );

  const infiniteBool = !isLoading && hasNextPage;

  const onChangeSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const onSubmitSearch = () => {
    refetch();
  };

  const tagFilter = async (id) => {
    const data = await getTagFilterAPI(id);
    setPosts(data);
    return data;
  };

  useEffect(() => {
    if (router.query?.tag) {
      categoryRef.current = { name: '태그', option: 'DESC' };
      tagFilter(router.query.tag);
    }
  }, [router.query]);

  useEffect(() => {
    if (inView && infiniteBool) {
      fetchNextPage();
    }
  }, [inView, infiniteBool, fetchNextPage]);

  useEffect(() => {
    if (isTablet) setTextLength(100);
  }, [isTablet]);

  useEffect(() => {
    if (isMobile) setTextLength(30);
  }, [isMobile]);

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
            onClick={() => {
              categoryRef.current = { name: '후순위', option: 'ASC' };
              refetch();
            }}
          >
            후순위
          </Latest>
        </div>
        <SearchContainer>
          <input type="text" onChange={onChangeSearch} />
          <SearchBtnContainer>
            <BiSearch onClick={onSubmitSearch} />
          </SearchBtnContainer>
        </SearchContainer>
      </LableContainer>
      {posts &&
        posts.map((post) => (
          <>
            <ListContainer key={post.id} onClick={() => router.push(`/blog/${post.id}`)}>
              <ContentContainer key={post.id}>
                <div key={post.id}>
                  <span className="title">{isMobile ? `${post?.title.substring(0, 6)}...` : post?.title}</span>
                  <div className="content">
                    {post?.content.length > textLength ? `${post?.content.substring(0, textLength)}...` : post?.content}
                  </div>
                </div>
                <TagsContainer>
                  {post?.Tags.map((tag) => (
                    <span key={tag.id}>{`#${tag.name}`}</span>
                  ))}
                </TagsContainer>
              </ContentContainer>
              <img alt="sumnail" src={post?.Images ? `${post?.Images[0].image_url}` : 'default.png'} />
            </ListContainer>
            <Hr key={post.createdAt} />
          </>
        ))}
      <div ref={infiniteBool ? ref : undefined} />
    </Container>
  );
};

export default List;
