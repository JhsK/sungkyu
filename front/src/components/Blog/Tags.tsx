import React from 'react';
import styled from '@emotion/styled';
import { useQuery } from 'react-query';
import { getTagAPI } from 'src/api';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 25%; */

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
    /* background-color: #82a0aa; */
    /* color: #fff; */
    border-bottom: 2px solid ${(props) => props.theme.POST_TAG_BORDER_COLOR};
  }
`;

const Tags = () => {
  const { data, isSuccess } = useQuery('tagList', getTagAPI);

  const onClickTag = (id) => {
    console.log(id);
  };

  return (
    <Container>
      <span className="title">인기태그</span>
      <LabelContainer>
        {isSuccess &&
          data.map((tag) => (
            <span onClick={() => onClickTag(tag?.id)} key={tag?.id}>
              {tag?.name}
            </span>
          ))}
      </LabelContainer>
    </Container>
  );
};

export default Tags;
