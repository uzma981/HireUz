import React from 'react';
import team1 from '../../img/team1.jpg';
import Recruiter from '../Recruiter';
import team3 from '../../img/team3.jpg';
import team4 from '../../img/team4.jpg';
import team6 from '../../img/team6.jpg';
export default function Team() {
  return (
    <div className="container my-24 px-6 mx-auto">
      <section className="mb-32 text-gray-800 text-center">
        <h2 className="uppercase text-3xl md:text-4xl font-bold mb-12">
          Meet the <u className="text-purple-800">team</u>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 lg:gap-xl-12">
          <Recruiter
            img={team1}
            name={'Alan Turing'}
            description={'Senior Talent Acquisition Partner'}
          ></Recruiter>
          <Recruiter
            img={team3}
            name={'Anna Baker'}
            description={'Recruitment Specialist'}
          ></Recruiter>
          <Recruiter
            img={team4}
            name={'Jane Brooke'}
            description={'Recruitment Specialist'}
          ></Recruiter>
          <Recruiter
            img={team6}
            name={'Sam Lee'}
            description={'Recruitment Specialist'}
          ></Recruiter>
        </div>
      </section>
    </div>
  );
}
