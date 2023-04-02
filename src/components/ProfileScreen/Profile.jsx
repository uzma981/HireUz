import React from 'react';
import Search from '../Search';
import JobTable from '../JobsScreen/JobTableNIU';
import JobDetails from '../JobsScreen/JobDetails';
import JobTable2 from '../JobsScreen/JobTable2';
import axios from 'axios';
import { useState, useEffect } from 'react';
export default function Profie() {
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
      {/* <JobTable/> */}
      {/* <JobDetails
        jobName={'Back-end developer'}
        employeeType={'Full Time'}
        location={' Ao.com Manchester, UK'}
        salary={'£4000 - £45000'}
        datePosted={' 28th March, 2023'}
        jobDescription1={
          ' One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others - which creates a distinct visual impression. Moreover, in Latin only words at the beginning of sentences are capitalized.'
        }
        jobDescription2={
          'This means that Lorem Ipsum cannot accurately represent, forexample, German, in which all nouns are capitalized. Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts. If the fill text is intended to illustrate the characteristics of different typefaces.'
        }
        jobDescription3={
          'It sometimes makes sense to select texts containing the various letters and symbols specific to the output language.'
        }
        jobDuties1={
          '  It sometimes makes sense to select texts containing the various letters and symbols specific to the output language.'
        }
        jobDuties2={'  Participate in requirements analysis'}
        jobDuties3={'Write clean, scalable code using C# and .NET frameworks'}
        jobDuties4={'Test and deploy applications and systems'}
        jobExp1={'  Improve existing software'}
        jobExp2={
          'Serve as an expert on applications and provide technical support'
        }
        jobExp3={
          'Experience designing, developing and creating RESTful web services and APIs'
        }
        jobExp4={'Basic know how of Agile process and practices'}
      /> */}

      <ul>
        {jobs &&
          jobs.map((job) => (
            <div key={job._id}>
              <JobTable2
                jobName={job.jobTitle}
                employeeType={job.employeeType}
                datePosted={job.datePosted}
                salary={job.salary}
                location={job.location}
              />
            </div>
          ))}
      </ul>
    </div>
  );
}
