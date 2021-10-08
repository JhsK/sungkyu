import React from 'react';
import Head from 'next/head';
import GlobalStyle from 'src/theme/globalStyle';
import type { AppProps } from 'next/app';

const App = ({ Component }: AppProps) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=yes,viewport-fit=cover"
      />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <title>Sungkyu</title>
    </Head>
    <GlobalStyle />
    <Component />
  </>
);
export default App;
