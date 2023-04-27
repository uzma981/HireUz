import React from 'react';

export default function CandidateInfo({ name, info, img, website, alt }) {
  return (
    <div className="m-5 md:m-10">
      <div className="card lg:card-side bg-base-100 shadow-xl ">
        <figure>
          <img src={img} alt={alt} />
        </figure>
        <div className="card-body">
          <h2 className=" uppercase card-title">{name}</h2>
          <p>{info}</p>
          <div className="card-actions justify-end">
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-purple-700"
            >
              Visit Page
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
