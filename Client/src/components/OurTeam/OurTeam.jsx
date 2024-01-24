import React from "react";
import { TeamCard } from "../TeamCard/TeamCard";

export const OurTeam = () => {
  return (
    <>
      <div
        class="container my-24 mx-auto md:px-6"
        style={{ marginTop: "50px" }}
      >
        <section class="mb-32 text-center">
          <h2 class="mb-12 text-3xl font-bold" style={{ fontSize: "30px" }}>
            Meet the <u class="text-primary dark:text-primary-400">team</u>
          </h2>

          <div class="flex justify-center gap-[80px] mb-[50px]">
            <TeamCard name="Swamp" position="Developer" />
            <TeamCard name="Swamp" position="Developer" />
            <TeamCard name="Swamp" position="Developer" />
          </div>
          <div class="flex justify-center gap-[80px]">
            <TeamCard name="Swamp" position="Developer" />
            <TeamCard name="Swamp" position="Developer" />
          </div>
        </section>
      </div>
    </>
  );
};
