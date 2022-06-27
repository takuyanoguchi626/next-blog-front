import Link from "next/link";

const MyPost = () => {
  return (
    <>
      <h1>記事１</h1>
      <p>これはタクヤが書いた記事です。</p>
      <Link href="/">ホームへ戻る</Link>
    </>
  );
};

export default MyPost;
