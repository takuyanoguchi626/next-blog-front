import fetch from "node-fetch";

export async function getRecentArticles() {
  const res = await fetch(
    "http://153.127.48.168:8080/ecsite-api/item/items/pizza"
  );
  const data = (await res.json()) as any;
  const recentArticles = data.items;

  return recentArticles;
}

export async function getArticleIds() {
  // const res = await fetch("");
  // const articleIds = await res.json();
  const articleIds = [{ id: 1 }, { id: 2 }, { id: 3 }];
  return articleIds;
}

export async function getArticle(id: number) {
  // const res = await fetch("");
  // const article = await res.json();
  const article = [
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
  ];
  return article;
}
