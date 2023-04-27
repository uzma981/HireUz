import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../inc/firebase';

export default function NavBar2() {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  //sets up an authentication listener using Firebase auth.onAuthStateChanged(), which is called every time the user's authentication state changes.
  // If the user is authenticated, it sets the loggedIn state to true,
  // and if they are not authenticated, it sets it to false.
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    });
    return unsubscribe;
  }, []);

  //Function is triggered when a user clicks on a logout button. 
  //Uses the signOut method from Firebase's authentication API to sign the user out.
 
  const handleLogout = (e) => {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        console.log('User has signed out');
        //If the sign-out is successful, it logs a message to the console and navigates the user to the login page
        navigate('/login');
      })
      .catch((error) => {
        // If there is an error during the sign-out process, it logs an error message to the console.
        console.error('Error signing out:', error);
      });
  };
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
              <Link to="/blogs" className="text-gray-500">
                Blogs
              </Link>
            </li>
            <li>
              {loggedIn ? (
                <Link to="/userProfile" className="text-purple-500">
                  Dashboard
                </Link>
              ) : null}
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
            <Link to="/blogs" className="text-gray-300">
              Blogs
            </Link>
          </li>
          <li>
            {loggedIn ? (
              <Link to="/userProfile" className="text-gray-300">
                Dashboard
              </Link>
            ) : null}
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {/* //if the user is logged in, a "Dashboard" link is also shown. On the
        right side of the navbar, there is a "Logout" button if the user is
        logged in, and a "Login" button if the user is not logged in.*/}
        {loggedIn ? (
          <a
            href="/"
            onClick={handleLogout}
            className="btn bg-gray-500 hover:bg-gray-800 px-5 font-medium mr-3"
          >
            Logout
          </a> //  The "Logout" button triggers the handleLogout function when clicked, which signs the user out and redirects to the login page. 
        ) : (
          <Link
            to="/login"
            className="btn bg-purple-500 hover:bg-purple-900 px-5 font-medium mr-3"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
}
