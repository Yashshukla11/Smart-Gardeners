import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import { ContactForm } from "../../components/ContactForm/ContactForm";

export const Contact = () => {
  return (
    <>
      <Navbar contactus="true" />
      <div style={{ marginTop: "150px", marginBottom: "100px" }}>
        <ContactForm />
      </div>
      <Footer />
    </>
  );
};
