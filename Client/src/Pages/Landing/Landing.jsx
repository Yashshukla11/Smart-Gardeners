import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { TextWithImage } from "../../components/TextWithImage/TextWithImage";
import { CardSection } from "../../components/CardSection/CardSection";
import { MiddlePara } from "../../components/MiddlePara/MiddlePara";
import { ContainerSteps } from "../../components/ContainerSteps/ContainerSteps";
import { ContainerWithButton } from "../../components/ContainerWithButton/ContainerWithButton";
import ChatBot from "../../components/ChatBot/ChatBot";

export const Landing = () => {
  return (
    <>
      <Navbar home="true" />
      <Header />
      <div className="my-[50px]">
        <TextWithImage text="Welcome to Smart Gardeners" />
      </div>
      <div className="mt-[50px] md:mt-[150px] md:mx-[30px] md:mx-auto">
        <MiddlePara
          heading="Nurturing Nature in the Modern World"
          text="In today's rapidly advancing world, we find ourselves at the intersection of technological progress and environmental responsibility. As our cities grow skyward, and the demand for sustenance escalates, the delicate balance between urban living and nature preservation becomes more critical than ever."
        />
      </div>

      <div className="mt-[50px] md:mt-[150px] w-[90vw] md:w-[60vw] mx-auto">
        <CardSection />
      </div>
      <div className="mt-[50px] md:mt-[150px] mx-auto">
        <MiddlePara
          heading="The Solution - Hydroponics"
          text="Enter hydroponics, a revolutionary way to grow plants without relying on diminishing soil resources. In our pursuit of a healthier lifestyle and a greener planet, hydroponics emerges as an efficient and environmentally friendly approach to agriculture."
        />
      </div>
      <div id="whyhydrophonics" className="mt-[80px] md:mt-[150px]">
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
          className="text-transparent text-[10vw] md:text-[58px] bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-900 leading-tight anim"
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
        <div>
          <img
            className="md:w-[500px] w-[90vw] h-auto"
            style={{
              // height: "500px",
              // width: "auto",
              margin: "auto",
              marginTop: "70px",
            }}
            src="https://i.postimg.cc/0jTFNkRD/Untitled-design-10-removebg-preview.png"
            alt=""
          />
          <div
            className="testimonials__head w-[90vw] md:w-[60vw] mx-auto"
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
              What is Smart Gardeners' Hydroponic Kit?
            </h2>

            <p className="invest__description">
              Smart Gardeners' Hydroponic Kit is your gateway to a harmonious
              blend of innovation and nature, designed for urban gardening
              bliss. This all-inclusive kit revolutionizes the traditional
              gardening experience with its cutting-edge features:
              <br />
              <br />
              <b>Coco Coir:</b> A premium growing medium that optimizes plant
              growth with exceptional water retention and superior aeration.
              <br />
              <br />
              <b>Mother Cup:</b> A dedicated space for sapling growth, ensuring
              stable root development and convenient transplantation.
              <br />
              <br />
              <b>Mother Cup Tray:</b> Provides holistic plant support by
              creating a stable environment for root development and controlled
              growth conditions.
              <br />
              <br />
              <b>Seed Packs:</b> Embark on a plant odyssey with diverse
              varieties, witnessing flourishing flora in a meticulously
              controlled environment.
              <br />
              <br />
              <b>Nutrient Packets:</b> Customized nutrition for success,
              eliminating guesswork with plant-specific essentials for optimal
              growth.
              <br />
              <br />
              <b>Why Choose:</b> Embrace sustainability with eco-friendly
              materials, achieve efficiency for more yield with less space,
              water, and resources, and immerse yourself in hydroponic education
              through extensive resources for a greener and more knowledgeable
              lifestyle.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-[50px] md:mt-[150px] w-[90vw] md:w-[60vw] mx-auto">
        <MiddlePara
          heading="The Difference"
          text="At Smart Gardeners, we take this vision a step further. Our hydroponic kits are crafted to empower individuals to grow a variety of plants with ease. From tomatoes to strawberries, our kits provide a sustainable and accessible way for anyone to embrace organic farming without the need for soil."
        />
      </div>
      <div className="mt-[50px] md:mt-[150px] w-[90vw] md:w-[60vw] mx-auto">
        <ContainerWithButton
          content="Join the Green Movement"
          button="Explore"
        />
      </div>
      <div className="mt-[30px] mb-[30px] w-[90vw] md:w-[60vw] mx-auto">
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
