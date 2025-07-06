import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { PageLayout } from "../components/layout/PageLayout";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="EFL Explorers - Learning Platform" />
        <title>ESL Explorers</title>
      </Head>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </>
  );
}

export default App;
