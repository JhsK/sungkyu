/** @jsx jsx */
import { Global, css, jsx } from '@emotion/react';
import reset from 'emotion-reset';

import { ThemeType } from './index';

interface GlobalStyleProps {
  theme: ThemeType;
}

const GlobalStyle = ({ theme }: GlobalStyleProps) => (
  <Global
    styles={css`
      ${reset} html, body, #__next {
        margin: 0;
        padding: 0;
      }

      a {
        text-decoration: none;
        outline: none;
      }
    `}
  />
);

export default GlobalStyle;
