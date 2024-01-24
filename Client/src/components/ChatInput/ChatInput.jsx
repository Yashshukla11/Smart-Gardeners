import React from "react";

const ChatInput = ({ value, onChange, onKeyDown, placeholder, onClick }) => {
  return (
    <div className="chat-footer">
      <input
        type="text"
        value={value} // The value of the input field
        onChange={onChange} // Function to handle input change in input field
        onKeyDown={onKeyDown} // Function to handle key down in input field
        placeholder={placeholder} // Placeholder text for input field
        style={{ color: "black" }}
      />
      <button id="send-button" onClick={onClick}>
        Send
      </button>
    </div>
  );
};

export default ChatInput;
