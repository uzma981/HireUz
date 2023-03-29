import React from 'react';
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillFacebook,
} from 'react-icons/ai';
import Team from './Team';
import ValuesCard from './ValuesCard';
import Footer from '../Footer';
export default function About() {
  return (
    <div className="">
      <div className=" p-5 px-10 bg-gradient-to-r from-violet-500 to-fuchsia-500 relative w-full ">
        <h2 className="mt-5 uppercase text-left mb-1 text-3xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-4xl md:text-center">
          Best-in-Class Recruitment for Women in Tech
        </h2>
        <div className="max-w-2xl mx-auto py-5 font-light text-gray-600 lg:mb-8 md:text-lg lg:text-xl">
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
          <a
            href="#"
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
          </a>
        </div>
      </div>
      {/* <section className="bg-white py-5 mt-5 mb-5">
        <div className="mr-3 ml-3">
          <h2 className="mb-5 font-bold text-5xl ">ABOUT US </h2>
          <p className="justify-center items-center">
            At our recruitment agency, we help businesses find and hire
            qualified candidates for open positions. Our focus is on matching
            talent to the right job, which saves businesses time and resources
            while ensuring that the best candidates are selected.
          </p>
        </div>
      </section> */}
      <section className="py-10 bg-black justify-center ">
        <div className="mx-auto max-w-7xl px-4 lg:px-2 ">
          <h1 className="text-3xl font-bold md:text-4xl text-white md:text-center">
            OUR COMPANY VALUES
          </h1>
          <p className="mx-auto mt-3 max-w-xl md:text-center text-gray-400">
            Guided by these values, we strive to make a positive impact in
            everything we do.
          </p>
          <div className="mt-12  gap-10 grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 lg:gap-xl-12 ">
            <ValuesCard
              valueName={'Honesty'}
              valueText={
                'Our commitment to honesty ensures that we maintain the highest standards of integrity and professionalism in all our interactions, and that we build long-lasting relationships with our clients and candidates based on trust and transparency'
              }
            ></ValuesCard>
            <ValuesCard
              valueName={'Simple'}
              valueText={
                'We focus on removing complexity and difficulties for both clients and candidates and take it upon ourselves.'
              }
            ></ValuesCard>
            <ValuesCard
              valueName={'Passionate'}
              valueText={
                'We are passionate about bridging the gender gap in the tech industry and believe that hiring more women in tech is the key to achieving this goal'
              }
            ></ValuesCard>
            <ValuesCard
              valueName={'Motivated'}
              valueText={
                'Our commitment to motivation ensures that we maintain the highest standards of integrity and professionalism in all our interactions, and that we build long-lasting relationships with our clients and candidates based on trust and transparency'
              }
            ></ValuesCard>
          </div>
        </div>
      </section>
      <Team />
      <Footer />
    </div>
  );
}
