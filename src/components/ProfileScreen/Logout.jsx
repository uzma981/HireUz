import { auth } from '../../inc/firebase';
import { signOut } from 'firebase/auth';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
export default function Logout() {
  const navigate = useNavigate();
  const logout = (e) => {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        console.log('User has signed out');
        navigate('/login');
      })
      .catch((error) => {
        console.error('Error signing out:', error);
      });
  };

  return (
    <div className="items-end">
      <a
        href="/"
        onClick={logout}
        className="btn rounded-md bg-gray-500 hover:bg-gray-800 border-gray-500 hover:border-gray-800 text-white ltr:md:ml-2 rtl:md:mr-2 w-full md:w-auto"
      >
        Logout
      </a>
    </div>
  );
}
