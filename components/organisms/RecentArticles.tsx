import { format } from "date-fns";
import { useState } from "react";
import { Article } from "../../types/Article";

export const RecentArticle = () => {
  const [recentArticleList, setRecentArticleList] = useState<Article[]>([
    {
      id: 1,
      title: "サンプル記事",
      postDate: new Date(),
      editDate: new Date(),
      content:
        "これはサンプルの記事です。SSGの実装が完了したらDBの記事が表示されるようになります。",
    },
    {
      id: 1,
      title: "サンプル記事",
      postDate: new Date(),
      editDate: new Date(),
      content:
        "これはサンプルの記事です。SSGの実装が完了したらDBの記事が表示されるようになります。",
    },
    {
      id: 1,
      title: "サンプル記事",
      postDate: new Date(),
      editDate: new Date(),
      content:
        "これはサンプルの記事です。SSGの実装が完了したらDBの記事が表示されるようになります。",
    },
  ]);
  return (
    <>
      <h1>最近の投稿</h1>
      <div>
        {recentArticleList.map((article) => {
          const formatPostDate = format(article.postDate, "yyyy/MM/dd");
          return (
            <>
              <div>{article.title}</div>
              <div>{formatPostDate}</div>
              <div>{article.content}</div>
            </>
          );
        })}
      </div>
    </>
  );
};
