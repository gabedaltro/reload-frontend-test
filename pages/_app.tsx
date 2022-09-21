import { ReactElement } from "react";
import App from "app";
import Head from "next/head";
import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <App>
        <Component {...pageProps} />
      </App>
    </>
  );
}

export default MyApp;

