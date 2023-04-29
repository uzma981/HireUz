import React from 'react';
import { useState } from 'react';
import Footer from '../Footer';
export default function Clients() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3000/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, phone, message }),
    });
    if (response.status === 201) {
      const formContainer = document.querySelector('#form-container');
      formContainer.innerHTML = `
  <div class="text-3xl font-semibold mb-5 text-white">Thank you for registering! We are looking forward to working with you soon.</div>
`;
    }
    else if (response.status === 400){
       const errorContainer = document.querySelector('#error-message');
      errorContainer.innerHTML = `
 <div id = "error-message" class="text-red-500"> Missing fields. Please try again!
               </div>
`;
    }
    const data = await response.json();
    console.log(data);
    
    
      
  };
  return (
    <div className="">
      <section className="bg-white py-5 mt-5 mb-5">
        <div className="mr-3 ml-3">
          <h2 className="mb-5 font-bold text-5xl ">CLIENTS PAGE</h2>
          <p className="justify-center items-center">
            At Hire Uz, we are committed to promoting diversity and inclusion in
            the workplace. As a recruitment agency, we understand the importance
            of building a team that reflects the diverse communities we serve is
            crucial for success. That's why we are dedicated to helping you find
            and hire talented women who can bring a fresh perspective and unique
            skills to your organization. Contact us today to learn more about
            our recruitment services and how we can help you achieve your hiring
            goals.
          </p>
        </div>
      </section>
      <section className="bg-gray-200 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold mb-4 text-center">
            RECRUITMENT SOLUTIONS
          </h1>
          <p className="mb-4 text-center">
            We offer recruitment solutions for hiring more women in tech.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg shadow p-6 transform hover:-translate-y-1 transition-all duration-300">
              <h2 className="text-lg font-bold mb-2">Candidate Sourcing</h2>
              <p>
                We use a variety of sourcing methods, such as job boards, social
                media, and referrals, to identify and attract female candidates
                in the technology industry.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 transform hover:-translate-y-1 transition-all duration-300">
              <h2 className="text-lg font-bold mb-2">Skills assessments</h2>
              <p>
                We administer skills assessments and provide training to ensure
                that candidates have the necessary technical skills for the job.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 transform hover:-translate-y-1 transition-all duration-300">
              <h2 className="text-lg font-bold mb-2">
                Talent pipeline development
              </h2>
              <p>
                We work with clients to develop a long-term talent pipeline that
                includes outreach to women's groups and organizations, as well
                as targeted advertising and recruitment campaigns.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-black py-10 md:px-10 md:py-10 ">
        <section className="mt-5 mb-5 ">
          <div className="mr-3 ml-3 flex flex-col md:flex-row md:items-center">
            <div className="md:w-1/2 md:pr-10">
              <h2 className=" text-3xl text-white md:text-4xl lg:text-5xl">
                Ready to work with us?
              </h2>
              <h1 className="mt-2 mb-4 text-purple-300 text-4xl md:text-5xl lg:text-6xl">
                LETS TALK!
              </h1>
              <p className="text-white">
                Please note that for your privacy no data from this form is
                stored in this website, beyond the legitimate interest period.
              </p>
              <p className="text-white mb-2 mt-2">View our privacy policy</p>
            </div>
            <div className="md:w-1/2">
              <form onSubmit={handleSubmit} id="form-container">
                <input
                  id="client_name"
                  name="client_name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name*"
                  type="text"
                  className="w-full mb-5 py-2 bg-transparent text-white "
                ></input>
                <input
                  id="client_email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  placeholder="Email*"
                  type="text"
                  className="w-full py-2 mb-5 bg-transparent text-white "
                ></input>
                <input
                  id="client_phone"
                  name="Phone*"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone*"
                  type="text"
                  className="w-full py-2 mb-5 bg-transparent text-white "
                ></input>
                <div className="">
                  <label className="items-end text-gray-300">
                    How can we help?
                  </label>
                  <textarea
                    id="client_message"
                    className="bg-gray-300 w-full py-10 text-black"
                    name="message"
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    title="message"
                  ></textarea>
                </div>
                <div id = "error-message">
                </div>
                <button
                  className="text-white mt-5 ml-5 items-center border-4 px-10 md:px-20 md:ml-0 "
                  placeholder="submit"
                  name="submit"
                  title="submit"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
