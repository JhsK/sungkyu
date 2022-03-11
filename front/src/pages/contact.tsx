import styled from '@emotion/styled';
import Head from 'next/head';
import React from 'react';
import ContactComponent from 'src/components/Contact';
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

const Container = styled.div`
  min-height: calc(100% - 170px);
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 5rem;
`;

const Contact = () => (
  <>
    <Head>
      <title>Sungkyu - Contact</title>
      <meta name="description" content="프론트엔드 개발자 임성규의 연락처 및 깃허브 주소입니다." />
      <meta name="og:title" content="Sungkyu Contact" />
      <meta name="og:description" content="프론트엔드 개발자 임성규의 연락처 및 깃허브 주소입니다." />"
    </Head>
    <Container>
      <Header logoColor />
      <FlexContainer>
        <ContactComponent />
      </FlexContainer>
    </Container>
    <Footer />
  </>
);

export default Contact;
