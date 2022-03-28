import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/global';
import theme from '../styles/theme';
import { ContextProvider } from '../context/userContext';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Intibiome | co-developed with gynaecologists</title>
        <link rel="shortcut icon" href="/img/intibiome.png" />
        <link rel="apple-touch-icon" href="/img/intibiome.png" />
        <meta
          name="description"
          content="Test project for the brooklyn brothers company"
        />
      </Head>
      <ContextProvider>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
          <GlobalStyles />
        </ThemeProvider>
      </ContextProvider>
    </>
  );
}

export default MyApp;
