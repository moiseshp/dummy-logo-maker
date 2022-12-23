import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import LogoProvider from 'contexts/LogoProvider';
import { GlobalStyleSheet } from 'theme/GlobalStyleSheet';
// eslint-disable-next-line camelcase
import {
  Josefin_Slab,
  Montserrat,
  Open_Sans,
  Dancing_Script,
  Tangerine,
  Courier_Prime,
  Ubuntu_Mono,
  Marhey, // 400, 700
  Sansita_Swashed, // 400, 700
  Atma, // 400, 700
  Tourney, // 400,
} from '@next/font/google';
import Head from 'next/head';
import theme from 'theme';

const roboto = Open_Sans({
  weight: ['400', '500', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

const montserrat = Montserrat({
  weight: ['400', '500', '800'],
  style: ['normal'],
  subsets: ['latin'],
});

const josefinSlab = Josefin_Slab({
  weight: ['400', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
});

const dancingScript = Dancing_Script({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
});

const tangerine = Tangerine({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
});

const courierPrime = Courier_Prime({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
});

const ubuntuMono = Ubuntu_Mono({
  weight: ['400', '700'],
  style: ['normal'],
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
      <style jsx global>
        {`
          html {
            font-family: ${roboto.style.fontFamily};
          }
          .Josefin_Slab {
            font-family: ${josefinSlab.style.fontFamily};
          }
          .Montserrat {
            font-family: ${montserrat.style.fontFamily};
          }
        `}
      </style>

      <LogoProvider>
        {isMounted ? getLayout(<Component {...pageProps} />) : <div>Loading...</div>}
      </LogoProvider>
    </ThemeProvider>
  );
};

export default MyApp;
