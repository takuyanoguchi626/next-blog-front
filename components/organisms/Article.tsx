import { format } from "date-fns";
import * as article from "../../types/Article";

type props = {
  article: article.Article;
};

export const Article = (props: props) => {
  const formatPostDate = format(new Date(props.article.postDate), "yyyy/MM/dd");
  return (
    <div className="articleContent">
      <div className="title">{props.article.title}</div>
      <div className="postDate">{formatPostDate}</div>
      <div className="content">{props.article.content}</div>
    </div>
  );
};
