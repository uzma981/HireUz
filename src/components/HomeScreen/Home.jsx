import React from 'react';

export default function Home() {
  return (
    <div className="">
      <div className="p-10 bg-black m-5">
        <h1 className="text-white">We are HireUz.</h1>
      </div>
      <div className="p-10 bg-gray-300">
        <div className="m-5 p-4 rounded-xl bg-purple-900 md:p-4 lg:p-5">
          <h2 className="mr-5 ml-5 text-white font-bold text-2xl md:text-4xl  ">
            Bringing change to the technology industry
          </h2>
          <p className="text-gray-300 text-lg mr-5 ml-5 mt-5 md:text-xl">
            Recruiting more women in technology rules doesn’t have to be
            complicated and our vision is to raise the standard within the
            technology and recruitment world.
          </p>
        </div>
        <div className="m-5 p-4 rounded-xl bg-purple-900 md:p-6 lg:p-5">
          <h2 className="mr-5 ml-5 text-white font-bold text-2xl md:text-4xl  ">
            Mentorship and Networking opportunities for women in tech
          </h2>
          <p className="text-gray-300 text-lg mr-5 ml-5 mt-5 md:text-xl">
            Providing a platform for women to connect with other women in the
            industry and receive guidance and support from experienced
            professionals
          </p>
        </div>
        <div className="m-5 p-4 rounded-xl bg-purple-900 md:p-6 lg:p-5">
          <h2 className="mr-5 ml-5 text-white font-bold text-2xl md:text-4xl  ">
            Prioritizing gender diversity in the tech industry
          </h2>
          <p className="text-gray-300 text-lg mr-5 ml-5 mt-5 md:text-xl">
            Building strong partnerships with organisations and communities to
            raise awareness of the importance of gender diversity in the tech
            industry.
          </p>
        </div>
      </div>{' '}
    </div>
  );
}
