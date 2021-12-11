import React from 'react';
import Head from 'next/head';
import GlobalStyle from 'src/theme/globalStyle';
import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=yes,viewport-fit=cover"
      />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css"
      />
      <title>Sungkyu</title>
    </Head>
    <GlobalStyle />
    <Component {...pageProps} />
  </>
);
export default App;
