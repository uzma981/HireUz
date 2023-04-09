import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function HomeNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="justify-center">
        <div className="sm:hidden justify-center ">
          <div className="dropdown dropdown-right">
            <label tabIndex={0} className="btn m-1">
              Click
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <ul
        className="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400"
        id="fullWidthTab"
        data-tabs-toggle="#fullWidthTabContent"
        role="tablist"
      >
        <li className="w-full">
          <Link
            to={`/userProfile`}
            className="inline-block w-full p-4 bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600"
          >
            Profile
          </Link>
        </li>
        <li className="w-full">
          <Link
            to={`/jobs`}
            className="inline-block w-full p-4 bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600"
          >
            Jobs
          </Link>
        </li>
        <li className="w-full">
          <Link
            to={`/savedJobs`}
            className="inline-block w-full p-4 rounded-tr-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600"
          >
            Saved Jobs
          </Link>
        </li>
      </ul>
    </div>
  );
}
