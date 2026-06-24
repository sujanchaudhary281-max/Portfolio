import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Experiences from './pages/Experiences.jsx';
import PageNotFound from './pages/PageNotFound.jsx';
import MoreProjects from './pages/MoreProjects.jsx';
import Skills from './pages/Skills.jsx';
import Blogs from './pages/Blogs.jsx';
import Contact from './pages/Contact.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import './index.css';
import './styles/fontStyle.css';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-canvas text-ink font-sans">
        <ScrollToTop />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/more-projects" element={<MoreProjects />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
