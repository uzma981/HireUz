import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-white px-2 sm:px-4 py-2.5 rounded justify-end">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 justify-end">
          <div className="flex items-end justify-between h-16">
            <div className="flex items-end">
              <div className="flex-shrink-0 flex-row">
                {/* <img
                  className="h-8 w-8"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                  alt="Workflow"
                /> */}
                <h1 className=" w-full text-3xl font-bold text-purple-700 ">
                  <Link to="/">HireUz</Link>
                </h1>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    to="/about"
                    className="text-gray-500 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
                  >
                    About
                  </Link>

                  <Link
                    to="/guides"
                    className="text-gray-500 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Guides
                  </Link>
                  <Link
                    to="/careers"
                    className="text-gray-500 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Careers
                  </Link>
                  <Link
                    to="/clients"
                    className="text-gray-500 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Clients
                  </Link>
                  <Link
                    to="/login"
                    className="text-purple-600 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Login
                  </Link>

                  <Link
                    to="/signup"
                    className="text-purple-600 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Sign Up
                  </Link>
                  <button
                    type="button"
                    className="text-white bg-purple-500 hover:bg-purple-900 focus:ring-4 focus:outline-none focus:ring-purple-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
                  >
                    Drop your CV
                  </button>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className=" inline-flex items-center justify-center p-2 rounded-md text-purple-500 hover:text-white hover:bg-purple-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-200 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div
                ref={(ref) => (ref ? ref : null)}
                className="px-2 pt-2 pb-3 space-y-1 sm:px-3"
              >
                <Link
                  to="/about"
                  className="text-center  hover:bg-purple-700 hover:text-white text-gray-500 block px-3 py-2 rounded-md text-base font-medium"
                >
                  About
                </Link>

                <Link
                  to="/guides"
                  className="text-center  hover:bg-purple-700 hover:text-white text-gray-500 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Guides
                </Link>

                <Link
                  to="/careers"
                  className="text-center  hover:bg-purple-700 hover:text-white text-gray-500 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Careers
                </Link>

                <Link
                  to="/clients"
                  className="text-center  hover:bg-purple-700 hover:text-white text-gray-500 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Clients
                </Link>

                <Link
                  to="/login"
                  className="text-center text-purple-600 hover:bg-purple-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="text-center text-purple-600 hover:bg-purple-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default NavBar;
