import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import ChatBot from "../../components/ChatBot/ChatBot";
import { MiddlePara } from "../../components/MiddlePara/MiddlePara";
import { KitDetail } from "../../components/KitDetail/KitDetail";
import { ParaWithQuotes } from "../../components/ParaWithQuotes/ParaWithQuotes";

export const Kit = () => {
  return (
    <>
      <Navbar ourproduct="true" />
      <div style={{ marginTop: "100px", marginBottom: "50px" }}>
        <div className="bg">
          <section
            className="heading"
            style={{
              height: "600px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1
              className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 text-[50px] leading-tight anim"
              style={{
                fontWeight: "bolder",
                fontFamily: "Quattrocento Sans, sans-serif",
                margin: "auto",
                width: "60vw",
              }}
            >
              Our Hydroponic Kit: Cultivate the Future
            </h1>
            {/* <button className="growbut">Flowers</button> */}
          </section>
        </div>
        <div style={{ marginTop: "80px" }}></div>
        <MiddlePara text="Welcome to the core of Smart Gardeners, where innovation harmonizes with nature in our exclusive hydroponic kit. Tailored to instill the joy of gardening in urban spaces, our kit empowers you to cultivate fresh, organic produce effortlessly. Let's delve into the distinctive features that make our hydroponic kit an unparalleled choice for a sustainable and fulfilling gardening experience." />

        <KitDetail
          content={[
            {
              heading: "Definition of Growth Excellence",
              content:
                "Our hydroponic kits feature premium coco coir, an exquisite natural growing medium derived from coconut husks.",
            },
            {
              heading: "Exceptional Water Retention",
              content:
                "Coco coir excels in water retention, ensuring that your plants receive consistent moisture for optimal growth.",
            },
            {
              heading: "Superior Aeration",
              content:
                "This natural medium provides superior aeration, creating an environment where plant roots can breathe and thrive.",
            },
            {
              heading: "Luxurious Growth Environment",
              content:
                "The combination of excellent water retention and superior aeration establishes an optimal and luxurious environment for your plants to thrive.",
            },
          ]}
          image="https://i.postimg.cc/gkL8nvhZ/final-coir.png"
          heading="Coco Coir"
        />
      </div>
      <KitDetail
        content={[
          {
            heading: "Complete the Cycle:",
            content:
              "Our kits come with a mother cup, providing a dedicated space for growing saplings.",
          },
          {
            heading: "Optimal Growth Environment:",
            content:
              "Create an optimal growth environment for your plants, ensuring they flourish from the initial stages to becoming thriving plants.",
          },
          {
            heading: "Stable Root Development:",
            content:
              "The design of the mother cup ensures stable and controlled conditions for root development, contributing to healthier plants.",
          },
          {
            heading: "Transplantation Convenience:",
            content:
              "Simplify the transplantation process as saplings grown in the mother cup can be easily transferred to the main hydroponic system.",
          },
          {
            heading: "Integrated Design:",
            content:
              "The mother cup is seamlessly integrated into our hydroponic kits, forming a crucial part of the nurturing process.",
          },
        ]}
        image="https://i.postimg.cc/cH1fH27x/final-cup.png"
        heading="Mother Cup"
        opp="true"
      />
      <KitDetail
        content={[
          {
            heading: "Holistic Plant Support System",
            content:
              "Our trays are meticulously designed to cradle the mother cups above the hydroponic solution, creating a stable and controlled environment for root development.",
          },
          {
            heading: "Stable Environment for Roots",
            content:
              "The thoughtful design of our trays ensures a stable environment, providing unwavering support for the roots to flourish.",
          },
          {
            heading: "Controlled Growth Conditions",
            content:
              "With our trays in place, your plants experience controlled conditions that contribute to vigorous growth, fostering a healthy and robust root system.",
          },
        ]}
        image="https://i.postimg.cc/hPMhrsdw/final-tray.png"
        heading="Mother Cup Tray"
      />
      <KitDetail
        content={[
          {
            heading: "Embark on Your Plant Odyssey",
            content:
              "Start your hydroponic journey with our seed packs, providing you the opportunity to curate a garden filled with diverse plant varieties.",
          },
          {
            heading: "Diverse Plant Varieties",
            content:
              "Our seed packs offer a selection of diverse plant options, allowing you to create a garden that suits your preferences and interests.",
          },
          {
            heading: "Satisfaction in Watching Flourishing Flora",
            content:
              "Experience the satisfaction of witnessing your chosen flora thrive in a meticulously controlled and sustainable environment.",
          },
          {
            heading: "Meticulously Controlled Environment",
            content:
              "Create an environment where every aspect of plant growth is carefully managed, ensuring optimal conditions for your plants to flourish.",
          },
        ]}
        image="https://i.postimg.cc/pVFDqwWS/Final-Seed.png"
        heading="Seed Packs"
        opp="true"
      />
      <KitDetail
        content={[
          {
            heading: "Customization for Success",
            content:
              "Our nutrient packets are specifically designed for Triumph, ensuring a tailored approach for each plant's success.",
          },
          {
            heading: "Bespoke Formulation",
            content:
              "The nutrient packets are crafted to provide a bespoke blend of essential elements crucial for robust and fruitful plant development.",
          },
          {
            heading: "Guaranteed Precision",
            content:
              "No ambiguity in nutrient delivery – our packets guarantee the precise equilibrium required for the optimal growth of each distinctive plant variety.",
          },
          {
            heading: "Plant-specific Essentials",
            content:
              "Each packet is formulated with the specific needs of different plant varieties in mind, addressing their unique nutritional requirements.",
          },
          {
            heading: "Ambiguity-Free Development",
            content:
              "Say goodbye to uncertainty – our nutrient packets eliminate guesswork, offering a clear and defined solution for promoting plant growth and health.",
          },
        ]}
        image="https://i.postimg.cc/xTmN09rG/Final-Nureients.png"
        heading="Nutrient Packets"
      />

      {/*  */}
      <div style={{ marginTop: "100px" }}></div>
      <ParaWithQuotes />

      {/*  */}
      <div style={{ marginTop: "100px" }}></div>
      <Footer />
      <ChatBot />
    </>
  );
};
