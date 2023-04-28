import React from 'react'
import homeImage from '../../img/Homeimage-min.jpg'
import codingImage from '../../img/coding-min.jpg'
export default function Introduction() {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
      <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-50">
            Our Mission
          </h2>
        </div>
        <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-50">
              Bringing change to the technology industry
            </h3>
            <p className="mt-3 text-lg dark:text-gray-400">
              Recruiting more women in technology doesn’t have to be complicated
              and our vision is to raise the standard within the technology and
              recruitment world.
            </p>
            <div className="mt-12 space-y-12">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-7 h-7"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium leading-6 dark:text-gray-50">
                    Diversity and Inclusion
                  </h4>
                  <p className="mt-2 dark:text-gray-400">
                    Increasing diversity and inclusion includes hiring a more
                    diverse workforce, promoting equal opportunities for all,
                    and creating an inclusive work culture that values different
                    perspectives and experiences.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-7 h-7"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium leading-6 dark:text-gray-50">
                    Prioritzing gender diversity
                  </h4>
                  <p className="mt-2 dark:text-gray-400">
                    Building strong partnerships with organisations and
                    communities to raise awareness of the importance of gender
                    diversity in the tech industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="mt-10 lg:mt-0">
            <img
              src={codingImage}
              alt="coding on laptop screen"
              className="mx-auto rounded-lg shadow-lg dark:bg-gray-500"
            />
          </div>
        </div>
        <div>
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div className="lg:col-start-2">
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-50">
                Opportunities for women in tech
              </h3>
              <p className="mt-3 text-lg dark:text-gray-400">
                Despite historically low representation in the industry, there
                are now more opportunities than ever for women in tech.
              </p>
              <div className="mt-12 space-y-12">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6 dark:text-gray-50">
                      Equal Representation
                    </h4>
                    <p className="mt-2 dark:text-gray-400">
                      We will help to promote women to leadership positions,
                      ensuring equal pay and benefits for women, and creating an
                      inclusive work culture that values and supports women's
                      contributions.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6 dark:text-gray-50">
                      Skills Development
                    </h4>
                    <p className="mt-2 dark:text-gray-400">
                      Providing a platform for women to connect with other women
                      in the industry and receive guidance and support from
                      experienced professionals. Offering training programs,
                      mentorship opportunities, and networking events to help
                      women gain the necessary skills and knowledge to succeed
                      in the industry.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6 dark:text-gray-50">
                      Support
                    </h4>
                    <p className="mt-2 dark:text-gray-400">
                      We have support networks and communities for women in
                      tech, advocating for policies and practices that promote
                      gender equality in the workplace, and raising awareness
                      about the importance of gender diversity in the industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
              <img
                src={homeImage}
                alt="three women with laptops"
                className="mx-auto rounded-lg shadow-lg dark:bg-gray-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
