import React from 'react';
import ContactComponent from 'src/components/Contact';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

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
