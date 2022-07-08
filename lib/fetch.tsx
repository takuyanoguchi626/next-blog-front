import fetch from "node-fetch";

/**
 * DBの全記事を取得する.
 *
 * @returns DBの全記事
 */
export async function getAllArticles() {
  const res = await fetch("http://localhost:3000/articles", { method: "GET" });
  const allArticles = (await res.json()) as any;
  return allArticles;
}
/**
 * 最新の3記事を取得する.
 *
 * @returns 最新の３記事
 */
export async function getRecentArticles() {
  const res = await fetch("http://localhost:3000/articles/recentArticles");
  const recentArticles = (await res.json()) as any;
  return recentArticles;
}
/**
 * 過去の7記事を取得する.
 *
 * @returns 過去の7記事
 */
export async function getPastArticles() {
  const res = await fetch("http://localhost:3000/articles/pastArticles");
  const pastArticles = (await res.json()) as any;
  return pastArticles;
}

export async function getArticleIds() {
  // const res = await fetch("");
  // const articleIds = await res.json();
  const articleIds = [
    { params: { id: "1" } },
    { params: { id: "2" } },
    { params: { id: "3" } },
  ];
  return articleIds;
}

export async function getArticle(articleId: string) {
  const res = await fetch(`http://localhost:3000/articles/${articleId}`);
  const article = (await res.json()) as any;
  return article;
}
