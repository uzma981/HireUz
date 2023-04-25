import React from 'react';
import Team from './Team';
import ValuesCard from './ValuesCard';
import Footer from '../Footer';
export default function About() {
  return (
    <div className="">
     
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
