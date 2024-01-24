import React from "react";
import { FaGithub } from "react-icons/fa";

export const TeamCard = ({ name, position }) => {
  return (
    <>
      {/* start */}
      <div class="mb-6 lg:mb-0" style={{ width: "250px" }}>
        <div class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div class="relative overflow-hidden bg-cover bg-no-repeat">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/6.jpg"
              class="w-full rounded-t-lg"
            />
            <a href="#!">
              <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"></div>
            </a>
            <svg
              class="absolute text-white dark:text-neutral-700 left-0 bottom-0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                fill="currentColor"
                d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </div>
          <div class="p-6">
            <h5 class="mb-4 text-lg font-bold" style={{ fontSize: "25px" }}>
              {name}
            </h5>
            <p class="mb-4 text-neutral-500 dark:text-neutral-300">
              {position}
            </p>
            <ul class="mx-auto flex list-inside justify-center">
              <a href="#!" class="px-2">
                <FaGithub />
              </a>
              <a href="#!" class="px-2"></a>
              <a href="#!" class="px-2"></a>
            </ul>
          </div>
        </div>
      </div>
      {/* end */}
    </>
  );
};
