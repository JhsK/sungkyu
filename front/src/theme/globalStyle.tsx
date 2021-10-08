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
