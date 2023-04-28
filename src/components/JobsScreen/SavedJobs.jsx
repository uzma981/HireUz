import React from 'react';

import SavedJobTable from './SavedJobTable';
import axios from 'axios';
import { useState, useEffect } from 'react';
import HomeNavbar from '../navigation/HomeNavbar';
import Search from '../ProfileScreen/Search';

export default function SavedJobs() {
  const [jobs, setJobs] = useState(null);

  const getSavedJobs = async () => {
    try {
      const response = await axios.get('http://localhost:3000/saveJob');
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
    getSavedJobs();
  }, []);
  return (
    <div>
      <HomeNavbar />
      <ul>
        {jobs &&
          jobs.map((job) => (
            <div key={job._id}>
              <SavedJobTable job={job} />
            </div>
          ))}
      </ul>
    </div>
  );
}
