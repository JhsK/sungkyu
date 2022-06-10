import Link from 'next/link';
import React from 'react';
import { MdKeyboardArrowRight } from '@react-icons/all-files/md/MdKeyboardArrowRight';
import styled from '@emotion/styled';
import Image from 'next/image';

const PostCardContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;

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

const PostCard = ({ posts }) => (
  <>
    {posts &&
      posts.map((post) => (
        <PostCardContainer className="post" key={post.id}>
          <div className="postImg">
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
        </PostCardContainer>
      ))}
  </>
);

export default PostCard;
