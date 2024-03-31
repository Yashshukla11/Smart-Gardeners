import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import ChatBot from "../../components/ChatBot/ChatBot";
import Products from "../../components/Products/Products";

export const Shop = () => {
  return (
    <>
      <Navbar shop="true" />
      <Products />
      <Footer />
      <ChatBot />
    </>
  );
};
