import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const PostCardContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  cursor: pointer;

  @media ${(props) => props.theme.TABLET} {
    width: 100%;
  }

  .postImg {
    position: relative;
    width: 100%;
    background-color: gray;
    height: 200px;
    margin-bottom: 1.5rem;
  }

  .postTitle {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

const PostCard = ({ posts }) => {
  const router = useRouter();

  return (
    <>
      {posts &&
        posts.map((post) => (
          <PostCardContainer className="post" key={post.id} onClick={() => router.push(`/blog/${post.id}`)}>
            <div className="postImg">
              <Image
                layout="fill"
                objectFit="cover"
                alt="post"
                src={post?.Images.length > 0 ? `${post?.Images[0]?.image_url}` : '/default.png'}
              />
            </div>
            <span className="postTitle">{post.title}</span>
          </PostCardContainer>
        ))}
    </>
  );
};

export default PostCard;
