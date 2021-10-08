import React from 'react';
import Head from 'next/head';

const App = ({ Component }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <title>Sungkyu</title>
    </Head>
    <Component />
  </>
);
export default App;
