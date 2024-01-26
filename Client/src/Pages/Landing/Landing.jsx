import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { TextWithImage } from "../../components/TextWithImage/TextWithImage";
import { CardSection } from "../../components/CardSection/CardSection";
import { MiddlePara } from "../../components/MiddlePara/MiddlePara";
import { ContainerSteps } from "../../components/ContainerSteps/ContainerSteps";
import { ContainerWithButton } from "../../components/ContainerWithButton/ContainerWithButton";
import Chatbot from "../../components/ChatBot/ChatBot";
import ChatBot from "../../components/ChatBot/ChatBot";

export const Landing = () => {
  return (
    <>
      <Navbar home="true" />
      <Header />
      <div className="my-[50px]">
        <TextWithImage text="Welcome to Smart Gardeners" />
      </div>
      <div className="mt-5">
        <MiddlePara
          heading="Nurturing Nature in the Modern World"
          text="In today's rapidly advancing world, we find ourselves at the intersection of technological progress and environmental responsibility. As our cities grow skyward, and the demand for sustenance escalates, the delicate balance between urban living and nature preservation becomes more critical than ever."
        />
      </div>

      <div className="mt-[150px]">
        <CardSection />
      </div>
      <div className="mt-[100px]">
        <MiddlePara
          heading="The Solution - Hydroponics"
          text="Enter hydroponics, a revolutionary way to grow plants without relying on diminishing soil resources. In our pursuit of a healthier lifestyle and a greener planet, hydroponics emerges as an efficient and environmentally friendly approach to agriculture."
        />
      </div>
      <div id="whyhydrophonics" className="mt-[100px]">
        <ContainerSteps />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          margin: "auto",
          marginTop: "100px",
        }}
      >
        <h1
          className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 text-[80px] leading-tight anim"
          style={{
            fontWeight: "bolder",
            fontFamily: "Quattrocento Sans, sans-serif",
          }}
        >
          Our Hydroponic Kit
        </h1>{" "}
      </div>

      <div
        className="mt-[80px]"
        style={{
          // display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          className=""
          style={{
            height: "500px",
            width: "auto",
            margin: "auto",
            marginTop: "70px",
          }}
          src="https://i.postimg.cc/0jTFNkRD/Untitled-design-10-removebg-preview.png"
          alt=""
        />
        <div
          className="testimonials__head w-105"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <img
            src="https://i.postimg.cc/TYrz4YWs/quote.png"
            alt="Quote"
            className="testimonials__quote"
          />
          <h2 className="testimonials__title">
            Why Choose Smart Gardeners' Hydroponic Kit:
          </h2>

          <p className="invest__description">
            <b>Sustainability:</b>Our kits are conceived with environmental
            stewardship at the forefront, employing eco-friendly materials and
            championing sustainable gardening practices.
            <br />
            <br />
            <b>Efficiency:</b>
            Hydroponics empowers you to yield more with less space, water, and
            resources. It epitomizes the future of efficient and space-conscious
            gardening.
            <br />
            <br />
            <b>Education:</b> Immerse yourself in the art of hydroponic
            gardening through our extensive resources. Whether you're a neophyte
            or an adept gardener, our kit serves as your gateway to a greener
            and more knowledgeable lifestyle.
          </p>
        </div>
      </div>

      <div className="mt-[100px]">
        <MiddlePara
          heading="The Difference"
          text="At Smart Gardeners, we take this vision a step further. Our hydroponic kits are crafted to empower individuals to grow a variety of plants with ease. From tomatoes to strawberries, our kits provide a sustainable and accessible way for anyone to embrace organic farming without the need for soil."
        />
      </div>
      <div className="mt-[100px]">
        <ContainerWithButton
          content="Join the Green Movement"
          button="Explore"
        />
      </div>
      <div className="mt-[30px] mb-[30px]">
        <MiddlePara
          // heading="The Difference"
          text="Embark on a journey with Smart Gardeners and be part of the solution. Together, let's create a world where growing plants is not just a necessity but a celebration of life and nature."
        />
      </div>
      <Footer />
      <ChatBot />
    </>
  );
};
