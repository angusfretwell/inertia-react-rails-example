import { Button, ButtonGroup, Heading, Text, VStack } from "@chakra-ui/react";
import { Inertia } from "@inertiajs/inertia";
import { Head, Link } from "@inertiajs/inertia-react";
import Layout from "../../components/Layout";
import Breadcrumb from "../../components/Breadcrumb";

function Show({ article }) {
  const handleDelete = () => {
    if (confirm(`Are you sure you want to delete ${article.title}?`)) {
      Inertia.delete(`/articles/${article.id}`);
    }
  };

  return (
    <>
      <Head title={article.title} />

      <VStack alignItems="left" spacing={4}>
        <Breadcrumb
          items={[
            { title: "Articles", href: "/articles" },
            { title: article.title, isCurrentPage: true },
          ]}
        />

        <Heading>{article.title}</Heading>

        <Text textTransform="uppercase" fontSize="xs" color="gray.600">
          {article.createdAt}
        </Text>

        <ButtonGroup variant="outline" size="sm">
          <Button as={Link} href={`/articles/${article.id}/edit`}>
            Edit
          </Button>

          <Button onClick={handleDelete}>Delete</Button>
        </ButtonGroup>

        <Text whiteSpace="pre-line">{article.content}</Text>
      </VStack>
    </>
  );
}

Show.layout = (page) => <Layout children={page} />;

export default Show;
