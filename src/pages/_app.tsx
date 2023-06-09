import GlobalStyle from '@/styles/GlobalStyle';
import type { AppProps } from 'next/app';
import { Noto_Sans_KR } from 'next/font/google';
import { ThemeProvider } from '@emotion/react';
import { theme } from '@/styles/theme';
import Head from 'next/head';
import Layout from '@/components/_layout';
import { Provider } from 'react-redux';
import { store } from '@/store';

const NotoR = Noto_Sans_KR({
  weight: '400',
  subsets: ['latin'],
});
const NotoB = Noto_Sans_KR({
  weight: '700',
  subsets: ['latin'],
  variable: '--Noto-B',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Moa Moa</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`${NotoR.className} ${NotoB.variable}`}
        style={{ width: '100%', height: '100%' }}
      >
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </Provider>
      </main>
    </>
  );
}
