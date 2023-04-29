import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
export default function JobDetails() {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);
  const getJobs = async () => {
    try {
      const response = await axios.get('http://localhost:3000/jobs/' + jobId);
      const data = response.data;
      setJob(data);
      console.log(data);
      return data;
    } catch (error) {
      console.log('no jobs');
      return null;
    }
  };
  useEffect(() => {
    getJobs();
  }, [jobId]);

  if (!job) {
    return <div>Loading...</div>;
  }
  return (
    <div className="container mt-10">
      <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
        <div className="lg:col-span-4 md:col-span-6">
          <div className="p-6 shadow dark:shadow-gray-700 rounded-md bg-white dark:bg-slate-900 sticky top-20">
            <div className="md:ltr:ml-4 md:rtl:mr-4 mt-4">
              <h5 className="text-xl font-semibold">{job.jobTitle}</h5>
              <div className="mt-1">
                <span className="text-slate-400 font-medium ltr:mr-2 rtl:ml-2 inline-block">
                  <i className="uil uil-building text-[18px] text-purple-800 ltr:mr-1 rtl:ml-1"></i>{' '}
                  {job.location}
                </span>
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
                  {job.employeeType}
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
                  {job.location}
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
                  {job.jobTitle}
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
                  {job.salary}
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
                  {job.datePosted}
                </span>
              </div>
            </li>
          </ul>
          <h5 className="text-lg font-semibold mt-6">Job Description:</h5>
          {job.jobDescription.length > 0 && (
            <div className="mt-4">
              <div>
                <p className="text-slate-400">
                  {job.jobDescription[0].jobDes1}
                </p>
                <p className="text-slate-400">
                  {job.jobDescription[0].jobDes2}
                </p>
                <p className="text-slate-400">
                  {job.jobDescription[0].jobDes3}
                </p>
              </div>
            </div>
          )}

          <h5 className="text-lg font-semibold mt-6">
            Responsibilities and Duties:{' '}
          </h5>
          {job.jobDuties.length > 0 && (
            <ul className="list-none">
              <div>
                <li className="text-slate-400 mt-2">
                  <i className="uil uil-arrow-right ltr:mr-1 rtl:ml-1"></i>
                  {job.jobDuties[0].jobDuties1}
                </li>

                <li className="text-slate-400 mt-2">
                  <i className="uil uil-arrow-right ltr:mr-1 rtl:ml-1"></i>
                  {job.jobDuties[0].jobDuties2}
                </li>

                <li className="text-slate-400 mt-2">
                  <i className="uil uil-arrow-right ltr:mr-1 rtl:ml-1"></i>
                  {job.jobDuties[0].jobDuties3}
                </li>
                <li className="text-slate-400 mt-2">
                  <i className="uil uil-arrow-right ltr:mr-1 rtl:ml-1"></i>
                  {job.jobDuties[0].jobDuties4}
                </li>
              </div>
            </ul>
          )}

          <h5 className="text-lg font-semibold mt-6">
            Required Experience, Skills and Qualifications:{' '}
          </h5>
          {job.jobExperience.length > 0 && (
            <ul className="list-none">
              <li className="text-slate-400 mt-2">
                <i className="uil uil-arrow-right  ltr:mr-1 rtl:ml-1"></i>

                {job.jobExperience[0].jobExp1}
              </li>
              <li className="text-slate-400 mt-2">
                <i className="uil uil-arrow-right ltr:mr-1 rtl:ml-1"></i>

                {job.jobExperience[0].jobExp2}
              </li>
              <li className="text-slate-400 mt-2">
                <i className="uil uil-arrow-right  ltr:mr-1 rtl:ml-1"></i>

                {job.jobExperience[0].jobExp3}
              </li>

              <li className="text-slate-400 mt-2">
                <i className="uil uil-arrow-right ltr:mr-1 rtl:ml-1"></i>
                {job.jobExperience[0].jobExp4}
              </li>
            </ul>
          )}
          <div className="mt-5">
            <Link
              to={`/jobs/${jobId}/job-apply`}
              className="btn rounded-md bg-purple-500 hover:bg-purple-700 border-purple-800 hover:border-purple-800 text-white ltr:md:ml-2 rtl:md:mr-2 w-full md:w-auto"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
