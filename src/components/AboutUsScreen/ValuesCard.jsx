import React from 'react';

export default function ValuesCard({ valueName, valueText }) {
  return (
    <div className="grid2-item card bg-base-100 shadow-xl image-full ">
      {/* <figure>
        <img src="src\img\bgimg.jpg" alt="bg-image" />
      </figure> */}
      <div className="card-body">
        <h2 className="card-title">{valueName}</h2>
        <p>{valueText}</p>
        {/* <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div> */}
      </div>
    </div>
  );
}
