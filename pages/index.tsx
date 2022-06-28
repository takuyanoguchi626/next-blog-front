import type { NextPage } from "next";
import { Layout } from "../components/Layout";
import { RecentArticle } from "../components/organisms/RecentArticles";

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <RecentArticle></RecentArticle>
      </Layout>
    </>
  );
};

export default Home;
