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

function New({ errors }) {
  return (
    <>
      <Head title="New article" />

      <VStack alignItems="left" spacing={4}>
        <Breadcrumb fontWeight="medium" fontSize="sm">
          <BreadcrumbItem>
            <BreadcrumbLink as={Link} href="/articles">
              Articles
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">New</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <Heading>New article</Heading>

        <Formik
          enableReinitialize
          initialValues={{
            title: "",
            content: "",
          }}
          initialErrors={errors}
          onSubmit={(values, { setSubmitting }) => {
            try {
              Inertia.post(`/articles`, values);
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

New.layout = (page) => <Layout children={page} />;

export default New;
