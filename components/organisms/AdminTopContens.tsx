import { useRouter } from "next/router";
import React from "react";

export default function AdminTopContens() {
  const router = useRouter();
  return (
    <div>
      <div className="profileContents">
        <img src="/images/logo2.png" alt="" />
        <div className="profileText">
          <div className="kanjiName">野口拓也</div>
          <div className="romajiName">Takuya Noguchi</div>
          <div className="job">ITエンジニア</div>
        </div>
      </div>
      <div className="editListContents">
        <ul className="editList">
          <li onClick={() => router.push("/AdminEditProfile")}>
            ・Edit Profile
          </li>
          <li onClick={() => router.push("/AdminWriteANewArticle")}>
            ・Write A New Article
          </li>
          <li onClick={() => router.push("/AdminEditPastArticles")}>
            ・Edit Past Articles
          </li>
        </ul>
      </div>
    </div>
  );
}
