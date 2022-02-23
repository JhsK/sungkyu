import styled from '@emotion/styled';
import React from 'react';
import useDevice from 'src/hooks/useDevice';
import Footer from '../Footer';
import List from './List';
import Tags from './Tags';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const BlogContainer = styled.div`
  display: flex;
  align-items: flex-start;
  max-width: 1200px;
  width: 100%;
  margin: 5rem auto 0 auto;
  gap: 2rem;

  @media ${(props) => props.theme.HDPC} {
    max-width: 1000px;
  }

  @media ${(props) => props.theme.PC} {
    max-width: 700px;
  }

  @media ${(props) => props.theme.TABLET} {
    justify-content: center;
    margin: 2rem auto 0 auto;
  }

  .tagContainer {
    @media ${(props) => props.theme.TABLET} {
      display: none;
    }
  }
`;

const BlogComponent = () => {
  const isMobile = useDevice(768);

  return (
    <Container>
      <BlogContainer>
        <List />
        {!isMobile && (
          <div className="tagContainer">
            <Tags />
          </div>
        )}
      </BlogContainer>
      <Footer />
    </Container>
  );
};

export default BlogComponent;
