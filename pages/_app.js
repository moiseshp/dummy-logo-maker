import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import UserProvider from 'contexts/UserProvider';
import { GlobalStyleSheet } from 'theme/GlobalStyleSheet';
// eslint-disable-next-line camelcase
import { Open_Sans } from '@next/font/google';
import Head from 'next/head';
import theme from 'theme';

// eslint-disable-next-line new-cap
const roboto = Open_Sans({
  weight: ['400', '500', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

const MyApp = ({ Component, pageProps }) => {
  const [isMounted, setIsMounted] = useState(false);
  const getLayout = Component.getLayout || ((page) => page);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <Head>
          <title>Dummy Logo Maker</title>
          <meta name="theme-color" content={theme.pallete.body} />
        </Head>
        <main className={roboto.className}>
          <GlobalStyleSheet />
          {isMounted ? getLayout(<Component {...pageProps} />) : <div>Loading...</div>}
        </main>
      </UserProvider>
    </ThemeProvider>
  );
};

export default MyApp;
