import fetch from "node-fetch";
import { Article } from "../types/Article";

type id = {
  _id: string;
};

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
 * DBの全記事のIDを取得する.
 *
 * @returns DBの全記事のID
 */
export async function getAllIdsOfArticles() {
  const res = await fetch("http://localhost:3000/articles/allIdsOfArticles", {
    method: "GET",
  });
  const allIdsOfArticles = (await res.json()) as Array<id>;
  return allIdsOfArticles.map((idObj) => {
    return {
      params: {
        _id: idObj._id,
      },
    };
  });
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
/**
 * 1記事を取得する.
 *
 * @param articleId - 記事のID
 * @returns 1記事
 */
export async function getArticle(articleId: string) {
  const res = await fetch(
    `http://localhost:3000/articles/article/${articleId}`
  );
  const article = (await res.json()) as any;
  return article;
}
