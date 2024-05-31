import { Box, Text } from "@chakra-ui/react";

function Conversation({ friend }) {
  return (
    <Box w="80%" p="4">
      <Text fontSize="xl">Conversation with {friend.name}</Text>
      {}
    </Box>
  );
}

export default Conversation;
