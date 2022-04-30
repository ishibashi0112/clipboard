import React from "react";
import Head from "next/head";
import { Main } from "src/components/Main";
import Header from "src/components/Header";

const Home = () => {
  return (
    <div>
      <Head>
        <title>clipboard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <Main />
    </div>
  );
};

export default Home;
