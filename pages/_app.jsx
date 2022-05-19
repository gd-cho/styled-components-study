import '../styles/globals.css';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: black;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const theme = {
  color: {
    primary: '#0070f3',
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
