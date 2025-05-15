import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Browse from './components/browse'; // ✅ Make sure this exists
import Adventurer from './pages/adventurer'
import Recruiter from './pages/recruiter'
import Developer from './pages/developer'
import Stalker from './pages/stalker'
import Workpermit from './components/workpermit'
import Skills from './components/skills'
import Certificates from './components/Certificates'
import Recommendations from './components/Recommendations'
import Layout from './components/layout'


function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/browse" element={<Browse />} /> 
        <Route element={<Layout />}>
        
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        
          <Route path="/recruiter" element={<Recruiter />} />
          <Route path="/developer" element={<Developer />} />
          <Route path="/stalker" element={<Stalker />} />
          <Route path="/adventurer" element={<Adventurer />} />
          <Route path="/workpermit" element={<Workpermit />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/Recommendations" element={<Recommendations />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
