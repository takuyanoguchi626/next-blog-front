import React from "react";
import AdminLayout from "../components/AdminLayout";
import AdminTopContens from "../components/organisms/AdminTopContens";

export default function AdminTop() {
  return (
    <div id="adminTop">
      <AdminLayout>
        <AdminTopContens></AdminTopContens>
      </AdminLayout>
    </div>
  );
}
