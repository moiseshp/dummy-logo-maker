import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import LogoProvider from 'contexts/LogoProvider';
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
      <Head>
        <title>Dummy Logo Maker</title>
        <meta name="theme-color" content={theme.pallete.body} />
      </Head>
      <GlobalStyleSheet />
      <LogoProvider>
        <div className={roboto.className}>
          {isMounted ? getLayout(<Component {...pageProps} />) : <div>Loading...</div>}
        </div>
      </LogoProvider>
    </ThemeProvider>
  );
};

export default MyApp;
