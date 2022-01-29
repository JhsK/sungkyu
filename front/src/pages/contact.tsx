import React from 'react';
import ContactComponent from 'src/components/Contact';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const Contact = () => (
  <Container>
    <Header logoColor />
    <ContactComponent />
    <Footer />
  </Container>
);

export default Contact;
