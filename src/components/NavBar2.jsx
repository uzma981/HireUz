import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
export default function NavBar2() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="navbar  bg-black">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="text-white btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-white"
          >
            <li>
              <Link to="/about" className="text-gray-500">
                About
              </Link>
            </li>

            <li>
              <Link to="/candidates" className="text-gray-500">
                Candidates
              </Link>
            </li>
            <li>
              <Link to="/clients" className="text-gray-500">
                Clients
              </Link>
            </li>
            <li>
              <Link to="/careers" className="text-gray-500">
                Careers
              </Link>
            </li>
            <li>
              <Link to="/login" className="text-gray-500">
                Login
              </Link>
            </li>
            <li>
              <Link to="/signup" className="text-gray-500">
                Sign Up
              </Link>
            </li>
          </ul>
        </div>

        <Link className="btn btn-ghost normal-case text-xl text-white" to="/">
          HireUz
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/about" className="text-gray-300">
              About
            </Link>
          </li>

          <li>
            <Link to="/candidates" className="text-gray-300">
              Candidates
            </Link>
          </li>
          <li>
            <Link to="/clients" className="text-gray-300">
              Clients
            </Link>
          </li>
          <li>
            <Link to="/careers" className="text-gray-300">
              Careers
            </Link>
          </li>
          <li>
            <Link to="/login" className="text-gray-300">
              Login
            </Link>
          </li>
          <li>
            <Link to="/signup" className="text-gray-300">
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-purple-500 hover:bg-purple-900 font-medium mr-3">
          Drop your CV
        </a>
      </div>
    </div>
  );
}
