import Link from 'next/link';
import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import styled from '@emotion/styled';
import { configs } from 'src/config';

const { API_URL } = configs;

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
      width: 100%;
      background-color: gray;
      height: 200px;
      margin-bottom: 1.5rem;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
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
`;

const PostCard = ({ posts }) => (
  <>
    {posts &&
      posts.map((post) => (
        <PostCardContainer className="post" key={post.id}>
          <div className="postImg">
            {post?.Images && <img src={`${API_URL}/${post?.Images[0].image_url}`} alt="post" />}
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
