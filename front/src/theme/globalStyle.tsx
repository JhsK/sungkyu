/** @jsxImportSource @emotion/react */

import { Global, css } from '@emotion/react';
import reset from 'emotion-reset';
import React from 'react';

import { ThemeType } from './index';

interface GlobalStyleProps {
  theme: ThemeType;
}

const GlobalStyle = () => (
  <Global
    styles={css`
      ${reset} html, body, #__next {
        margin: 0;
        padding: 0;
      }

      body {
        overflow-x: hidden;
        width: 100%;
      }

      a {
        text-decoration: none;
        outline: none;
      }
    `}
  />
);

export default GlobalStyle;
