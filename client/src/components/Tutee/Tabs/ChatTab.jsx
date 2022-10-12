import React from "react";
import { Typography } from "@mui/material";
import Chat from "../Chat/Chat";
const ChatTab = () => {
  return (
    <div>
      <Typography sx={{ marginTop: 9, marginBottom: 3, minWidth: 200 }} variant="h4">
        Chat
      </Typography>
      <Chat />
    </div>
  );
};

export default ChatTab;
