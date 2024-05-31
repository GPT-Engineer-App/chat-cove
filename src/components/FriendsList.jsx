import { useState } from "react";
import { Box, List, ListItem, ListIcon } from "@chakra-ui/react";
import { MdPerson } from "react-icons/md";

function FriendsList({ friends, onSelectFriend }) {
  return (
    <Box w="20%" p="4" borderRight="1px solid #ccc">
      <List spacing={3}>
        {friends.map((friend) => (
          <ListItem key={friend.id} onClick={() => onSelectFriend(friend)}>
            <ListIcon as={MdPerson} color="green.500" />
            {friend.name}
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default FriendsList;
