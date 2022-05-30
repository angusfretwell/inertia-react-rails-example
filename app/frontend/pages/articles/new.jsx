import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/inertia-react";
import { Formik } from "formik";
import Layout from "../../components/Layout";
import ArticleForm from "./_form";

function New({ errors }) {
  return (
    <>
      <h1>New article</h1>

      <Formik
        enableReinitialize
        initialValues={{
          title: "",
          content: "",
        }}
        initialErrors={errors}
        onSubmit={(values) => {
          Inertia.post(`/articles`, values);
        }}
      >
        <ArticleForm />
      </Formik>

      <br />

      <p>
        <Link href="/articles">Back to articles</Link>
      </p>
    </>
  );
}

New.layout = (page) => <Layout children={page} />;

export default New;
