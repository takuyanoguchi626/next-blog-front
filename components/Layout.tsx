import Head from "next/head";
import { ReactNode } from "react";

type props = {
  title: string;
  children: ReactNode;
};

export const Layout = (props: props) => {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{props.children}</main>
    </>
  );
};
