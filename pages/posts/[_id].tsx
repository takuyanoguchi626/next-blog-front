import {
  getAllIdsOfArticles,
  getArticle,
  getPastArticles,
} from "../../lib/fetch";
import * as article from "../../types/Article";
import { Layout } from "../../components/Layout";
import * as articleContent from "../../components/organisms/Article";

export async function getStaticPaths() {
  const allArticleIds = await getAllIdsOfArticles();
  return {
    paths: allArticleIds,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const article = await getArticle(params._id);
  const pastArticles = await getPastArticles();
  console.log(article);

  return {
    props: {
      article,
      pastArticles,
    },
  };
}

type props = {
  article: article.Article;
  pastArticles: article.Article[];
};

const Article = (props: props) => {
  return (
    <div id="article">
      <Layout pastArticles={props.pastArticles}>
        <articleContent.Article
          article={props.article}
        ></articleContent.Article>
      </Layout>
    </div>
  );
};

export default Article;
