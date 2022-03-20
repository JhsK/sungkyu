import styled from '@emotion/styled';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { useInfiniteQuery } from 'react-query';
import { useRecoilState } from 'recoil';
import { getPostsAPI, getTagFilterAPI } from 'src/api';
import { postsInfinite } from 'src/atom';
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

    @media ${(props) => props.theme.MOBILE_SM} {
      margin-bottom: 1rem;
    }
  }

  input {
    width: 150px;
    height: 20px;
    border-radius: 20px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    padding-left: 0.5rem;
  }

  input:focus {
    outline: none;
  }

  @media ${(props) => props.theme.MOBILE_SM} {
    flex-wrap: wrap;
  }
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
  flex-wrap: wrap;
  justify-content: space-between;
  transition: box-shadow 0.3s ease 0s, border-color 0.3s ease 0s;

  &:hover {
    box-shadow: 4px 4px 1px -1px rgba(0, 0, 0, 0.12);
  }

  img {
    width: 30%;
    height: 100%;
    object-fit: cover;

    @media ${(props) => props.theme.MOBILE} {
      width: 45%;
    }

    @media ${(props) => props.theme.MOBILE_SM} {
      width: 100%;
    }
  }
`;

const ContentContainer = styled.div`
  width: 65%;
  padding-right: 0.8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;

  @media ${(props) => props.theme.MOBILE} {
    width: 50%;
  }

  @media ${(props) => props.theme.MOBILE_SM} {
    display: none;
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

const PostTitle = styled.span`
  display: block;
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 1.3rem;

  @media ${(props) => props.theme.MOBILE} {
    font-size: 1.3rem;
  }

  @media ${(props) => props.theme.MOBILE_SM} {
    margin-top: 0.7rem;
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

  @media ${(props) => props.theme.MOBILE_SM} {
    margin: 3rem 0;
  }
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
  const categoryRef = useRef<CategoryType>({ name: '최신순', option: 'DESC' });

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

  const onChangeSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const onSubmitSearch = () => {
    refetch();
  };

  const tagFilter = async (id) => {
    const data = await getTagFilterAPI(id);
    setPosts(data);
  };

  useEffect(() => {
    setInfiniteBool(!isLoading && hasNextPage);
  }, [isLoading, hasNextPage]);

  useEffect(() => {
    if (router.query?.tag) {
      categoryRef.current = { name: '태그', option: 'DESC' };
      tagFilter(router.query.tag);
    }
  }, [router.query]);

  useEffect(() => {
    if (inView && infiniteBool) {
      console.log('fasf');
      fetchNextPage();
    }
  }, [inView, infiniteBool, fetchNextPage]);

  useEffect(() => {
    if (isTablet) setTextLength(100);
    if (isMobile) setTextLength(40);
  }, [isTablet, isMobile]);

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
            onClick={(e) => {
              e.preventDefault();
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
                  <PostTitle>{isMobile ? `${post?.title.substring(0, 6)}...` : post?.title}</PostTitle>
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
              <img alt="sumnail" src={post?.Images.length > 0 ? `${post?.Images[0].image_url}` : 'default.png'} />
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
