import React from "react";

const Message = ({ message, type }) => {
  const parseAnswer = (answer) => {
    const finalAnswer = answer.replace(/\n/g, "<br/>");
    return <div dangerouslySetInnerHTML={{ __html: finalAnswer }} />;
  };
  return (
    // Class is set to either user-message or chatbot-message depending on the type prop
    <div className={type === "user" ? "user-message" : "chatbot-message"}>
      {parseAnswer(message)}
    </div>
  );
};

export default Message;
