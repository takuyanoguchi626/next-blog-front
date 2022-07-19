import { useFormik } from "formik";
import { useRouter } from "next/router";
import React from "react";
import * as Yup from "yup";
import { Article } from "../../types/Article";

export default function AdminWriteANewArticleContents() {
  const router = useRouter();

  const validationSchema = Yup.object({
    title: Yup.string().min(5),
    content: Yup.string().min(3),
  });

  const postArticle = async (article: Article) => {
    console.log("Bearer" + " " + sessionStorage.getItem("jwt"));
    const res = await fetch("http://localhost:3000/articles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer" + " " + sessionStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        title: article.title,
        content: article.content,
      }),
    });
    const postedArticle = (await res.json()) as any;
    return postedArticle;
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      content: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log(values);
      await postArticle(values);
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
