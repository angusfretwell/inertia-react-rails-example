import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/inertia-react";
import { Formik } from "formik";
import Layout from "../../components/Layout";
import ArticleForm from "./_form";

function Edit({ article, errors }) {
  return (
    <>
      <h1>Editing article</h1>

      <Formik
        enableReinitialize
        initialValues={article}
        initialErrors={errors}
        onSubmit={(values) => {
          Inertia.put(`/articles/${article.id}`, values);
        }}
      >
        <ArticleForm />
      </Formik>

      <br />

      <p>
        <Link href={`/articles/${article.id}`}>Show this article</Link>
      </p>

      <p>
        <Link href="/articles">Back to articles</Link>
      </p>
    </>
  );
}

Edit.layout = (page) => <Layout children={page} />;

export default Edit;
