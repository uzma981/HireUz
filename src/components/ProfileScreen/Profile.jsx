import React from 'react';
import Search from '../Search';
import JobTable from '../JobsScreen/JobTableNIU';
import JobDetails from '../JobsScreen/JobDetails';
import JobTable2 from '../JobsScreen/JobTable2';
import axios from 'axios';
import { useState, useEffect } from 'react';
export default function Profile() {
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
      <Search></Search>
      <ul>
        {jobs &&
          jobs.map((job) => (
            <div key={job._id}>
              <JobTable2 job={job} />
            </div>
          ))}
      </ul>
    </div>
  );
}
