import React from "react";

export default function Clients() {
  return (
    <div className="">
      <section className="bg-white py-5 mt-5 mb-5">
        <div className="mr-3 ml-3">
          <h2 className="mb-5 font-bold text-5xl ">CLIENTS PAGE</h2>
          <p className="justify-center items-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
            porttitor eget dolor morbi non arcu risus quis. Risus quis varius
            quam quisque id. In ornare quam viverra orci.
          </p>
        </div>
      </section>
      <div className="bg-black mt-5 py-10 md:px-10 md:py-10 ">
        <section className="mt-5 mb-5 ">
          <div className="mr-3 ml-3 flex flex-col md:flex-row md:items-center">
            <div className="md:w-1/2 md:pr-10">
              <h2 className=" text-3xl text-white md:text-4xl lg:text-5xl">
                Ready to work with us?
              </h2>
              <h1 className="mt-2 mb-4 text-purple-300 text-4xl md:text-5xl lg:text-6xl">
                LETS TALK!
              </h1>
              <p className="text-white">
                Please note that for your privacy no data from this form is
                stored in this website, beyond the legitimate interest period.
              </p>
              <p className="text-white mb-2 mt-2">View our privacy policy</p>
            </div>
            <div className="md:w-1/2">
              <input
                name="first_name"
                placeholder="Name*"
                type="text"
                className="w-full mb-5 py-2 bg-transparent "
              ></input>
              <input
                name="email"
                placeholder="Email*"
                type="text"
                className="w-full py-2 mb-5 bg-transparent "
              ></input>
              <input
                name="Phone*"
                placeholder="Phone*"
                type="text"
                className="w-full py-2 mb-5 bg-transparent "
              ></input>
              <div className="">
                <label className="items-end text-gray-300">
                  How can we help?
                </label>
                <textarea
                  className="bg-gray-300 w-full py-10"
                  name="question"
                ></textarea>
              </div>
              <button
                className="text-white mt-5 ml-5 items-center border-4 px-10 md:px-20 md:ml-0 "
                placeholder="Submit"
              >
                Submit
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
