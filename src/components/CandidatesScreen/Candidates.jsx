import React from 'react';
import freecodeImg from '../../img/freecodecamp.png';
import womenintechImg from '../../img/WIT.png';
import CandidateInfo from './CandidateInfo';
import CodeAcad from '../../img/codeacad.png';
import LinkedIn from '../../img/linkedin.png';
import UKGOV from '../../img/UKGOV.png';
import UDEMY from '../../img/UDEMY.png';
import img from '../../img/team2.jpg';

export default function Candidates() {
  return (
    <div>
      <section className="bg-white py-5 mt-5 mb-5">
        <div className="mr-3 ml-3">
          <h2 className="mb-5 font-bold text-5xl ">CANDIDATES PAGE</h2>
          <p className="justify-center items-center">
            Hire Uz is dedicated to promoting diversity and inclusion in the
            workplace by connecting highly qualified female candidates with top
            companies. Let us help you find your next opportunity and join the
            growing community of women in tech. Contact us today to learn more
            about how we can help you reach your career goals.
          </p>
        </div>
      </section>
      <section>
        <div className="p-5 bg-gray-100">
          <h3 className="mb-5 font-bold text-4xl ">RESOURCES</h3>
          <p className="justify-center items-center">
            If you are looking to start your coding and tech journey, there are
            many resources available to help you get started. From online
            tutorials to coding bootcamps, there are many options to choose from
            depending on your learning style and goals.
          </p>
        </div>
      </section>
      <CandidateInfo
        name={'Women In Tech'}
        info={'Click the button to explore the different free coding courses.'}
        img={womenintechImg}
        website="https://www.womenintech.co.uk/"
      ></CandidateInfo>
      <CandidateInfo
        name={'Free Coding Camp'}
        info={
          'Click the button to visit the famous women in tech page to level up your knowledge'
        }
        img={freecodeImg}
        website="https://www.freecodecamp.org/"
      ></CandidateInfo>
      <CandidateInfo
        name={'Code Academy'}
        info={'Click the button to explore the different free coding courses.'}
        img={CodeAcad}
        website="https://www.codecademy.com/"
      ></CandidateInfo>
      <CandidateInfo
        name={'Udemy'}
        info={
          'Udemy is packed with free/cheap courses which can help you kickstart your career journey in tech'
        }
        img={UDEMY}
        website="https://www.udemy.com/"
      ></CandidateInfo>
      <CandidateInfo
        name={'LinkedIn Learning'}
        info={'Click the button to explore LinkedIn courses'}
        img={LinkedIn}
        website="https://www.linkedin.com/learning/"
      ></CandidateInfo>
      <CandidateInfo
        name={'UK Government'}
        info={
          'Click the button to explore the free courses funded by the government'
        }
        img={UKGOV}
        website="https://www.gov.uk/guidance/find-a-skills-bootcamp"
      ></CandidateInfo>
      <section className="py-20 text-center">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-8">
          <h2 className="mb-5 font-bold text-4xl md:text-5xl">CAREER PATHS </h2>
          <p className="mx-auto mt-3 max-w-xl text-md"></p>
          <div className="mt-12 grid grid-auto-fit gap-4">
            <div className="grid2-item py-8 px-8 bg-purple-200">
              <h3 className="font-semibold mb-4">Software Developer</h3>
              <p>
                This involves designing, developing, testing, and maintaining
                software systems and applications.
              </p>
            </div>
            <div className="grid2-item py-8 px-8 bg-purple-200">
              <h3 className="font-semibold mb-4">Data analyst/scientist</h3>
              <p>
                We focus on removing complexity and difficulties for both
                clients and candidates and take it upon ourselves.
              </p>
            </div>
            <div className="grid2-item py-8 px-8 bg-purple-200">
              <h3 className="font-semibold mb-4">Project manager</h3>
              <p>
                We are passionate about bridging the gender gap in the tech
                industry and believe that hiring more women in tech is the key
                to achieving this goal
              </p>
            </div>
            <div className="grid2-item py-8 px-8 bg-purple-200">
              <h3 className="font-semibold mb-4">UX/UI designer</h3>
              <p>
                We are passionate about bridging the gender gap in the tech
                industry and believe that hiring more women in tech is the key
                to achieving this goal
              </p>
            </div>
            <div className="grid2-item py-8 px-8 bg-purple-200">
              <h3 className="font-semibold mb-4">Cybersecurity specialist</h3>
              <p>
                This involves protecting computer systems and networks from
                cyber threats and attacks.
              </p>
            </div>
            <div className="grid2-item py-8 px-8 bg-purple-200">
              <h3 className="font-semibold mb-4">
                Artificial intelligence/machine learning engineer
              </h3>
              <p>
                This involves developing and implementing AI and machine
                learning algorithms to automate and optimize various processes
                and systems.
              </p>
            </div>
            <div className="grid2-item py-8 px-8 bg-purple-200">
              <h3 className="font-semibold mb-4">Cloud computing specialist</h3>
              <p>
                This involves managing and maintaining cloud-based systems and
                infrastructure.
              </p>
            </div>
            <div className="grid2-item py-8 px-8 bg-purple-200">
              <h3 className="font-semibold mb-4">Network administrator</h3>
              <p>
                This involves managing and maintaining computer networks,
                including troubleshooting issues and ensuring network security.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="justify-center py:4 lg:py-8 bg-purple-400 ">
        <div className=" justify-center py-2 mt-9 m-10 grid-auto-fit md:m-5 lg:grid lg:grid-cols-2 lg:gap-4 lg:m-20">
          <div className="justify-center text-center lg:py-4 lg:ml-8 lg:justify-end">
            <h2 className="mt-4 text-center font-semibold text-2xl md:text-2xl xl:text-4xl lg:text-left">
              Opportunities for career growth
            </h2>
            <div className="text-center justify-center">
              <p className="py-4  justify-center lg:text-left text-gray-700 max-w-lg md:max-w-xl">
                We understand that career growth is an essential component of
                job satisfaction, and we are dedicated to investing the time,
                effort, and resources necessary to provide opportunities for
                professional advancement.
              </p>

              <p className="py-4  justify-center lg:text-left text-gray-700 max-w-lg md:max-w-xl ">
                We work closely with our clients to identify roles that align
                with your skill sets, interests, and long-term career goals. We
                also offer training and mentoring programs to help women in tech
                acquire new skills and knowledge, stay up-to-date with the
                latest industry trends, and advance their careers.
              </p>
              <p className="py-4  justify-center lg:text-left text-gray-700 max-w-lg md:max-w-xl">
                We believe that by investing in the career growth of women, we
                not only support their personal and professional development but
                also contribute to creating a more diverse and inclusive tech
                industry.
              </p>
            </div>
          </div>
          <div className="flex justify-center mr-5 md:justify-center ">
            <img
              className="max-w-s ml-5 object-contain md:h-auto md:max-w-md lg:max-w-full lg:mr-5 lg:ml-5  "
              src={img}
              alt="woman with computer"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
