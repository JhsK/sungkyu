import React from 'react';
import Head from 'next/head';
import GlobalStyle from 'src/theme/globalStyle';
import type { AppProps } from 'next/app';

const App = ({ Component }: AppProps) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <title>Sungkyu</title>
    </Head>
    <GlobalStyle />
    <Component />
  </>
);
export default App;
