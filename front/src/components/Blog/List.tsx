import styled from '@emotion/styled';
import Link from 'next/link';
import React from 'react';

const Container = styled.div`
  width: 70%;

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
      font-weight: bold;
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
  }

  input:focus {
    outline: none;
  }
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
  }
`;

const ContentContainer = styled.div`
  width: 70%;
  padding-right: 0.8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;

  .title {
    display: block;
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 1.3rem;
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
    color: #989898;
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

const List = () => (
  <Container>
    <CreateBtn>
      <Link href="/blog/new">
        <a>작성하기</a>
      </Link>
    </CreateBtn>
    <LableContainer>
      <div className="filter">
        <span>All</span>
        <span>최신순</span>
        <span>후순위</span>
      </div>
      <input type="text" />
    </LableContainer>
    <ListContainer>
      <ContentContainer>
        <div>
          <span className="title">지식iN 앱을 Flutter로 개발하는 이유</span>
          <div>
            네이버는 2019년 10월에 국내 최초로 엔터프라이즈급 서비스에 Flutter를 도입해 지식인iN 앱을 출시했습니다.
            Flutter는 모바일 앱과 데스트톱 앱 웹 앱을 단일 코드 베이스로 개발할 수 있도록 Google이
          </div>
        </div>
        <TagsContainer>
          <span>#자바스크립트</span>
          <span>#웹</span>
          <span>#자바스크립트</span>
        </TagsContainer>
      </ContentContainer>
      <img alt="test" src="test.jpg" />
    </ListContainer>
    <Hr />
    <ListContainer>
      <ContentContainer>
        <div>
          <span className="title">지식iN 앱을 Flutter로 개발하는 이유</span>
          <div>
            네이버는 2019년 10월에 국내 최초로 엔터프라이즈급 서비스에 Flutter를 도입해 지식인iN 앱을 출시했습니다.
            Flutter는 모바일 앱과 데스트톱 앱 웹 앱을 단일 코드 베이스로 개발할 수 있도록 Google이
          </div>
        </div>
        <TagsContainer>
          <span>#자바스크립트</span>
          <span>#웹</span>
          <span>#자바스크립트</span>
        </TagsContainer>
      </ContentContainer>
      <img alt="test" src="test.jpg" />
    </ListContainer>
    <Hr />
  </Container>
);

export default List;
