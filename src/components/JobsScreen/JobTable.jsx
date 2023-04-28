import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
export default function JobTable2({ job }) {
  const navigate = useNavigate();
    const [isSaved, setIsSaved] = useState(false);

  const handleJobClick = () => {
    navigate(`/jobs/${job._id}`);
  };
  const saveJob = async (e) => {
    const response = await fetch('http://localhost:3000/saveJob', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        jobID: job._id,
        jobTitle: job.jobTitle,
        datePosted: job.datePosted,
        location: job.location,
        salary: job.salary,
        employeeType: job.employeeType,
      }),
    });
    if (response.status === 201) {
      console.log('job sucessfully saved');
      setIsSaved(true);
    } else if (response.status == 404) {
      console.log('job cant be saved');
    }
  };


  return (
    <div className="mb-5 group relative overflow-hidden md:flex justify-between items-center rounded shadow hover:shadow-md dark:shadow-gray-700 transition-all duration-500 p-5 md:mb-0">
      <div className="flex items-center" key={job._id}>
        <Link
          to={`/jobs/${job._id}`}
          onClick={handleJobClick}
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
      {isSaved ? (
          <Link
            id="save-container"
            className="btn btn-icon rounded-full bg-gray-300 hover:bg-purple-600 border-purple-600/10 hover:border-purple-600 text-purple-800 hover:text-white md:relative absolute top-0 right-2 md:m-0 m-3"
          >
            Saved
          </Link>
        ) : (
          <Link id = "save-container"
            onClick={saveJob}
            className="btn btn-icon rounded-full bg-emerald-600/5 hover:bg-purple-600 border-purple-600/10 hover:border-purple-600 text-purple-800 hover:text-white md:relative absolute top-0 right-2 md:m-0 m-3"
          >
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
              className="feather feather-bookmark h-4 w-4"
            >
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
            </svg>
          </Link>
        )}

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
