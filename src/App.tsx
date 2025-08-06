import React, { useState, useEffect } from 'react';
import {
  Shield,
  Code,
  Briefcase,
  FileText,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Menu,
  X,
  ChevronRight,
  Lock,
  Cpu,
  Server,
  Globe,
  Award,
  Moon,
  Sun
} from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Graph from './components/Graph';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Assignments from './components/Assignments';
import LegalPage from "./components/LegalPage";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      setDarkMode(e.matches);
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Navbar
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
            menuOpen={menuOpen}
            toggleMenu={toggleMenu}
        />

        <main className="overflow-hidden">
          <Hero />
          <About />
          <Services />
          <Skills />
          <Graph /> {/* Integrated Graph component */}
          <Projects />
          <Blog />
          <Assignments />
          <Contact />

            {/* Additional sections can be added here */}
          <LegalPage />
        </main>

        <Footer />
      </div>
  );
}

export default App;