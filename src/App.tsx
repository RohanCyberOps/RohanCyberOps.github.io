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
import Skills from './components/Skills';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Apply dark mode class to body
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <Navbar 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode} 
        menuOpen={menuOpen}
        toggleMenu={toggleMenu}
      />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Blog />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;