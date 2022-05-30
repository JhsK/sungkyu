import React from 'react';
import styled from '@emotion/styled';
import { useQuery } from 'react-query';
import { getTagAPI } from 'src/api';
import router from 'next/router';
import useTagsQuery from './hooks/useTagsQuery';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 0.8rem;

  span {
    margin-right: 1rem;
    border: 1px solid ${(props) => props.theme.NO_ACTIVE_CATEGORY_COLOR};
    border-radius: 15px;
    padding: 0.3rem 0.5rem;
    margin-bottom: 0.5rem;
    font-size: 0.8rem;
    color: ${(props) => props.theme.POST_EDIT_TITLE_BORDER_COLOR};
  }
`;

const MobileTags = () => {
  const { data, isSuccess } = useTagsQuery();

  return (
    <Container>
      {isSuccess &&
        data.map((tag) => (
          <span onClick={() => router.push(`/blog?tag=${tag.id}`)} key={tag?.id}>
            {tag?.name}
          </span>
        ))}
    </Container>
  );
};

export default MobileTags;
