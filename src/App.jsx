import { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import BackgroundCanvas from './components/canvas/BackgroundCanvas';
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';

// Lazy loaded components for better performance
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Experience = lazy(() => import('./components/Experience'));
const Education = lazy(() => import('./components/Education'));
const GitHubStats = lazy(() => import('./components/GitHubStats'));
const Contact = lazy(() => import('./components/Contact'));

// Fallback Loading component
const SectionLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <div className="w-10 h-10 rounded-xl border-2 border-primary/30 border-t-primary animate-spin" />
      <span className="text-xs font-mono uppercase tracking-widest text-primary/60 animate-pulse">Loading...</span>
    </div>
  </div>
);

function App() {
  return (
    <>
      <Helmet>
        <title>Ayush Rakholiya | AI / ML Engineer Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Ayush Rakholiya — AI / ML Engineer specializing in Machine Learning, Deep Learning, and Large Language Models. Building intelligent, context-aware applications."
        />
        <meta name="keywords" content="AI Engineer, ML Engineer, Developer Portfolio, React, Three.js, Python, Deep Learning, LLMs, Ayush Rakholiya" />
        <meta property="og:title" content="Ayush Rakholiya | AI / ML Engineer" />
        <meta property="og:description" content="AI / ML Engineer specializing in Machine Learning, Deep Learning, and Large Language Models." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Loading Screen — shown once per session */}
      <LoadingScreen />

      {/* Custom Cursor */}
      <CustomCursor />

      <div className="min-h-screen relative w-full overflow-hidden selection:bg-primary/30 selection:text-primary">
        {/* Three.js Particle Background */}
        <BackgroundCanvas />

        <div className="relative z-10 w-full">
          {/* Scroll Progress Bar */}
          <ScrollProgress />

          {/* Navigation */}
          <Navbar />

          {/* Main Content */}
          <main>
            <Suspense fallback={<SectionLoader />}>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Experience />
              <Education />
              <GitHubStats />
              <Contact />
            </Suspense>
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
