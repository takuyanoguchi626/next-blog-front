import { Layout } from "../components/Layout";
import { RecentArticle } from "../components/organisms/RecentArticles";
import { getRecentArticles } from "../hooks/GetRecentArticles";
import { Article } from "../types/Article";

export async function getStaticProps() {
  const recentArticles = await getRecentArticles();
  return {
    props: {
      recentArticles,
    },
  };
}

type props = {
  recentArticles: Article[];
};

const Home: React.FC<props> = ({ recentArticles }) => {
  console.log(recentArticles);

  return (
    <div id="topPage">
      <Layout>
        <RecentArticle recentArticles={recentArticles}></RecentArticle>
      </Layout>
    </div>
  );
};

export default Home;
