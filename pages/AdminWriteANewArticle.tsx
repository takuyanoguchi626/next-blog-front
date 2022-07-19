import React from "react";
import AdminLayout from "../components/AdminLayout";
import AdminWriteANewArticleContents from "../components/organisms/AdminWriteANewArticleContents";

export default function AdminWriteANewArticle() {
  return (
    <div>
      <AdminLayout>
        <AdminWriteANewArticleContents></AdminWriteANewArticleContents>
      </AdminLayout>
    </div>
  );
}
