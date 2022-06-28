import { format } from "date-fns";
import { Article } from "../../types/Article";

export const RecentArticle = () => {
  const recentArticleList: Article[] = [];
  return (
    <>
      <h1>最近の投稿</h1>
      <div>
        {recentArticleList.map((article) => {
          const formatPostDate = format(new Date(), "yyyy/MM/dd");
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
