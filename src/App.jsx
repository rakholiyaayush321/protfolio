import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';

import ProjectDetails from './pages/ProjectDetails';

function App() {
  return (
    <BrowserRouter>
      <Helmet>
        <title>Ayush Rakholiya | AI / ML Engineer Portfolio</title>
        <meta name="description" content="Portfolio of Ayush Rakholiya — AI / ML Engineer specializing in Machine Learning, Deep Learning, and Large Language Models." />
      </Helmet>

      <div className="min-h-screen relative w-full overflow-x-hidden selection:bg-primary/30 selection:text-primary animate-fade-in">
        <Navbar />
        
        <main className="pt-24 lg:pt-32">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
