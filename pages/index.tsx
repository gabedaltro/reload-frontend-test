import React from "react";
import Head from "next/head";
import Home from "components/home/Home";

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Reload Health</title>
        <meta name="description" content="Reload Health" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Home />
    </>
  );
};

export default HomePage;

