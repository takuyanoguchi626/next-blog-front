import { useFormik } from "formik";
import { useRouter } from "next/router";
import React from "react";
import * as Yup from "yup";
// import { login } from "../../lib/fetch";

export default function LoginAdminContents() {
  const router = useRouter();
  const validationSchema = Yup.object({
    administratorId: Yup.string().required("AdministratorIDを入力してください"),
    password: Yup.string().required("Passwordを入力してください"),
  });

  const login = async (admin: any) => {
    const res = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(admin),
    });
    const data = (await res.json()) as any;
    sessionStorage.setItem("jwt", data.accessToken);
    return data;
  };

  const formik = useFormik({
    initialValues: {
      administratorId: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const token = await login(values);
      if (token.accessToken) {
        router.push("AdminTop");
      }
    },
  });

  return (
    <div className="loginForm">
      <form onSubmit={formik.handleSubmit}>
        <div className="loginTitle">Administrator Login</div>
        <div className="content">
          <div className="inputTitle">
            AdministratorID:
            <span className="errorMessage">
              {formik.touched.administratorId && formik.errors.administratorId}
            </span>
          </div>
          <input
            type="text"
            name="administratorId"
            onChange={formik.handleChange}
            value={formik.values.administratorId}
            onBlur={formik.handleBlur}
          />
        </div>
        <div className="content">
          <div className="inputTitle">
            Password:
            <span className="errorMessage">
              {formik.touched.password && formik.errors.password}
            </span>
          </div>
          <input
            type="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            onBlur={formik.handleBlur}
          />
        </div>
        <div className="loginButton">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}
