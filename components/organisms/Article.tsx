import * as article from "../../types/Article";

type props = {
  article: article.Article;
};

export const Article = (props: props) => {
  return (
    <div id="article">
      <div>title</div>
      <div>postDate</div>
      <div>content</div>
    </div>
  );
};
