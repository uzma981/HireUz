import React from 'react';

import JobTable from './JobTable';
import axios from 'axios';
import { useState, useEffect } from 'react';
import HomeNavbar from '../navigation/HomeNavbar';
import Search from '../ProfileScreen/Search';

export default function Jobs() {
  const [jobs, setJobs] = useState(null);

  const getJobs = async () => {
    try {
      const response = await axios.get('http://localhost:3000/jobs');
      const data = response.data;
      setJobs(data);
      console.log(data);
      return data;
    } catch (error) {
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
