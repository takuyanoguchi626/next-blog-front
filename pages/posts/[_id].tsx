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
  console.log(allArticleIds);
  return {
    paths: [...allArticleIds],
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const article = await getArticle(String(params._id));
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
  article: Array<article.Article>;
  pastArticles: article.Article[];
};

const Article = (props: props) => {
  console.log("sss");

  console.log(props);

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
