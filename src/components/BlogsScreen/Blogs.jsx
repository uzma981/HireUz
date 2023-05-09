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

      <BlogSection />
      {/* <div className="text-center bg-gray-300 py-20">
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
      </div> */}
      <Footer />
    </div>
  );
}
