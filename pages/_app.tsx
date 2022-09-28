import { ReactElement } from "react";
import App from "App";
import Head from "next/head";
import type { AppProps } from "next/app";
import "react-toastify/dist/ReactToastify.css";

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

