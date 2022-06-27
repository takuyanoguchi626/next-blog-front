import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { Layout } from "../components/Layout";

const Home: NextPage = () => {
  return (
    <>
      <Layout title="top page">
        <header>takuya Next.js blog</header>
        <Link href="/posts/MyPost">MyPostへ</Link>
      </Layout>
    </>
  );
};

export default Home;
