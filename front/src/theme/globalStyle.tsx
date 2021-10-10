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
        background-color: #ffdee9;
        background-image: linear-gradient(90deg, #ffdee9 0%, #b5fffc 100%);
        font-family: NanumSquare, 'Noto Sans KR', notokr, 'Nanum Gothic', 'Malgun Gothic', sans-serif;
      }

      a {
        text-decoration: none;
        outline: none;
      }
    `}
  />
);

export default GlobalStyle;
