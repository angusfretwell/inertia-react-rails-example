import {
  Button,
  Heading,
  HStack,
  VStack,
  Text,
  Divider,
  Link,
} from "@chakra-ui/react";
import { Head, Link as InertiaLink } from "@inertiajs/inertia-react";
import formatTimestamp from "../../lib/formatTimestamp";
import Layout from "../../components/Layout";

function Index({ articles }) {
  return (
    <>
      <Head title="Articles" />

      <HStack justifyContent="space-between" mb={6}>
        <Heading>Articles</Heading>

        <Button as={InertiaLink} href="/articles/new">
          New article
        </Button>
      </HStack>

      <VStack alignItems="left" spacing={4} divider={<Divider />}>
        {articles.map((article) => (
          <VStack key={article.id} alignItems="left" spacing={2}>
            <Heading as="h2" size="md">
              {article.title}
            </Heading>

            <Text textTransform="uppercase" fontSize="xs" color="gray.600">
              {formatTimestamp(article.created_at)}
            </Text>

            <Link
              as={InertiaLink}
              href={`/articles/${article.id}`}
              color="blue.600"
            >
              View article
            </Link>
          </VStack>
        ))}
      </VStack>
    </>
  );
}

Index.layout = (page) => <Layout children={page} />;

export default Index;
