import { useEffect, useState } from 'react';
import Script from 'next/script';
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
      <GlobalStyleSheet />
      <Head>
        <title>Dummy Logo Maker</title>
        <meta name="theme-color" content={theme.palette.body} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="DUMMY LOGO MAKER is an easy, fast and even fun way to create your own dummy logo for your projects. Use the composition of logo + isotype, only logo or only isotype. In addition, you can also your dummy logo in landscape and portrait mode."
        />
      </Head>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
          });
        `,
        }}
      />
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
