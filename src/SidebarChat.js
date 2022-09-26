import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./SidebarChat.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import db from "./firebase";
const SidebarChat = ({ id, name, selected, addNewChat }) => {
  const [seed, setSeed] = useState("");
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = () => {
    const roomName = prompt("Please enter a chat name");
    if (roomName) {
      // do some database stuff
      db.collection("rooms").add({
        name: roomName,
      });
    }
  };

  return !addNewChat ? (
    <div className={selected ? "sidebarChat selected" : "sidebarChat"}>
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      <div className="sidebarChat__info">
        <h2>{name}</h2>
        <p>THis is the last message</p>
      </div>
    </div>
  ) : (
    <div onClick={createChat} className="sidebarChat add__chat">
      <AddCircleOutlineIcon />
      {/* <h2>Add new Chat</h2> */}
    </div>
  );
};

export default SidebarChat;
