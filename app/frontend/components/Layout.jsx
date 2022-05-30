import { Alert, AlertIcon, Box, ChakraProvider, Flex } from "@chakra-ui/react";
import { usePage } from "@inertiajs/inertia-react";

export default function Layout({ children }) {
  const { notice } = usePage().props;

  return (
    <ChakraProvider>
      <Flex bg="gray.100" align="start" justify="center" h="100vh" pt={12}>
        <Box bg="white" p={6} rounded="md" w="32rem">
          {notice && (
            <Alert status="success" rounded="md" mb={4}>
              <AlertIcon />
              {notice}
            </Alert>
          )}

          {children}
        </Box>
      </Flex>
    </ChakraProvider>
  );
}
