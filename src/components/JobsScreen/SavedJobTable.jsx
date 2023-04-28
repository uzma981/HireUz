import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
export default function SavedJobTable({ job }) {
  const navigate = useNavigate();
   const handleJobClick = () => {
     navigate(`/jobs/${job._id}`);
   };

  return (
    <div className="mb-5 group relative overflow-hidden md:flex justify-between items-center rounded shadow hover:shadow-md dark:shadow-gray-700 transition-all duration-500 p-5 md:mb-0">
      <div className="flex items-center" key={job._id}>
        <Link
          className="text-lg hover:text-purple-600 font-semibold transition-all duration-500 ltr:ml-3 rtl:mr-3 min-w-[180px]"
        >
          {job.jobTitle}
        </Link>
      </div>

      <div className=" flex justify-between md:mt-0 mt-4">
        <span className="block">
          <span className="bg-emerald-600/10 inline-block text-purple-800 text-xs px-2.5 py-0.5 mr-5 font-semibold rounded-full">
            {job.employeeType}
          </span>
        </span>
        <span className="block text-slate-400 text-sm md:mt-1 mt-0">
          <i className="uil uil-clock"></i> {job.datePosted}
        </span>
      </div>

      <div className="md:block flex justify-between md:mt-0 mt-2">
        <span className="text-slate-400">
          <i className="uil uil-map-marker"></i> {job.location}
        </span>
        <span className="block font-semibold md:mt-1 mt-0">{job.salary}</span>
      </div>

      <div className="md:mt-0 mt-4">
    
        <Link
          to={`/jobs/${job._id}/job-apply`}
          className="btn rounded-md bg-purple-500 hover:bg-purple-700 border-purple-800 hover:border-purple-800 text-white ltr:md:ml-2 rtl:md:mr-2 w-full md:w-auto"
        >
          Apply Now
        </Link>
      </div>

      <span className="w-24 bg-yellow-400 text-white text-center absolute ltr:-rotate-45 rtl:rotate-45 ltr:-left-[30px] rtl:-right-[30px] top-1">
        <i className="uil uil-star"></i>
      </span>
    </div>
  );
}
