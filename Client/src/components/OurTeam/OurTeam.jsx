import React from "react";
import { TeamCard } from "../TeamCard/TeamCard";
import { IoIosMail } from "react-icons/io";

export const OurTeam = () => {
  return (
    <>
      <div
        id="meettheteam"
        className="meettheteam container my-24 mx-auto md:px-6"
        style={{ marginTop: "50px" }}
      >
        <section className="text-center" style={{ marginBottom: "40px" }}>
          <h2
            className="mb-12 text-3xl font-bold"
            style={{ fontSize: "30px", marginBottom: "70px" }}
          >
            Meet the <u className="text-primary dark:text-primary-400">team</u>
          </h2>

          <div className="flex justify-center flex-wrap gap-[80px] mb-[50px]">
            <TeamCard
              name="Swapnil Singh"
              position=""
              image="https://i.postimg.cc/sX4BZRKJ/Whats-App-Image-2024-01-25-at-7-18-54-PM.jpg"
              github="https://github.com/hereisSwapnil"
              twitter="https://twitter.com/hereisSwapnil"
              instagram=""
              linkedin="https://www.linkedin.com/in/hereisSwapnil/"
              mail="mailto:swapnilskumars@gmail.com"
            />
            <TeamCard
              name="Yash Shukla"
              position=""
              image="https://i.postimg.cc/SNfB7Xhj/IMG-20240112-230719-190.webp"
              github="https://github.com/Yashshukla11"
              twitter="https://twitter.com/Yash_Shukla1"
              instagram="https://www.instagram.com/yash_shukla11/"
              linkedin="https://www.linkedin.com/in/yash-shukla-a43838266/"
              mail=""
            />
            <TeamCard
              name="Varun Marwah"
              position=""
              image="https://i.ibb.co/FBbb150/11.jpg"
              github="https://github.com/Varun-047"
              twitter=""
              instagram="https://www.instagram.com/varun_8402_/"
              linkedin="https://www.linkedin.com/in/varun-marwah/"
              mail="mailto:varunmarwah.2004@gmail.com"
            />
                  <TeamCard
              name="Mohit Shukla"
              position=""
              image="https://i.postimg.cc/59GnDLB6/Whats-App-Image-2024-01-25-at-6-28-30-PM.jpg"
              github=""
              twitter=""
              instagram=""
              linkedin="https://www.linkedin.com/in/mohit-shukla-0a500b249/"
              mail="mailto:mohitshukla2004.ms@gmail.com"
            />
            <TeamCard
              name="Vivek Singh"
              position=""
              image="https://i.postimg.cc/j2FfnHhm/Whats-App-Image-2024-01-25-at-6-47-52-PM.jpg"
              github="https://github.com/bettercodevivek"
              twitter=""
              instagram="https://www.instagram.com/_vivekbhati_/"
              linkedin=""
              mail="mailto:champvivek05@gmail.com"
            />
          </div>
          {/* <div className="flex justify-center gap-[80px]">
      
          </div> */}
        </section>
      </div>
    </>
  );
};
