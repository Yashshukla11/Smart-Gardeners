import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import { ContactForm } from "../../components/ContactForm/ContactForm";
import ChatBot from "../../components/ChatBot/ChatBot";

export const Contact = () => {
  return (
    <>
      <Navbar contactus="true" />
      <div style={{ marginTop: "100px", marginBottom: "50px" }}>
        <ContactForm />
      </div>
      <Footer />
      <ChatBot />
    </>
  );
};
