import { Layout } from "../components/Layout";
import { RecentArticle } from "../components/organisms/RecentArticles";
import { getRecentArticles, getPastArticles } from "../lib/fetch";
import { Article } from "../types/Article";

export async function getStaticProps() {
  const recentArticles = await getRecentArticles();
  const pastArticles = await getPastArticles();
  return {
    props: {
      recentArticles,
      pastArticles,
    },
  };
}

type props = {
  recentArticles: Article[];
  pastArticles: Article[];
};

const Home: React.FC<props> = (props) => {
  return (
    <div id="topPage">
      <Layout pastArticles={props.pastArticles}>
        <RecentArticle recentArticles={props.recentArticles}></RecentArticle>
      </Layout>
    </div>
  );
};

export default Home;
