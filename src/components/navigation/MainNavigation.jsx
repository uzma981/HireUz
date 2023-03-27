import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Home';
import About from '../About';
import Candidates from '../Candidates';
import Clients from '../Clients';
import Guides from '../Guides';
import Careers from '../Careers';
import Contact from '../Contact';
import Login from '../Login';
import SignUp from '../SignUp';
import Navbar2 from '../NavBar2';
import Profile from '../Home/Profile';
import Jobs from '../Home/Jobs';
function MainNavigation() {
  return (
    <Router>
      <Navbar2 />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/candidates" element={<Candidates />}></Route>
        <Route path="/clients" element={<Clients />}></Route>
        <Route path="/guides" element={<Guides />}></Route>
        <Route path="/careers" element={<Careers />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>

        <Route path="/userProfile" element={<Profile />}>
          <Route path="/userProfile/Jobs" element={<Jobs />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default MainNavigation;
