import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Careers from "./components/Careers";
import Guides from "./components/Guides";
import Clients from "./components/Clients";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/clients" element={<Clients />}></Route>
        <Route path="/guides" element={<Guides />}></Route>
        <Route path="/careers" element={<Careers />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
