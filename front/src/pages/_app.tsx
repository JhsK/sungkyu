import React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';

const App = ({ Component }: AppProps) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <title>Sungkyu</title>
    </Head>
    <Component />
  </>
);
export default App;
