import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
export default function LoginForm() {
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate('/userProfile');
      })
      .catch((error) => {
         const errorContainer = document.querySelector('#error-container');
         errorContainer.innerHTML = `
  <div class="text-xs font-semibold mb-5 text-red-500">Please input correct details</div>
`;
        console.log(error);
      });
  };
  return (
    <div className="bg-white md:border-2 md:border-gray-400 px-10 py-10  rounded-3xl">
      <h1 className="text-5xl font-semibold text-center">Login</h1>
      <p className="text-center font-medium text-lg text-gray-500 mt-4">
        Please enter your details.
      </p>
      <form onSubmit={signIn}>
        <div className="mt-8">
          <div>
            <label className="text-lg font-medium">Email</label>
            <input
              value={email}
              onChange={(text) => setEmail(text.target.value)}
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-2 bg-transparent"
              placeholder="Enter your email:"
            />
          </div>
          <div>
            <label className="text-lg font-medium">Password</label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-2 bg-transparent"
              placeholder="Enter your password:"
              type="password"
              value={password}
              onChange={(text) => setPassword(text.target.value)}
            />
          </div>
          <div id = "error-container"></div>
          <div className="mt-8 flex justify-between items-center">
            <div>
              <input type="checkbox" id="remember"></input>
              <label
                htmlFor="remember"
                className="ml-2 font font-medium text-base"
              >
                Remember for 30 days
              </label>
            </div>{' '}
            <button className=" ml-5 font-medium text-base text-violet-800">
              Forgot password
            </button>
          </div>
          <div className="mt-8 flex flex-col gap-y-4">
            <button
              type="submit"
              className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out bg-violet-800 text-white text-lg font-bold py-3 rounded-xl"
            >
              Sign in
            </button>
            <button>Sign in with Google</button>
          </div>
          <div className="mt-8 flex justify-center items-center">
            <p className="font-medium text-base">Dont have an account?</p>
            {/* <button className="text-violet-500 text-medium text-base ml-2">
            Sign up
          </button> */}
            <Link
              to="/signup"
              className="text-violet-800 text-medium text-base ml-2"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
