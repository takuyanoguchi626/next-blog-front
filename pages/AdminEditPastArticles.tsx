import React from "react";
import AdminLayout from "../components/AdminLayout";
import AdminEditPastArticlesContents from "../components/organisms/AdminEditPastArticlesContents";

export default function AdminEditPastArticles() {
  return (
    <div>
      <AdminLayout>
        <AdminEditPastArticlesContents></AdminEditPastArticlesContents>
      </AdminLayout>
    </div>
  );
}
