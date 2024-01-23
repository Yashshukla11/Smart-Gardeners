import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { TextWithImage } from "../../components/TextWithImage/TextWithImage";
import { CardSection } from "../../components/CardSection/CardSection";
import { MiddlePara } from "../../components/MiddlePara/MiddlePara";
import { Para } from "../../components/Para/Para";
import { ContainerSteps } from "../../components/ContainerSteps/ContainerSteps";
import { ContainerWithButton } from "../../components/ContainerWithButton/ContainerWithButton";

export const Landing = () => {
  return (
    <>
      <Navbar />
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
      <div className="mt-[100px]">
        <ContainerSteps />
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
    </>
  );
};
