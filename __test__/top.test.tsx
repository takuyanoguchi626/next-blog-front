import { render } from "@testing-library/react";
import { rest } from "msw";
import Home from "../pages";

const handlers = [
  rest.get(
    "https://jsonplaceholder.typicode.com/posts/?_limit=10",
    (req, res, ctx) => {
      return res(
        // 以下はダミーデータ
        ctx.status(200),
        ctx.json([
          {
            userId: 1,
            id: 1,
            title: "dummy title 1",
            body: "dummy body 1",
          },
          {
            userId: 2,
            id: 2,
            title: "dummy title 2",
            body: "dummy body 2",
          },
        ])
      );
    }
  ),
];

// setupServerを使ってサーバーをたてておく
const server = setupServer(...handlers);

beforeAll(() => {
  // モックサーバの起動
  server.listen();
});
// 各テストケースが終わるたびに呼ばれる
afterEach(() => {
  // モックサーバーのリセットとクリーンアップをして、テスト間の副作用が起こらないように。
  server.resetHandlers();
  cleanup();
});
afterAll(() => {
  // サーバーを閉じる
  server.close();
});

describe("トップ画面をテストする", () => {
  it("", async () => {
    render(<Home recentArticles={} pastArticles={}></Home>);
  });
});
