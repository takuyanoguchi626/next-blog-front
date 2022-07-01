import * as article from "../../types/Article";

type props = {
  article: article.Article;
};

export const Article = (props: props) => {
  return (
    <div className="articleContent">
      <div className="title">サンプル記事</div>
      <div className="postDate">2022/06/30</div>
      <div className="content">
        これはサンプルの記事です。SSGの実装が完了したらDBの記事が表示されるようになります
        あああああああああああああああああああああああああああああああああああああああああ
        あああああああああああああああああああああああああああああああああああああああああああ
        ああああああああああああああああああああああああああああああああああああああああ。
      </div>
    </div>
  );
};
