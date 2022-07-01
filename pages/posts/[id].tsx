import { getArticleIds, getArticle } from "../../lib/fetch";
import * as article from "../../types/Article";
import { Layout } from "../../components/Layout";
import * as articleContent from "../../components/organisms/Article";

export async function getStaticPaths() {
  const articleIds = await getArticleIds();
  return {
    paths: articleIds,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { id: number } }) {
  const article = await getArticle(params.id);
  return {
    props: {
      article,
    },
  };
}

const Article = ({ article }: { article: article.Article }) => {
  return (
    <div id="article">
      <Layout>
        <articleContent.Article article={article}></articleContent.Article>
      </Layout>
    </div>
  );
};

export default Article;
