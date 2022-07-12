import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";

export default function LoginAdminContents() {
  const validationSchema = Yup.object({
    administratorId: Yup.string().required("AdministratorIDを入力してください"),
    password: Yup.string().required("Passwordを入力してください"),
  });

  const formik = useFormik({
    initialValues: {
      administratorId: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: () => {
      console.log(formik.values);
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
