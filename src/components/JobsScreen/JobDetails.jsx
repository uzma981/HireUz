import React from 'react';

export default function JobDetails({
  jobName,
  employeeType,
  location,
  salary,
  datePosted,
  jobDescription1,
  jobDescription2,
  jobDescription3,
  jobDuties1,
  jobDuties2,
  jobDuties3,
  jobDuties4,
  jobExp1,
  jobExp2,
  jobExp3,
  jobExp4,
}) {
  return (
    <div className="container mt-10">
      <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
        <div className="lg:col-span-4 md:col-span-6">
          <div className="p-6 shadow dark:shadow-gray-700 rounded-md bg-white dark:bg-slate-900 sticky top-20">
            <div className="md:ltr:ml-4 md:rtl:mr-4 mt-4">
              <h5 className="text-xl font-semibold">{jobName}</h5>
              <div className="mt-1">
                <span className="text-slate-400 font-medium ltr:mr-2 rtl:ml-2 inline-block">
                  <i className="uil uil-building text-[18px] text-purple-800 ltr:mr-1 rtl:ml-1"></i>{' '}
                  {location}
                </span>
                {/* <span className="text-slate-400 font-medium ltr:mr-2 rtl:ml-2 inline-block">
                  <i className="uil uil-map-marker text-[18px] text-purple-800 ltr:mr-1 rtl:ml-1"></i>{' '}
                  Manchester, UK
                </span> */}
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-8 md:col-span-6 m-5">
          <h5 className="text-lg font-semibold">Job Information:</h5>
          <ul className="list-none mt-5">
            <li className="inline-flex items-center py-2 px-4 space-x-2 sm:mr-5 bg-white ltr:mr-2 rtl:ml-2 my-1 shadow dark:shadow-gray-700 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-user-check h-5 w-5"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="8.5" cy="7" r="4"></circle>
                <polyline points="17 11 19 13 23 9"></polyline>
              </svg>

              <div className="ltr:ml-4 rtl:mr-4 ">
                <p className="font-medium">Employee Type:</p>
                <span className="text-purple-800 font-medium text-sm">
                  {employeeType}
                </span>
              </div>
            </li>

            <li className="inline-flex items-center py-2 space-x-2 px-4 sm:mr-15 bg-white ltr:mr-2 rtl:ml-2 my-1 shadow dark:shadow-gray-700 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-map-pin h-5 w-5"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>

              <div className="ltr:ml-4 rtl:mr-4">
                <p className="font-medium">Location:</p>
                <span className="text-purple-800 font-medium text-sm">
                  {location}
                </span>
              </div>
            </li>

            <li className="inline-flex items-center py-2 px-4 sm:mr-15 space-x-2 bg-white ltr:mr-2 rtl:ml-2 my-1 shadow dark:shadow-gray-700 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-monitor h-5 w-5"
              >
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>

              <div className="ltr:ml-4 rtl:mr-4">
                <p className="font-medium">Job Type:</p>
                <span className="text-purple-800 font-medium text-sm">
                  {jobName}
                </span>
              </div>
            </li>

            <li className="inline-flex items-center py-2 px-4  space-x-2 bg-white ltr:mr-2 rtl:ml-2 my-1 shadow dark:shadow-gray-700 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-dollar-sign h-5 w-5"
              >
                <line x1="12" y1="1" x2="12" y2="23"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>

              <div className="ltr:ml-4 rtl:mr-4">
                <p className="font-medium">Salary:</p>
                <span className="text-purple-800 font-medium text-sm">
                  {salary}
                </span>
              </div>
            </li>

            <li className="inline-flex items-center py-2 px-4 space-x-2 bg-white ltr:mr-2 rtl:ml-2 my-1 shadow dark:shadow-gray-700 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-clock h-5 w-5"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>

              <div className="ltr:ml-4 rtl:mr-4">
                <p className="font-medium">Date posted:</p>
                <span className="text-purple-800 font-medium text-sm">
                  {datePosted}
                </span>
              </div>
            </li>
          </ul>

          <h5 className="text-lg font-semibold mt-6">Job Description:</h5>

          <p className="text-slate-400 mt-4">{jobDescription1}</p>
          <p className="text-slate-400 mt-4">{jobDescription2}</p>
          <p className="text-slate-400 mt-4">{jobDescription3}</p>

          <h5 className="text-lg font-semibold mt-6">
            Responsibilities and Duties:{' '}
          </h5>
          <p className="text-slate-400 mt-4">{jobDuties1}</p>
          <ul className="list-none">
            <li className="text-slate-400 mt-2">
              <i className="uil uil-arrow-right ltr:mr-1 rtl:ml-1"></i>

              {jobDuties2}
            </li>
            <li className="text-slate-400 mt-2">
              <i className="uil uil-arrow-right  ltr:mr-1 rtl:ml-1"></i>

              {jobDuties3}
            </li>
            <li className="text-slate-400 mt-2">
              <i className="uil uil-arrow-right  ltr:mr-1 rtl:ml-1"></i>

              {jobDuties4}
            </li>
            <li className="text-slate-400 mt-2">
              <i className="uil uil-arrow-right ltr:mr-1 rtl:ml-1"></i>
              Revise, update, refactor and debug code
            </li>
            <li className="text-slate-400 mt-2">
              <i className="uil uil-arrow-right ltr:mr-1 rtl:ml-1"></i>
              Improve existing software
            </li>
            <li className="text-slate-400 mt-2">
              <i className="uil uil-arrow-right  ltr:mr-1 rtl:ml-1"></i>
              Develop documentation throughout the software development life
              cycle (SDLC)
            </li>
            <li className="text-slate-400 mt-2">
              <i className="uil uil-arrow-right ltr:mr-1 rtl:ml-1"></i>
              Serve as an expert on applications and provide technical support
            </li>
          </ul>

          <h5 className="text-lg font-semibold mt-6">
            Required Experience, Skills and Qualifications:{' '}
          </h5>
          <p className="text-slate-400 mt-4">
            It sometimes makes sense to select texts containing the various
            letters and symbols specific to the output language.
            {jobExp1}
          </p>
          <ul className="list-none">
            <li className="text-slate-400 mt-2">
              <i className="uil uil-arrow-right  ltr:mr-1 rtl:ml-1"></i>

              {jobExp2}
            </li>
            <li className="text-slate-400 mt-2">
              <i className="uil uil-arrow-right ltr:mr-1 rtl:ml-1"></i>

              {jobExp3}
            </li>
            <li className="text-slate-400 mt-2">
              <i className="uil uil-arrow-right  ltr:mr-1 rtl:ml-1"></i>

              {jobExp4}
            </li>

            <li className="text-slate-400 mt-2">
              <i className="uil uil-arrow-right ltr:mr-1 rtl:ml-1"></i>
              Excellent problem solving and analytical skills
            </li>
          </ul>

          <div className="mt-5">
            <a
              href="job-apply.html"
              className="btn rounded-md bg-purple-500 hover:bg-purple-700 border-purple-800 hover:border-purple-800 text-white ltr:md:ml-2 rtl:md:mr-2 w-full md:w-auto"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
