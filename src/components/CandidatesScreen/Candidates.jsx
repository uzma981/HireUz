import React from 'react';
import freecodeImg from '../../img/freecodecamp.png';
import womenintechImg from '../../img/WIT.png';
import CandidateInfo from './CandidateInfo';
import CodeAcad from '../../img/codeacad.png';
import LinkedIn from '../../img/linkedin.png';
import UKGOV from '../../img/UKGOV.png';
import UDEMY from '../../img/UDEMY.png';
import img from '../../img/team2.jpg';
import Footer from '../Footer';
import {
  ArrowPathIcon,
 ComputerDesktopIcon,
  AcademicCapIcon,
  WrenchIcon,
  UserIcon
  
} from '@heroicons/react/24/outline';
export default function Candidates() {
  const features = [
    {
      name: 'Mentorship and Career coaching',
      description:
        'We offer training and mentoring programs to help women in tech acquire new skills and knowledge, stay up-to-date with the latest industry trend, and advance their careers.',
      icon: AcademicCapIcon,
    },
    {
      name: 'Professional development resources and training',
      description:
        'We equip you with the necessary training and knowledge to succeed in the technology industry. ',
      icon: WrenchIcon,
    },
    {
      name: 'Work on innovative projects and cutting-edge technologies',
      description:
        'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
      icon: ComputerDesktopIcon,
    },
    {
      name: 'Leadership and management roles within the industry',
      description:
        'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
      icon: UserIcon,
    },
  ];
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
        alt={'women in tech image'}
        website="https://www.womenintech.co.uk/"
      ></CandidateInfo>
      <CandidateInfo
        name={'Free Coding Camp'}
        info={
          'Click the button to visit the famous women in tech page to level up your knowledge'
        }
        img={freecodeImg}
        alt={'free code camp image'}
        website="https://www.freecodecamp.org/"
      ></CandidateInfo>
      <CandidateInfo
        name={'Code Academy'}
        info={'Click the button to explore the different free coding courses.'}
        img={CodeAcad}
        alt={'code academy image'}
        website="https://www.codecademy.com/"
      ></CandidateInfo>
      <CandidateInfo
        name={'Udemy'}
        info={
          'Udemy is packed with free/cheap courses which can help you kickstart your career journey in tech'
        }
        img={UDEMY}
        alt={'UDEMY image'}
        website="https://www.udemy.com/"
      ></CandidateInfo>
      <CandidateInfo
        name={'LinkedIn Learning'}
        info={'Click the button to explore LinkedIn courses'}
        img={LinkedIn}
        alt={'LinkedIn image'}
        website="https://www.linkedin.com/learning/"
      ></CandidateInfo>
      <CandidateInfo
        name={'UK Government'}
        info={
          'Click the button to explore the free courses funded by the government'
        }
        img={UKGOV}
        alt={'UK GOV image'}
        website="https://www.gov.uk/guidance/find-a-skills-bootcamp"
      ></CandidateInfo>
      <section className="py-20 text-center">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-8">
          <h2 className="mb-5 font-bold text-4xl md:text-5xl">CAREER PATHS </h2>
          <p className="mx-auto mt-3 max-w-xl text-md"></p>
          <div className="mt-12 grid grid-auto-fit gap-4">
            <div className="grid2-item py-8 px-8 border-2 border-black bg-gray-200">
              <h3 className="font-semibold mb-4">Software Developer</h3>
              <p>
                This involves designing, developing, testing, and maintaining
                software systems and applications.
              </p>
            </div>
            <div
              role="info"
              className="grid2-item py-8 px-8 border-2 border-black bg-gray-200"
            >
              <h3 className="font-semibold mb-4">Data analyst/scientist</h3>
              <p>
                A data analyst is responsible for collecting, processing, and
                performing statistical analyses on large datasets.
              </p>
            </div>
            <div className="grid2-item py-8 px-8 border-2 border-black bg-gray-200">
              <h3 className="font-semibold mb-4">Project manager</h3>
              <p>
                Responsible for ensuring projects are completed on time, within
                budget, and to a high standard of quality, while also managing
                risks and communicating with stakeholders.
              </p>
            </div>
            <div className="grid2-item py-8 px-8 border-2 border-black bg-gray-200">
              <h3 className="font-semibold mb-4">UX/UI designer</h3>
              <p>
                Responsible for creating intuitive and visually appealing
                interfaces for digital products, with a focus on enhancing the
                user experience.
              </p>
            </div>
            <div className="grid2-item py-8 px-8 border-2 border-black bg-gray-200">
              <h3 className="font-semibold mb-4">Cybersecurity specialist</h3>
              <p>
                This involves protecting computer systems and networks from
                cyber threats and attacks.
              </p>
            </div>
            <div className="grid2-item py-8 px-8 border-2 border-black bg-gray-200">
              <h3 className="font-semibold mb-4">
                Artificial intelligence/machine learning engineer
              </h3>
              <p>
                This involves developing and implementing AI and machine
                learning algorithms to automate and optimize various processes
                and systems.
              </p>
            </div>
            <div className="grid2-item py-8 px-8 border-2 border-black bg-gray-200">
              <h3 className="font-semibold mb-4">Cloud computing specialist</h3>
              <p>
                This involves managing and maintaining cloud-based systems and
                infrastructure.
              </p>
            </div>
            <div className="grid2-item py-8 px-8 border-2 border-black bg-gray-200">
              <h3 className="font-semibold mb-4">Network administrator</h3>
              <p>
                This involves managing and maintaining computer networks,
                including troubleshooting issues and ensuring network security.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gray-100 py-24 sm:py-15">
        <div className="mx-auto max-w-7xl px-6 lg:px-2">
          <div className="mx-auto max-w-2xl lg:text-center">
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              OPPORTUNITIES FOR CAREER GROWTH
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We understand that career growth is an essential component of job
              satisfaction, and we are dedicated to investing the time, effort,
              and resources necessary to provide opportunities for professional
              advancement.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-800">
                      <feature.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
