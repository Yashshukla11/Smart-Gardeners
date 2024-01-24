import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import { HeroSection } from "../../components/HeroSection/HeroSection";
import { Para } from "../../components/Para/Para";
import { OurTeam } from "../../components/OurTeam/OurTeam";

export const About = () => {
  return (
    <>
      <Navbar aboutus="true" />
      <HeroSection />
      <Para heading="What Drives Us" />
      <div style={{ marginLeft: "100px", marginTop: "50px" }}>
        <div>
          <Para
            heading="Passion for Sustainability"
            fontSize="25px"
            text="Driven by a deep-rooted passion for sustainability, we believe in harnessing innovation to create a positive impact on the environment. Our team is united by the vision of a greener, healthier future where individuals can cultivate their own fresh produce, irrespective of living spaces."
          />
        </div>
        <div style={{ marginTop: "40px" }}>
          <Para
            heading="Innovation and Technology"
            fontSize="25px"
            text="Innovation fuels our core. We embrace cutting-edge technology, utilizing it to develop user-friendly hydroponic solutions. Our commitment to constant improvement ensures that our products align with the evolving needs of our users."
          />
        </div>
      </div>

      <div style={{ marginTop: "50px" }}>
        <Para heading="Our Commitment" />
      </div>
      <div style={{ marginLeft: "100px", marginTop: "50px" }}>
        <div>
          <Para
            heading="Environmental Stewardship"
            fontSize="25px"
            text="At Smart Farmers, we are committed to environmental stewardship. Our hydroponic solutions are crafted not just for convenience but with a genuine commitment to preserving natural resources and mitigating the environmental impact of traditional farming practices."
          />
        </div>
        <div style={{ marginTop: "40px" }}>
          <Para
            heading="Empowering Urban Living"
            fontSize="25px"
            text="We are driven by the belief that everyone, regardless of their living situation, should have the opportunity to grow and nurture plants. Our commitment extends to empowering urban dwellers, providing them with the tools and knowledge to bring nature into their homes."
          />
        </div>
        <div style={{ marginTop: "40px" }}>
          <Para
            heading="Community Building"
            fontSize="25px"
            text="Our commitment extends beyond individual customers to a larger community. We strive to build a community of like-minded individuals who share our values and vision. Through shared experiences, knowledge exchange, and support, we aim to foster a community that celebrates sustainable living"
          />
        </div>
      </div>
      <OurTeam />
      <Footer />
    </>
  );
};
