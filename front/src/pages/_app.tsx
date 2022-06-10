import { ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React, { useEffect } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { RecoilRoot } from 'recoil';
import { configs } from 'src/config';
import { lightTheme } from 'src/theme';
import GlobalStyle from 'src/theme/globalStyle';
import { useRouter } from 'next/router';
import dayjs from 'dayjs';
import * as gtag from '../lib/gtag';
import 'dayjs/locale/ko';

const isProduction = configs.ENV === 'production';

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const [queryClient] = React.useState(() => new QueryClient());
  dayjs.locale('ko');

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <title>Sungkyu</title>
        <meta charSet="utf-8" />
        <meta name="google-site-verification" content="NZMjmiyn6NYG5M3Wlk7alXrjPWE4ROQx3U_MHWFq1SA" />
        <meta name="naver-site-verification" content="2e8020e1c65ced9b3bcb4265892dbae75d272cf3" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0,minimum-scale=5.0,maximum-scale=1.0,user-scalable=yes,viewport-fit=cover"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="keywords" content="HTML, CSS, Javascript, React, Next, Frontend, Blog, Sungkyu, sungkyu" />
        <meta name="author" content="sungkyu" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://github.com/JhsK/sungkyu/blob/master/front/public/profile.jpeg" />
        <meta property="og:site_name" content="sungkyu" />
        <meta property="og:image:width" content="285" />
        <meta property="og:image:height" content="167" />
        <meta property="og:locale" content="ko_KR" />
        <link rel="main icon" href="favicon.ico" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css"
        />
      </Head>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <RecoilRoot>
            <ThemeProvider theme={lightTheme}>
              <Component {...pageProps} />
            </ThemeProvider>
          </RecoilRoot>
        </Hydrate>
        {isProduction ? null : <ReactQueryDevtools position="bottom-right" />}
      </QueryClientProvider>
    </>
  );
};

export default App;
