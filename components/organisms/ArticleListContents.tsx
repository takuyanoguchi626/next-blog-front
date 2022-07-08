import { format } from "date-fns";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Article } from "../../types/Article";

type props = {
  articles: Article[];
};

export const ArticleListContents = (props: props) => {
  const { articles } = props;
  const [recentArticleList, setRecentArticleList] = useState<Article[]>([
    {
      _id: "1",
      title: "サンプル記事",
      postDate: new Date(),
      editDate: new Date(),
      content:
        "これはサンプルの記事です。SSGの実装が完了したらDBの記事が表示されるようになります。",
    },
    {
      _id: "1",
      title: "サンプル記事",
      postDate: new Date(),
      editDate: new Date(),
      content:
        "これはサンプルの記事です。SSGの実装が完了したらDBの記事が表示されるようになります。",
    },
    {
      _id: "1",
      title: "サンプル記事",
      postDate: new Date(),
      editDate: new Date(),
      content:
        "これはサンプルの記事です。SSGの実装が完了したらDBの記事が表示されるようになります。",
    },
  ]);

  useEffect(() => {
    setRecentArticleList(() => articles);
  }, []);

  return (
    <div className="recentArticles">
      <h1 className="recentArticleTitle">過去の投稿</h1>
      <div>最終更新日：2022/07/23</div>
      <div className="recentArticleList">
        {recentArticleList.map((article, index) => {
          const formatPostDate = format(
            new Date(article.postDate),
            "yyyy/MM/dd"
          );
          return (
            <Link href={"/posts/2"}>
              <div className="recentArticle" key={index}>
                <div className="title">{article.title}</div>
                <div className="postDate">{formatPostDate}</div>
                <div className="content">{article.content}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
