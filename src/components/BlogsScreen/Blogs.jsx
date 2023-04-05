import React from 'react';
import BlogSection from './BlogSection';
import Footer from '../Footer';
export default function Blogs() {
  return (
    <div>
      <section className="bg-white py-5 mt-5 mb-5">
        <div className="mr-3 ml-3">
          <h2 className="mb-5 font-bold text-5xl ">BLOGS PAGE</h2>
          <p className="justify-center items-center">
            If you're looking for a way to break into the tech industry but
            don't know where to start, then look no further than this blog post!
            We'll provide you with some valuable insights and tips to help you
            launch your tech career and get a head start in the industry.
          </p>
        </div>
      </section>
      {/* <form className="">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              strokeLinecap="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-purple-300 focus:border-gray-500 "
            placeholder="Search Blogs..."
            required
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-purple-800 hover:bg-purple-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
          >
            Search
          </button>
        </div>
      </form> */}
      <BlogSection />
      <div className="text-center bg-gray-300 py-20">
        <div className="py-10 bg-white mr-5 ml-5 mb-5 lg:w-1/2">
          <h1>Our roles</h1>
        </div>
        <div className="py-10 bg-white mr-5 ml-5 mb-5 lg:w-1/2 lg:justify-right">
          <h1>Courses</h1>
        </div>
        <div className="py-10 bg-white mr-5 ml-5 mb-5 lg:w-1/2">
          <h1 className="">What can you do </h1>
        </div>
        <div className="py-10 bg-white mr-5 ml-5 mb-5 lg:w-1/2">
          <h1>CV Builder </h1>
        </div>
      </div>
      <Footer />
    </div>
  );
}
