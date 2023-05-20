import React, { useState } from "react";
import { ChatState } from "../components/context/chatProvider";
import { Box } from "@chakra-ui/react";
import SideDrawer from "../components/chatpages/SideDrawer";
import MyChat from "../components/chatpages/MyChat";
import ChatBox from "../components/chatpages/ChatBox";
const ChatPage = () => {
  const { user } = ChatState();
  const [fetchAgain, setFetchAgain] = useState(false);

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box
        display="flex"
        justifyContent="space-between"
        w="100%"
        h="91.5vh"
        p="10px"
      >
        {user && <MyChat fetchAgain={fetchAgain} />}
        {user && (
          <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  );
};

export default ChatPage;