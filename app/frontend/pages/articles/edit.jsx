import { Heading, VStack } from "@chakra-ui/react";
import { Inertia } from "@inertiajs/inertia";
import { Head } from "@inertiajs/inertia-react";
import { Formik } from "formik";
import Layout from "../../components/Layout";
import Breadcrumb from "../../components/Breadcrumb";
import ArticleForm from "./_form";

function Edit({ article, errors }) {
  return (
    <>
      <Head title="Edit article" />

      <VStack alignItems="left" spacing={4}>
        <Breadcrumb
          items={[
            { title: "Articles", href: "/articles" },
            { title: article.title, href: `/articles/${article.id}` },
            { title: "Edit", isCurrentPage: true },
          ]}
        />

        <Heading>Editing article</Heading>

        <Formik
          enableReinitialize
          initialValues={{
            title: article.title,
            content: article.content,
          }}
          initialErrors={errors}
          onSubmit={(values, { setSubmitting }) => {
            Inertia.put(`/articles/${article.id}`, values, {
              onFinish: () => setSubmitting(false),
            });
          }}
        >
          <ArticleForm />
        </Formik>
      </VStack>
    </>
  );
}

Edit.layout = (page) => <Layout children={page} />;

export default Edit;
