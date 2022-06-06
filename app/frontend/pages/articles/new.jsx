import { Heading, VStack } from "@chakra-ui/react";
import { Inertia } from "@inertiajs/inertia";
import { Head } from "@inertiajs/inertia-react";
import { Formik } from "formik";
import Layout from "../../components/Layout";
import Breadcrumb from "../../components/Breadcrumb";
import ArticleForm from "./_form";

function New({ errors }) {
  return (
    <>
      <Head title="New article" />

      <VStack alignItems="left" spacing={4}>
        <Breadcrumb
          items={[
            { title: "Articles", href: "/articles" },
            { title: "New", isCurrentPage: true },
          ]}
        />

        <Heading>New article</Heading>

        <Formik
          enableReinitialize
          initialValues={{
            title: "",
            content: "",
          }}
          initialErrors={errors}
          onSubmit={(values, { setSubmitting }) => {
            Inertia.post(`/articles`, values, {
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

New.layout = (page) => <Layout children={page} />;

export default New;
