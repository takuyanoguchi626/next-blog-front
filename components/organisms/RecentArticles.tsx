import { format } from "date-fns";
import { useState } from "react";
import { Article } from "../../types/Article";

type props = {
  recentArticles: Article[];
};

export const RecentArticle = (props: props) => {
  const { recentArticles } = props;
  const [recentArticleList, setRecentArticleList] =
    useState<Article[]>(recentArticles);

  //   [
  //   {
  //     id: 1,
  //     title: "サンプル記事",
  //     postDate: new Date(),
  //     editDate: new Date(),
  //     content:
  //       "これはサンプルの記事です。SSGの実装が完了したらDBの記事が表示されるようになります。",
  //   },
  //   {
  //     id: 1,
  //     title: "サンプル記事",
  //     postDate: new Date(),
  //     editDate: new Date(),
  //     content:
  //       "これはサンプルの記事です。SSGの実装が完了したらDBの記事が表示されるようになります。",
  //   },
  //   {
  //     id: 1,
  //     title: "サンプル記事",
  //     postDate: new Date(),
  //     editDate: new Date(),
  //     content:
  //       "これはサンプルの記事です。SSGの実装が完了したらDBの記事が表示されるようになります。",
  //   },
  // ]
  return (
    <div className="recentArticles">
      <h1 className="recentArticleTitle">最近の投稿</h1>
      <div>最終更新日：2022/07/23</div>
      <div className="recentArticleList">
        {/* {recentArticleList.map((article, index) => {
          const formatPostDate = format(article.postDate, "yyyy/MM/dd");
          return (
            <div className="recentArticle" key={index}>
              <div className="title">{article.title}</div>
              <div className="postDate">{formatPostDate}</div>
              <div className="content">{article.content}</div>
            </div>
          );
        })} */}
      </div>
    </div>
  );
};
