import React, { useState } from "react";
import Emoji from "./Emoji";
import { useChat } from "../contexts/ChatContext";
import { sendMessage } from "../socketApi";

function Form() {
  const { setChat } = useChat();
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    setChat((prev) => [...prev, { text, isFromMe: true }]);
    sendMessage(text);
    setText("");
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          className="message"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </form>
      <Emoji setText={setText} />
    </div>
  );
}

export default Form;
