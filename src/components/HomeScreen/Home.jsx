import React from 'react';
import Introduction from './Introduction';
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillFacebook,
} from 'react-icons/ai';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <div className="">
      <div className=" p-5 px-10 bg-gradient-to-r from-violet-500 to-fuchsia-500 relative w-full ">
        <h2 className="mt-5 uppercase text-left mb-1 text-3xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-4xl md:text-center">
          Best-in-Class Recruitment for Women in Tech
        </h2>
        <div className="max-w-2xl mx-auto py-5 text-gray-300 lg:mb-8 md:text-lg lg:text-xl">
          <p className="text-left md:text-center">
            We strive to bridge the gender gap in tech by actively recruiting,
            retaining and promoting women in technology fields.
          </p>
        </div>

        <div className="text-5xl flex justify-start md:justify-center gap-10 py-3 text-gray-800">
          <AiFillTwitterCircle />
          <AiFillLinkedin />
          <AiFillFacebook />
        </div>
        <div className="text-left md:text-center">
          <Link
            to="/about"
            className="inline-flex items-end  py-3 text-base font-medium text-white rounded-lg hover:text-black focus:ring-purple-500"
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
          </Link>
        </div>
      </div>

      <Introduction />
      <Footer/>
    </div>
  );
}
