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

      <section className="py-10 bg-black justify-center ">
        <div className="mx-auto max-w-7xl px-6 lg:px-2 ">
          <h1 className="text-3xl font-bold md:text-4xl text-white md:text-center">
            Our company values.
          </h1>
          <p className="mx-auto mt-3 max-w-xl md:text-center text-gray-400">
            Guided by these values, we strive to make a positive impact in
            everything we do.
          </p>
          <div className="mt-12 grid grid-auto-fit gap-10 ">
            <div className="grid2-item card bg-base-100 shadow-xl image-full ">
              <figure>
                <img src="src\img\landingpage.jpg" alt="honestyimage" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Honesty</h2>
                <p>
                  Our commitment to honesty ensures that we maintain the highest
                  standards of integrity and professionalism in all our
                  interactions, and that we build long-lasting relationships
                  with our clients and candidates based on trust and
                  transparency
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="grid2-item card bg-base-100 shadow-xl image-full ">
              <figure>
                <img src="src\img\landingpage.jpg" alt="honestyimage" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Simple</h2>
                <p>
                  We focus on removing complexity and difficulties for both
                  clients and candidates and take it upon ourselves.
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="grid2-item card bg-base-100 shadow-xl image-full ">
              <figure>
                <img src="src\img\landingpage.jpg" alt="honestyimage" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Passionate</h2>
                <p>
                  We are passionate about bridging the gender gap in the tech
                  industry and believe that hiring more women in tech is the key
                  to achieving this goal
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="grid2-item card bg-base-100 shadow-xl image-full ">
              <figure>
                <img src="src\img\landingpage.jpg" alt="honestyimage" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Passionate</h2>
                <p>
                  We are passionate about bridging the gender gap in the tech
                  industry and believe that hiring more women in tech is the key
                  to achieving this goal
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
