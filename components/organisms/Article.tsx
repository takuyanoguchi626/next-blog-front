import { format } from "date-fns";
import * as article from "../../types/Article";

type props = {
  article: Array<article.Article>;
};

export const Article = (props: props) => {
  console.log("article");
  console.log(props);

  const formatPostDate = format(
    new Date(props.article[0].postDate),
    "yyyy/MM/dd"
  );
  return (
    <div className="articleContent">
      <div className="title">{props.article[0].title}</div>
      <div className="postDate">{formatPostDate}</div>
      <div className="content">{props.article[0].content}</div>
    </div>
  );
};
