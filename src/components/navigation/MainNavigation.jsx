import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../HomeScreen/Home';
import About from '../AboutUsScreen/About';
import Candidates from '../CandidatesScreen/Candidates';
import Clients from '../ClientsScreen/Clients';
import ApplyNow from '../JobsScreen/ApplyScreen/ApplyNow';
import Blogs from '../BlogsScreen/Blogs';
import Jobs from '../JobsScreen/Jobs';
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
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/userProfile" element={<Profile />}></Route>
        <Route path="/jobs" element={<Jobs />}></Route> 
        {/* This allows the user to view a job details page and then apply to the
        job using a separate page, which is linked by the job-apply path. */}
        <Route path="/jobs/:jobId" element={<JobDetails />} />
        <Route path="/jobs/:jobId/job-apply" element={<ApplyNow />} />
      </Routes>
    </Router>
  );
}
export default MainNavigation;
