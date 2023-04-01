import React from 'react';
import Search from '../Search';
import JobTable from '../JobsScreen/JobTable';
import JobDetails from '../JobsScreen/JobDetails';
import JobTable2 from '../JobsScreen/JobTable2';
export default function Profie() {
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
      <JobTable2
        jobName={'Back end Developer'}
        employeeType={'Full Time'}
        datePosted={' 28th March, 2023'}
        salary={'£4000 - £45000'}
        location={' Ao.com Manchester, UK'}
      />
      <JobTable2
        jobName={'Security Specialist'}
        employeeType={'Full Time'}
        datePosted={' 28th March, 2023'}
        salary={'£4000 - £45000'}
        location={' Ao.com Manchester, UK'}
      />
      <JobTable2
        jobName={'Front end Developer'}
        employeeType={'Full Time'}
        datePosted={' 28th March, 2023'}
        salary={'£4000 - £45000'}
        location={' Ao.com Manchester, UK'}
      />
      <JobTable2
        jobName={'UX Designer'}
        employeeType={'Full Time'}
        datePosted={' 28th March, 2023'}
        salary={'£4000 - £45000'}
        location={' Ao.com Manchester, UK'}
      />
    </div>
  );
}
