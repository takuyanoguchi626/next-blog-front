import { useFormik } from "formik";
import { useRouter } from "next/router";
import React from "react";
import * as Yup from "yup";

export default function AdminWriteANewArticleContents() {
  const router = useRouter();

  const validationSchema = Yup.object({
    title: Yup.string(),
    content: Yup.string(),
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      content: "",
    },
    validationSchema: validationSchema,
    onSubmit: () => {
      console.log(formik.values);
    },
  });
  return (
    <div>
      <div>Write A New Article!!</div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <div>title</div>
          <input
            name="title"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.title}
            onBlur={formik.handleBlur}
          />
        </div>
        <div>
          <div>content</div>
          <textarea
            name="content"
            cols={30}
            rows={10}
            onChange={formik.handleChange}
            value={formik.values.content}
            onBlur={formik.handleBlur}
          ></textarea>
        </div>
        <button type="button" onClick={() => router.push("/AdminTop")}>
          return
        </button>
        <button type="submit">post</button>
      </form>
    </div>
  );
}
