import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  VStack,
} from "@chakra-ui/react";
import { Inertia } from "@inertiajs/inertia";
import { Head, Link } from "@inertiajs/inertia-react";
import { Formik } from "formik";
import Layout from "../../components/Layout";
import ArticleForm from "./_form";

function Edit({ article, errors }) {
  return (
    <>
      <Head title="Edit article" />

      <VStack alignItems="left" spacing={4}>
        <Breadcrumb fontWeight="medium" fontSize="sm">
          <BreadcrumbItem>
            <BreadcrumbLink as={Link} href="/articles">
              Articles
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink as={Link} href={`/articles/${article.id}`}>
              {article.title}
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">Edit</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <Heading>Editing article</Heading>

        <Formik
          enableReinitialize
          initialValues={{
            title: article.title,
            content: article.content,
          }}
          initialErrors={errors}
          onSubmit={(values, { setSubmitting }) => {
            try {
              Inertia.put(`/articles/${article.id}`, values);
            } finally {
              setSubmitting(false);
            }
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
