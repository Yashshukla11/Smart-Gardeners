import React from "react";
import { FaGithub, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

export const TeamCard = ({
  name,
  position,
  image,
  github,
  twitter,
  mail,
  instagram,
  linkedin,
}) => {
  return (
    <>
      {/* start */}
      <div className="mb-6 lg:mb-0" style={{ width: "250px" }}>
        <div
          style={{
            background:
              "linear-gradient(to right, rgba(255, 234, 0, 0.45), rgba(204, 204, 204, 0.45), rgba(0, 178, 184, 0.45))",
          }}
          className="block rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
        >
          <div
            className="relative overflow-hidden bg-cover bg-no-repeat"
            style={{ height: "300px" }}
          >
            <img
              src={image}
              className="w-full rounded-t-lg"
              style={{ height: "300px", objectFit: "cover" }}
            />
            {/* <a target="_blank" href="#!">
              <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"></div>
            </a> */}
            {/* <svg
              className="absolute text-[#66bb6a] left-0 bottom-0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                fill="currentColor"
                d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg> */}
          </div>
          <div className="p-6 mt-0">
            <h5
              className="mb-4 text-lg font-bold"
              style={{
                fontSize: "25px",
                fontFamily: "Quattrocento Sans, sans-serif",
              }}
            >
              {name}
            </h5>
            <p className="mb-4 text-neutral-500 dark:text-neutral-300">
              {position}
            </p>
            <ul className="mx-auto flex list-inside justify-center">
              {github && (
                <a target="_blank" href={github} className="px-2">
                  <FaGithub />
                </a>
              )}
              {linkedin && (
                <a target="_blank" href={linkedin} className="px-2">
                  <FaLinkedin />
                </a>
              )}
              {twitter && (
                <a target="_blank" href={twitter} className="px-2">
                  <FaXTwitter />
                </a>
              )}
              {mail && (
                <a target="_blank" href={mail} className="px-2">
                  <IoIosMail />
                </a>
              )}
              {instagram && (
                <a target="_blank" href={instagram} className="px-2">
                  <FaInstagramSquare />
                </a>
              )}
            </ul>
          </div>
        </div>
      </div>
      {/* end */}
    </>
  );
};
