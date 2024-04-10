import { Flex, Box, Text } from "@chakra-ui/react";
import { useQuery } from "@apollo/client";
import { GetUsersDocument, GetUsersQuery } from "@/generated/graphql";
const Index = () => {
  const { data, loading, error } = useQuery<GetUsersQuery>(GetUsersDocument);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Flex align="center" justify="center" h="100vh">
      <Box>
        <Text fontSize="2xl" fontWeight="bold">
          Welcome to Next.js with Chakra UI and TypeScript
        </Text>
        <Text fontSize="xl" mt={4}>
          Test users:
        </Text>
        <Box>
          {data && data?.users.map((user: { id: string; email: string }) => (
            <Text key={user.id}>{user.email}</Text>
          ))}
        </Box>
      </Box>
    </Flex>
  );
};

export default Index;
