import React from "react";
import AdminLayout from "../components/AdminLayout";
import AdminEditProfileContents from "../components/organisms/AdminEditProfileContents";

export default function AdminEditProfile() {
  return (
    <div>
      <AdminLayout>
        <AdminEditProfileContents></AdminEditProfileContents>
      </AdminLayout>
    </div>
  );
}
