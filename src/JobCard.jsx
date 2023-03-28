import React from 'react';

export default function JobCard({ jobTitle, jobDescription, jobReq }) {
  return (
    <div className="max-w-md mx-auto mr-5 ml-5 m-10 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0"></div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-purple-500 font-bold">
            {jobTitle}
          </div>
          <a
            href="#"
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            {jobDescription}
          </a>
          <p className="mt-2  text-gray-500">{jobReq}</p>
          <div className="mt-5 p-4 bg-gray-200 text-center rounded-xl hover:bg-gray-300">
            <a href="#" className="text-black ">
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
