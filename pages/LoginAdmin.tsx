import React from "react";
import AdminLayout from "../components/AdminLayout";
import LoginAdminContents from "../components/organisms/LoginAdminContents";

export default function LoginAdmin() {
  return (
    <div id="loginAdmin">
      <AdminLayout>
        <LoginAdminContents></LoginAdminContents>
      </AdminLayout>
    </div>
  );
}
