import React, { useState } from 'react';
// import NavBar from '../NavBar/NavBar';
import './aboutus.css'; 

const AboutUs = () => {
  return (
    // <div>
    //   <NavBar />
    <div className="split-container">
      {/* Left Section (Image) */}
      <div className="split left">
        <div className="video-background">
          <video autoPlay loop muted playsInline>
            <source src="https://res.cloudinary.com/dybbxzxlz/video/upload/v1705918293/butterfly_-_12060_Original_jaupfx.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Right Section (Text) */}
      <div className="split right about-us-container">
        <div className="centeredr">
          <section className="about-us-section">
            <div className="logo-heading-container-1">
              <div className="logo-container-1">
                <img src="https://i.postimg.cc/7PXVht2v/Screenshot-2024-01-22-at-2-43-19-PM-fotor-bg-remover-20240122151630.png" alt="Company Logo" />
              </div>
              <div className="headm">
                <h1>Smart Gardeners</h1>
              </div>
            </div>
            <div className="bd">
              <p>
                At Smart Gardeners, we are passionate about revolutionizing the way we cultivate and interact with plants.
                Our mission is to make hydroponic gardening accessible to everyone, empowering individuals to grow fresh and
                sustainable produce right in the comfort of their homes.
              </p>
            </div>
          </section>

          <section className="story-section">
            <div className="logo-heading-container">
              <div className="logo-container">
                <img src="https://i.postimg.cc/tRfmMYqm/Screenshot-2024-01-22-at-2-44-19-PM-fotor-bg-remover-20240122175721.png" alt="Company Logo" />
              </div>
              <h2>Our Story</h2>
            </div>
            <p>
              Smart Gardeners was born out of a shared love for nature and a commitment to environmental sustainability.
              The founders, Smart Gardeners, envisioned a world where anyone, regardless of space or experience, could experience
              the joy of growing their own food. Innovation in Agriculture We believe in harnessing the power of technology to create innovative solutions for modern agriculture. Hydroponics allows for efficient and resource-conscious plant cultivation, minimizing environmental impact.
            </p>
          </section>

          <section className="drives-section">
          <div className="logo-heading-container">
            <div className="logo-container">
              <img src="https://i.postimg.cc/tRfmMYqm/Screenshot-2024-01-22-at-2-44-19-PM-fotor-bg-remover-20240122175721.png" alt="Company Logo" />
            </div>
            <h2>What Drives Us</h2>
            </div>
            <div className="drive">
            <div className="logo-heading-container-sub">
            <div className="logo-container">
              <img src="https://i.postimg.cc/R0MwP2gG/Screenshot-2024-01-22-at-2-45-42-PM-fotor-bg-remover-2024012219111.png" alt="Company Logo" />
            </div>
              <h3>Innovation in Agriculture</h3>
              </div>
              <p>
                We believe in harnessing the power of technology to create innovative solutions for modern agriculture. Hydroponics
                allows for efficient and resource-conscious plant cultivation, minimizing environmental impact.
              </p>
            </div>

            <div className="drive">
            <div className="logo-heading-container-sub">
            <div className="logo-container">
              <img src="https://i.postimg.cc/R0MwP2gG/Screenshot-2024-01-22-at-2-45-42-PM-fotor-bg-remover-2024012219111.png" alt="Company Logo" />
            </div>
              <h3>Empowering Green Enthusiasts</h3>
              </div>
              <p>
                Whether you're a seasoned gardener or just starting, we're here to support you on your plant-growing journey.
                Our hydroponic kits, coupled with cutting-edge technology, provide an easy and enjoyable way to nurture your own green oasis.
              </p>
            </div>
          </section>

          <section className="Our_Commitment">
          <div className="logo-heading-container">
            <div className="logo-container">
              <img src="https://i.postimg.cc/tRfmMYqm/Screenshot-2024-01-22-at-2-44-19-PM-fotor-bg-remover-20240122175721.png" alt="Company Logo" />
            </div>
            <h2>Our Commitment</h2>
            </div>
            <div className="commitment">
            <div className="logo-heading-container-sub">
            <div className="logo-container">
              <img src="https://i.postimg.cc/R0MwP2gG/Screenshot-2024-01-22-at-2-45-42-PM-fotor-bg-remover-2024012219111.png" alt="Company Logo" />
            </div>
              <h3>Quality and Sustainability</h3>
              </div>
              <p>
                We are committed to delivering high-quality products that not only promote plant growth but also adhere to eco-friendly practices. From our packaging to our materials, sustainability is at the core of what we do.
              </p>
            </div>
            <div className="Community_Building">
            <div className="logo-heading-container-sub">
            <div className="logo-container">
              <img src="https://i.postimg.cc/R0MwP2gG/Screenshot-2024-01-22-at-2-45-42-PM-fotor-bg-remover-2024012219111.png" alt="Company Logo" />
            </div>
              <h3>Community Building</h3>
              </div>
              <p>
                Join our growing community of plant enthusiasts! Share your experiences, ask questions, and connect with fellow growers on our forums. Together, we're cultivating more than just plants – we're cultivating a community.
              </p>
            </div>
          </section>

          <section className="team-section">
          <div className="logo-heading-container">
            <div className="logo-container">
              <img src="https://i.postimg.cc/tRfmMYqm/Screenshot-2024-01-22-at-2-44-19-PM-fotor-bg-remover-20240122175721.png" alt="Company Logo" />
            </div>
            <h2>Meet the Team</h2>
            </div>
            <div className="founder">
            <div className="logo-heading-container-founder">
            <div className="logo-container">
              <img src="https://i.postimg.cc/tTCCXctr/Screenshot-2024-01-22-at-2-43-48-PM-fotor-bg-remover-20240122182459.png" alt="Company Logo" />
            </div>
              <h3>Yash</h3>
              </div>
              <p></p>
            </div>

            <div className="founder">
            <div className="logo-heading-container-founder">
            <div className="logo-container">
              <img src="https://i.postimg.cc/tTCCXctr/Screenshot-2024-01-22-at-2-43-48-PM-fotor-bg-remover-20240122182459.png" alt="Company Logo" />
            </div>
              <h3>Varun</h3>
              </div>
              <p></p>
            </div>
            <div className="founder">
            <div className="logo-heading-container-founder">
            <div className="logo-container">
              <img src="https://i.postimg.cc/tTCCXctr/Screenshot-2024-01-22-at-2-43-48-PM-fotor-bg-remover-20240122182459.png" alt="Company Logo" />
            </div>
              <h3>Vivek</h3>
              </div>
              <p></p>
            </div>
            <div className="founder">
            <div className="logo-heading-container-founder">
            <div className="logo-container">
              <img src="https://i.postimg.cc/tTCCXctr/Screenshot-2024-01-22-at-2-43-48-PM-fotor-bg-remover-20240122182459.png" alt="Company Logo" />
            </div>
              <h3>Mohit</h3>
              </div>
              <p></p>
            </div>
          </section>

          <section className="Get_in_Touch">
          <div className="logo-heading-container">
            <div className="logo-container">
              <img src="https://i.postimg.cc/tRfmMYqm/Screenshot-2024-01-22-at-2-44-19-PM-fotor-bg-remover-20240122175721.png" alt="Company Logo" />
            </div>
            <h2>Get in Touch</h2>
            </div>
            <div className="Get_in_Touch">
              Have questions, suggestions, or just want to say hello? We'd love to hear from you! <br /><br />
              <b>Reach out to us at </b>- smartgardeners2024@gmail.com <br />
              <b>Follow us on</b> [social media platforms]<br />
              Thank you for being a part of the Welcome to <b>Smart Gardeners</b> journey. <br /><br />
              Let's grow together!
            </div>
          </section>
        </div>
      </div>
    {/* </div> */}
    </div>
  );
};

export default AboutUs;
