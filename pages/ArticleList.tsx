import { Layout } from "../components/Layout";
import { RecentArticle } from "../components/organisms/RecentArticles";
import { ArticleListContents } from "../components/organisms/ArticleListContents";
import { getRecentArticles } from "../lib/fetch";
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

const ArticleList: React.FC<props> = ({ recentArticles }) => {
  console.log(recentArticles);

  return (
    <div id="topPage">
      <Layout>
        <ArticleListContents Articles={recentArticles}></ArticleListContents>
      </Layout>
    </div>
  );
};

export default ArticleList;
