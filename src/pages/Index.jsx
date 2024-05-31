import { useState } from "react";
import { Box, Container, VStack, HStack, Input, Text, Avatar, IconButton } from "@chakra-ui/react";
import FriendsList from "../components/FriendsList.jsx";
import { FaPaperPlane } from "react-icons/fa";

const messagesData = [
  { id: 1, user: "Alice", text: "Hey there!", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBhdmF0YXJ8ZW58MHx8fHwxNzE3MTU3MzEyfDA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 2, user: "Bob", text: "Hello! How are you?", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYWxlJTIwYXZhdGFyfGVufDB8fHx8MTcxNzE1NzMxMnww&ixlib=rb-4.0.3&q=80&w=1080" },
];

const Index = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [selectedFriend, setSelectedFriend] = useState(null);

  const handleSelectFriend = (friend) => {
    setSelectedFriend(friend);

    setMessages(messagesData.filter((msg) => msg.user === friend.name || msg.user === "You"));
  };

  const handleSendMessage = () => {
    if (inputValue.trim() !== "") {
      const newMessage = {
        id: messages.length + 1,
        user: "You",
        text: inputValue,
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx5b3VyJTIwYXZhdGFyfGVufDB8fHx8MTcxNzE1NzMxM3ww&ixlib=rb-4.0.3&q=80&w=1080",
      };
      setMessages([...messages, newMessage]);
      setInputValue("");
    }
  };

  return (
    <Container maxW="container.xl" height="100vh" display="flex" flexDirection="row" padding={0}>
      <Box width="30%" height="100%" borderRightWidth="1px" padding={4}>
        <FriendsList onSelectFriend={handleSelectFriend} />
      </Box>
      <Box width="70%" height="100%" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        {selectedFriend ? (
          <VStack spacing={4} width="100%">
            <Box width="100%" height="70vh" overflowY="auto" borderWidth="1px" borderRadius="lg" padding={4}>
              {messages.map((message) => (
                <HStack key={message.id} spacing={4} alignItems="flex-start" marginBottom={4}>
                  <Avatar src={message.avatar} />
                  <VStack alignItems="flex-start">
                    <Text fontWeight="bold">{message.user}</Text>
                    <Text>{message.text}</Text>
                  </VStack>
                </HStack>
              ))}
            </Box>
            <HStack width="100%">
              <Input
                placeholder="Type a message..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    handleSendMessage();
                  }
                }}
              />
              <IconButton aria-label="Send" icon={<FaPaperPlane />} onClick={handleSendMessage} />
            </HStack>
          </VStack>
        ) : (
          <Text>Select a friend to start chatting</Text>
        )}
      </Box>
    </Container>
  );
};

export default Index;
