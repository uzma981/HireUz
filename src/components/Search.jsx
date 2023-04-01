import React from 'react';
import { AiOutlineCloseCircle, AiOutlineSearch } from 'react-icons/ai';
import JobCard from '../JobCard';
export default function Search() {
  return (
    <div className="">
      <div className="searchDiv grid gap-5 bg-gray-200 rounded  p-2">
        <form action="">
          <div className="firstDiv flex justify-between items-center rounded   bg-white p-5 shadow-lg shadow-gray-300">
            <div className="flex gap-2 items-center">
              <AiOutlineSearch className="text-[25px] icon  text-gray-500 hover:text-black"></AiOutlineSearch>
              <input
                type="text"
                className="bg-transparent text-gray-500 focus:outline-none w-[100%]"
                placeholder="Search Job here..."
              />
            </div>{' '}
            <AiOutlineCloseCircle className="text-[25px] text-gray-500 hover:text-black" />
          </div>
        </form>
      </div>
      {/* <div className="">
        <JobCard
          jobTitle={'Software Developer'}
          jobDescription={'Creating back end applications..'}
          jobReq={'3+ years of experience is needed'}
        />
        <JobCard
          jobTitle={'Web Developer'}
          jobDescription={'Creating full stack web applications..'}
          jobReq={'1+ years of experience is needed'}
        />
        <JobCard
          jobTitle={'Python Developer'}
          jobDescription={'Creating Python back end applications..'}
          jobReq={'2+ years of experience is needed'}
        />
      </div> */}
    </div>
  );
}
