import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const config = {
  apiKey: "AIzaSyB9Lyl0EH6Gr_JAP-YNCHKHSiOaUP0s6dQ",
  projectId: "hireuz-auth-dev.firebaseapp.com",
  authDomain: "hireuz-auth-dev",

  storageBucket: "hireuz-auth-dev.appspot.com",
  messagingSenderId: "608083417677",
  appId: "1:608083417677:web:54bdb3ecdbe1441d8fda04",
  measurementId: "G-1WGWQWD8EV",
};

const app = initializeApp(config);

export const auth = getAuth(app);
