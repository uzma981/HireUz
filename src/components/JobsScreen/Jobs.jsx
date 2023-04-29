import React from 'react';
import JobTable from './JobTable';
import axios from 'axios';
import { useState, useEffect } from 'react';
import HomeNavbar from '../navigation/HomeNavbar';
import Search from '../ProfileScreen/Search';

export default function Jobs() {
  const [jobs, setJobs] = useState(null);
  // The 'getJobs' function is defined to make an  HTTP GET request to the server using the 'axios' library. 
  
  const getJobs = async () => {
    try {
      const response = await axios.get('http://localhost:3000/jobs');
      const data = response.data; 
      setJobs(data);//If the request is successful, the response data is extracted and used to update the 'jobs' state variable using the 'setJobs' function. 
      console.log(data);
      return data;
    } catch (error) {
      // If the request is not successful, the function logs an error message to the console and returns 'null'.
      console.log('no jobs');
      return null;
    }
  };
  useEffect(() => {
    getJobs();
  }, []);
  return (
    <div>
      <HomeNavbar />
      <Search />
      <ul>
         {/* For each job in the 'jobs' array, a 'JobTable' component is rendered
        with the job data passed as a prop.  */}
        {jobs &&
          jobs.map((job) => (
            <div key={job._id}>
              <JobTable job={job} />
            </div>
          ))}
      </ul>
    </div>
  );
}
