import { Layout } from "../components/Layout";
import { ArticleListContents } from "../components/organisms/ArticleListContents";
import { getAllArticles, getPastArticles } from "../lib/fetch";
import { Article } from "../types/Article";

export async function getStaticProps() {
  const allArticles = await getAllArticles();
  const pastArticles = await getPastArticles();
  return {
    props: {
      allArticles,
      pastArticles,
    },
  };
}

type props = {
  allArticles: Article[];
  pastArticles: Article[];
};

const ArticleList: React.FC<props> = (props) => {
  return (
    <div id="topPage">
      <Layout pastArticles={props.pastArticles}>
        <ArticleListContents articles={props.allArticles}></ArticleListContents>
      </Layout>
    </div>
  );
};

export default ArticleList;
