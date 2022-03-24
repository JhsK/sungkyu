import React from 'react';
import styled from '@emotion/styled';
import { useQuery } from 'react-query';
import { getTagAPI } from 'src/api';
import router, { useRouter } from 'next/router';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  .title {
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }
`;

const LabelContainer = styled.div`
  span {
    display: block;
    padding: 0.3rem 0;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
    cursor: pointer;
  }

  span:hover {
    border-bottom: 2px solid ${(props) => props.theme.POST_TAG_BORDER_COLOR};
  }
`;

const Tags = () => {
  const { data, isSuccess } = useQuery('tagList', getTagAPI);

  return (
    <Container>
      <span className="title">인기태그</span>
      <LabelContainer>
        {isSuccess &&
          data.map((tag) => (
            <span onClick={() => router.push(`/blog?tag=${tag.id}`)} key={tag?.id}>
              {`${tag?.name} (${tag?.count})`}
            </span>
          ))}
      </LabelContainer>
    </Container>
  );
};

export default Tags;
