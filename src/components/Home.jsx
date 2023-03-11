import React from "react";
import Image from "react";
import bgImg from "../img/landingpage.jpg";
import img from "../img/pexels-andrea-piacquadio-3769021.jpg";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillFacebook,
} from "react-icons/ai";
export default function Home() {
  return (
    <div className="">
      <div className="p-10 py-20 bg-gradient-to-r from-violet-500 to-fuchsia-500 relative w-full">
        {/* <h2 className="text-5xl py-2 text-white font-medium md:text-6xl">
    Hire Uz
  </h2> */}
        <h2 className="text-center mb-2 text-3xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-4xl">
          Best-in-Class Recruitment for Women in Tech
        </h2>
        <div className="max-w-2xl mx-auto mb-4 py-5 font-light text-gray-600 lg:mb-8 md:text-lg lg:text-xl">
          <p className="text-center">
            We strive to bridge the gender gap in tech by actively recruiting,
            retaining and promoting women in technology fields.
          </p>
        </div>

        <div className="text-5xl flex justify-center gap-10 py-3 text-gray-800">
          <AiFillTwitterCircle />
          <AiFillLinkedin />
          <AiFillFacebook />
        </div>
        <div className="text-center">
          <a
            href="#"
            className="inline-flex items-end ml-2 px-5 py-3 text-base font-medium text-white rounded-lg hover:text-black focus:ring-purple-500"
          >
            Find out more
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
      {/* <img alt="..." className="" src={bgImg}></img> */}
      <section className="py-20 text-center">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Career paths.</h2>
          <p className="mx-auto mt-3 max-w-xl text-md">
            Pick the right career path
          </p>
          <div className="mt-12 grid grid-auto-fit gap-4">
            <div className="grid2-item py-8 px-8 bg-purple-200">
              <h3 className="font-semibold mb-4">Software Developer</h3>
              <p>
                This involves designing, developing, testing, and maintaining
                software systems and applications.
              </p>
            </div>
            <div className="grid2-item py-8 px-8 bg-purple-200">
              <h3 className="font-semibold mb-4">Data analyst/scientist</h3>
              <p>
                We focus on removing complexity and difficulties for both
                clients and candidates and take it upon ourselves.
              </p>
            </div>
            <div className="grid2-item py-8 px-8 bg-purple-200">
              <h3 className="font-semibold mb-4">Project manager</h3>
              <p>
                We are passionate about bridging the gender gap in the tech
                industry and believe that hiring more women in tech is the key
                to achieving this goal
              </p>
            </div>
            <div className="grid2-item py-8 px-8 bg-purple-200">
              <h3 className="font-semibold mb-4">UX/UI designer</h3>
              <p>
                We are passionate about bridging the gender gap in the tech
                industry and believe that hiring more women in tech is the key
                to achieving this goal
              </p>
            </div>
            <div className="grid2-item py-8 px-8 bg-purple-200">
              <h3 className="font-semibold mb-4">Cybersecurity specialist</h3>
              <p>
                This involves protecting computer systems and networks from
                cyber threats and attacks.
              </p>
            </div>
            <div className="grid2-item py-8 px-8 bg-purple-200">
              <h3 className="font-semibold mb-4">
                Artificial intelligence/machine learning engineer
              </h3>
              <p>
                This involves developing and implementing AI and machine
                learning algorithms to automate and optimize various processes
                and systems.
              </p>
            </div>
            <div className="grid2-item py-8 px-8 bg-purple-200">
              <h3 className="font-semibold mb-4">Cloud computing specialist</h3>
              <p>
                This involves managing and maintaining cloud-based systems and
                infrastructure.
              </p>
            </div>
            <div className="grid2-item py-8 px-8 bg-purple-200">
              <h3 className="font-semibold mb-4">Network administrator</h3>
              <p>
                This involves managing and maintaining computer networks,
                including troubleshooting issues and ensuring network security.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="justify-center py:4 lg:py-8 bg-purple-400 ">
        <div className=" justify-center py-2 mt-9 m-10 grid-auto-fit md:m-5 lg:grid lg:grid-cols-2 lg:gap-4 lg:m-20">
          <div className="justify-center lg:py-4 lg:ml-8 lg:justify-end">
            <h2 className="mt-4 text-center font-semibold text-2xl md:text-2xl xl:text-4xl md:text-left">
              Opportunities for career growth
            </h2>
            <p className="py-4 text-center md:text-right lg:text-left text-gray-700 max-w-lg md:max-w-xl">
              We understand that career growth is an essential component of job
              satisfaction, and we are dedicated to investing the time, effort,
              and resources necessary to provide opportunities for professional
              advancement.
            </p>

            <p className="py-4 text-center lg:text-left text-gray-700 max-w-lg md:max-w-xl ">
              We work closely with our clients to identify roles that align with
              your skill sets, interests, and long-term career goals. We also
              offer training and mentoring programs to help women in tech
              acquire new skills and knowledge, stay up-to-date with the latest
              industry trends, and advance their careers.
            </p>
            <p className="py-4 text-center lg:text-left text-gray-700 max-w-lg md:max-w-xl">
              We believe that by investing in the career growth of women, we not
              only support their personal and professional development but also
              contribute to creating a more diverse and inclusive tech industry.
            </p>
          </div>
          <div className="flex justify-center mr-5 md:justify-center ">
            <img
              className="max-w-s ml-5 object-contain md:h-auto md:max-w-md lg:max-w-full lg:mr-5 lg:ml-5  "
              src={img}
              alt="woman with computer"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
// <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
//   {/* <Image src={deved} layout="fill" objectFit="cover" /> */}
// </div>
