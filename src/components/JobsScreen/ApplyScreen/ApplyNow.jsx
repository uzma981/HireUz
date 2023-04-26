import React, { useState } from 'react';
import FormDescription from '../FormDescriptionNIU';
import { useParams } from 'react-router-dom';

function ApplyNow() {
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNum, setphoneNum] = useState('');
  const [questionOne, setquestionOne] = useState('');
  const [questionTwo, setquestionTwo] = useState('');
  const [CV, setCV] = useState(null);
  const [coverLetter, setcoverLetter] = useState(null);
  const { jobId } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const candidate = { firstName, lastName, email, phoneNum };
    const applicationQs = { questionOne, questionTwo };
    const response = await fetch('http://localhost:3000/applications', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        jobId,
        candidate,
        applicationQs,
        CV,
        coverLetter,
      }),
    });
    if (response.status === 201) {
      console.log('candidate sucessfully added');
      const formContainer = document.querySelector('#form-container');
      formContainer.innerHTML = `
  <div class="text-2xl font-semibold mb-5 text-gray-400">Thank you for applying. We have received your application and will be in touch soon!</div>
`;
      const h2container = document.querySelector('#h2-container');
      h2container.innerHTML = `
  <div class="ml-5 uppercase text-3xl font-semibold mb-5 text-black md:ml-0">Application received</div>
`;
    }
    const data = await response.json();
    console.log(data);
  };

  return (
    <div>
      <section className="flex bg-white py-4 mt-5 items-center justify-center">
    
          <h2 id="h2-container" className=" font-bold text-4xl md:text-5xl ">
            Application Form
          </h2>
      
      </section>
      <div className="flex items-center justify-center">
        <form onSubmit={handleSubmit} id="form-container">
          <div className="w-full px-8">
            <div className="xl:px-24">
              <div className="px-5 py-4 bg-gray-200 rounded-lg flex items-center justify-between mt-7">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19 9.99999H20C20.2652 9.99999 20.5196 10.1054 20.7071 10.2929C20.8946 10.4804 21 10.7348 21 11V21C21 21.2652 20.8946 21.5196 20.7071 21.7071C20.5196 21.8946 20.2652 22 20 22H4C3.73478 22 3.48043 21.8946 3.29289 21.7071C3.10536 21.5196 3 21.2652 3 21V11C3 10.7348 3.10536 10.4804 3.29289 10.2929C3.48043 10.1054 3.73478 9.99999 4 9.99999H5V8.99999C5 8.08074 5.18106 7.17049 5.53284 6.32121C5.88463 5.47193 6.40024 4.70026 7.05025 4.05025C7.70026 3.40023 8.47194 2.88462 9.32122 2.53284C10.1705 2.18105 11.0807 1.99999 12 1.99999C12.9193 1.99999 13.8295 2.18105 14.6788 2.53284C15.5281 2.88462 16.2997 3.40023 16.9497 4.05025C17.5998 4.70026 18.1154 5.47193 18.4672 6.32121C18.8189 7.17049 19 8.08074 19 8.99999V9.99999ZM17 9.99999V8.99999C17 7.67391 16.4732 6.40214 15.5355 5.46446C14.5979 4.52678 13.3261 3.99999 12 3.99999C10.6739 3.99999 9.40215 4.52678 8.46447 5.46446C7.52678 6.40214 7 7.67391 7 8.99999V9.99999H17ZM11 14V18H13V14H11Z"
                        fill="#4B5563"
                      />
                    </svg>
                  </div>

                  <p className="text-sm text-gray-800 pl-3">
                    We take privacy issues seriously. You can be sure that your
                    personal data is securely protected.
                  </p>
                </div>
                <button className="md:block hidden focus:outline-none focus:ring-2 focus:ring-gray-700 rounded">
                  <svg
                    aria-label="Close this banner"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.8337 5.34166L14.6587 4.16666L10.0003 8.825L5.34199 4.16666L4.16699 5.34166L8.82533 10L4.16699 14.6583L5.34199 15.8333L10.0003 11.175L14.6587 15.8333L15.8337 14.6583L11.1753 10L15.8337 5.34166Z"
                      fill="#79808F"
                    />
                  </svg>
                </button>
              </div>

              <div className="mt-16 lg:flex justify-between border-b border-gray-200 pb-8">
                <div className="w-80">
                  <div className="flex items-center">
                    <h1 className="text-xl font-medium pr-2 leading-5 text-gray-800">
                      Personal Information
                    </h1>
                  </div>
                  <p className="mt-4 text-sm leading-5 text-gray-600">
                    Information about the section could go here and a brief
                    description of how this might be used.
                  </p>
                </div>
                <div>
                  <div className="md:flex items-center lg:ml-24 lg:mt-0 mt-4">
                    <div className="md:w-64">
                      <label
                        className="text-sm leading-none text-gray-800"
                        id="firstName"
                      >
                        First name
                      </label>
                      <input
                        type="name"
                        tabIndex="0"
                        onChange={(e) => setfirstName(e.target.value)}
                        className="w-full p-3 mt-3 bg-gray-50 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                        aria-labelledby="firstName"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                      <label
                        className="text-sm leading-none text-gray-800"
                        id="lastName"
                      >
                        Last name
                      </label>
                      <input
                        type="name"
                        tabIndex="0"
                        className="w-full p-3 mt-3 bg-gray-50 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                        aria-labelledby="lastName"
                        placeholder="Last Name"
                        onChange={(e) => setlastName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="md:flex items-center lg:ml-24 mt-8">
                    <div className="md:w-64">
                      <label
                        className="text-sm leading-none text-gray-800"
                        id="emailAddress"
                      >
                        Email address
                      </label>
                      <input
                        type="email"
                        tabIndex="0"
                        className="w-full p-3 mt-3 bg-gray-50 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                        aria-labelledby="emailAddress"
                        placeholder="youremail@example.com"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                      <label
                        className="text-sm leading-none text-gray-800"
                        id="phone"
                      >
                        Phone number
                      </label>
                      <input
                        type="name"
                        tabIndex="0"
                        className="w-full p-3 mt-3 bg-gray-50 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                        aria-labelledby="phone"
                        placeholder="+44"
                        onChange={(e) => setphoneNum(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <section className="text-gray-700 body-font relative md:items-start">
                <div className="container mx-auto flex sm:flex-nowrap flex-wrap">
                  <div className=" bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                    <div className="relative mb-4">
                      <label
                        htmlFor="message"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Tell me about yourself (Max 500 words)
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        onChange={(e) => setquestionOne(e.target.value)}
                        className="w-full bg-white rounded border border-gray-400 focus:border-purple-700 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      ></textarea>
                    </div>
                    <div className="relative mb-4">
                      <label
                        htmlFor="message"
                        className="leading-7 text-sm text-gray-600"
                      >
                        What motivates you to apply to this job role? (Max 200
                        words)
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        onChange={(e) => setquestionTwo(e.target.value)}
                        className="w-full bg-white rounded border border-gray-400 focus:border-purple-700 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="flex flex-col justify-center mt-5 md:flex-row">
              <div className="mb-3 w-full md:w-96">
                <label
                  htmlFor="formFile"
                  className="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
                >
                  Upload your CV:
                </label>
                <input
                  className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding py-[0.32rem] px-3 text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[margin-inline-end:0.75rem] file:[border-inline-end-width:1px] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-[0_0_0_1px] focus:shadow-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100"
                  type="file"
                  id="formFile"
                  onChange={(e) => setCV(e.target.value)}
                />
              </div>
              <div className="mb-3 w-full md:ml-5 md:w-96">
                <label
                  htmlFor="formFile"
                  className="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
                >
                  Upload your Cover letter (optional):
                </label>
                <input
                  className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding py-[0.32rem] px-3 text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[margin-inline-end:0.75rem] file:[border-inline-end-width:1px] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-[0_0_0_1px] focus:shadow-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100"
                  type="file"
                  id="formFile"
                  onChange={(e) => setcoverLetter(e.target.value)}
                />
              </div>
            </div>
          </div>{' '}
          <div className="flex items-center justify-center w-full px-7 md:justify-center ">
            <button
              placeholder="submit"
              type="submit"
              onClick={handleSubmit}
              className="mt-5 bg-purple-700 rounded hover:bg-purple-600 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-white lg:max-w-[144px] w-full md:text-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>{' '}
    </div>
  );
}

export default ApplyNow;
