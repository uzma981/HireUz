import React from "react";

export default function About() {
  return (
    <div className="">
      <div className="py-5 ml-5 mr-5">
        <h2 className="text-purple-800 font-bold text-2xl mb-5 text-center sm:text-3xl md:text-4xl">
          About us
        </h2>
        <div>
          <p className="justify-center items-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
            porttitor eget dolor morbi non arcu risus quis. Risus quis varius
            quam quisque id. In ornare quam viverra orci.
          </p>
        </div>
      </div>
      <section className="py-10 text-center">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-8">
          <h1 className="text-3xl font-bold md:text-4xl">
            Our company values.
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-md">
            Guided by these values, we strive to make a positive impact in
            everything we do.
          </p>
          <div className="mt-12 grid grid-auto-fit gap-4">
            <div className="grid2-item py-8 px-8 bg-purple-200">
              <h3 className="font-semibold mb-4">Honest</h3>
              <p className="">
                Our commitment to honesty ensures that we maintain the highest
                standards of integrity and professionalism in all our
                interactions, and that we build long-lasting relationships with
                our clients and candidates based on trust and transparency
              </p>
            </div>
            <div className="grid2-item py-8 px-8 bg-purple-200">
              <h3 className="font-semibold mb-4">Simple</h3>
              <p>
                We focus on removing complexity and difficulties for both
                clients and candidates and take it upon ourselves.
              </p>
            </div>
            <div className="grid2-item py-8 px-8 bg-purple-200">
              <h3 className="font-semibold mb-4">Passionate</h3>
              <p>
                We are passionate about bridging the gender gap in the tech
                industry and believe that hiring more women in tech is the key
                to achieving this goal
              </p>
            </div>
            <div className="grid2-item py-8 px-8 bg-purple-200">
              <h3 className="font-semibold mb-4">Passionate</h3>
              <p>
                We are passionate about bridging the gender gap in the tech
                industry and believe that hiring more women in tech is the key
                to achieving this goal
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
