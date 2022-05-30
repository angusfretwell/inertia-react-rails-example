import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  ButtonGroup,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/inertia-react";
import Layout from "../../components/Layout";
import formatTimestamp from "../../lib/formatTimestamp";

function Show({ article }) {
  const handleDelete = () => Inertia.delete(`/articles/${article.id}`);

  return (
    <VStack alignItems="left" spacing={4}>
      <Breadcrumb fontWeight="medium" fontSize="sm">
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} href="/articles">
            Articles
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">{article.title}</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <Heading>{article.title}</Heading>

      <Text textTransform="uppercase" fontSize="xs" color="grey">
        {formatTimestamp(article.created_at)}
      </Text>

      <ButtonGroup variant="outline" size="sm">
        <Button as={Link} href={`/articles/${article.id}/edit`}>
          Edit
        </Button>

        <Button onClick={handleDelete}>Delete</Button>
      </ButtonGroup>

      <Text>{article.content}</Text>
    </VStack>
  );
}

Show.layout = (page) => <Layout children={page} />;

export default Show;
