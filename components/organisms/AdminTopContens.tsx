import React from "react";

export default function AdminTopContens() {
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
          <li>・Edit Profile</li>
          <li>・Write A New Article</li>
          <li>・Edit Past Articles</li>
        </ul>
      </div>
    </div>
  );
}
