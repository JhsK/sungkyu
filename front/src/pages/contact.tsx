import React from 'react';
import ContactComponent from 'src/components/Contact';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import { css } from '@emotion/react';

const Contact = () => (
  <>
    <Header logoColor />
    <ContactComponent />
    <div
      css={css`
        position: absolute;
        bottom: 0px;
        width: 100%;
      `}
    >
      <Footer />
    </div>
  </>
);

export default Contact;
