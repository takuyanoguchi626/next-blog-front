import type { NextPage } from "next";
import { Layout } from "../components/Layout";
import { RecentArticle } from "../components/organisms/RecentArticles";

const Home: NextPage = () => {
  return (
    <div id="topPage">
      <Layout>
        <RecentArticle></RecentArticle>
      </Layout>
    </div>
  );
};

export default Home;
