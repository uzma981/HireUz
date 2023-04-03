import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../HomeScreen/Home';
import About from '../AboutUsScreen/About';
import Candidates from '../CandidatesScreen/Candidates';
import Clients from '../ClientsScreen/Clients';

import Careers from '../CareersScreen/Careers';

import Login from '../Login';
import SignUp from '../SignUp';
import Navbar2 from './NavBar2';
import JobDetails from '../JobsScreen/JobDetails';
import Profile from '../ProfileScreen/Profile';
function MainNavigation() {
  return (
    <Router>
      <Navbar2 />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/candidates" element={<Candidates />}></Route>
        <Route path="/clients" element={<Clients />}></Route>

        <Route path="/careers" element={<Careers />}></Route>

        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/userProfile" element={<Profile />}></Route>
        <Route path="/userProfile/jobDetails/:jobId" element={<JobDetails />} />
        {/* <Route path="/userProfile" element={<Profile />}>
          <Route path="/userProfile/Jobs" element={<Jobs />}></Route>
        </Route> */}
      </Routes>
    </Router>
  );
}

export default MainNavigation;
