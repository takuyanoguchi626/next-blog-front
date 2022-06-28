import axios from "axios";
import { Article } from "../types/Article";
import fetch from "node-fetch";

export async function getRecentArticles() {
  const res = await fetch(
    "http://153.127.48.168:8080/ecsite-api/item/items/pizza"
  );
  const data = (await res.json()) as any;
  const recentArticles = data.items;

  return recentArticles;
}
