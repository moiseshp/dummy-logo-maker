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
  Marhey,
  Sansita_Swashed,
  Atma,
  Tourney,
} from '@next/font/google';
import Head from 'next/head';
import theme from 'theme';

const josefinSlab = Josefin_Slab();
const montserrat = Montserrat();
const openSans = Open_Sans();
const dancingScript = Dancing_Script();
const tangerine = Tangerine({ weight: ['400', '700'] });
const courierPrime = Courier_Prime({ weight: ['400', '700'] });
const ubuntuMono = Ubuntu_Mono({ weight: ['400', '700'] });
const marhey = Marhey();
const sansitaSwashed = Sansita_Swashed();
const atma = Atma({ weight: ['400', '700'] });
const tourney = Tourney();

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
        <style jsx global>{`
          html {
            font-family: ${openSans.style.fontFamily};
          }
          .Josefin_Slab {
            font-family: ${josefinSlab.style.fontFamily};
          }
          .Montserrat {
            font-family: ${montserrat.style.fontFamily};
          }
          .Open_Sans {
            font-family: ${openSans.style.fontFamily};
          }
          .Dancing_Script {
            font-family: ${dancingScript.style.fontFamily};
          }
          .Tangerine {
            font-family: ${tangerine.style.fontFamily};
          }
          .Courier_Prime {
            font-family: ${courierPrime.style.fontFamily};
          }
          .Ubuntu_Mono {
            font-family: ${ubuntuMono.style.fontFamily};
          }
          .Marhey {
            font-family: ${marhey.style.fontFamily};
          }
          .Sansita_Swashed {
            font-family: ${sansitaSwashed.style.fontFamily};
          }
          .Atma {
            font-family: ${atma.style.fontFamily};
          }
          .Tourney {
            font-family: ${tourney.style.fontFamily};
          }
        `}</style>
        {isMounted ? getLayout(<Component {...pageProps} />) : <div>Loading...</div>}
      </LogoProvider>
    </ThemeProvider>
  );
};

export default MyApp;
