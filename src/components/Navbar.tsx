import React from 'react';
import { Shield, Menu, X, Moon, Sun } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  menuOpen: boolean;
  toggleMenu: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode, menuOpen, toggleMenu }) => {
  return (
    <nav className="fixed w-full z-50 bg-white/80 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <Shield className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold tracking-tighter">RohanCyberOps</span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">About</a>
            <a href="#skills" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Skills</a>
            <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Projects</a>
            <a href="#blog" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Blog</a>
            <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Contact</a>
            
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
          
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleDarkMode}
              className="p-2 mr-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              aria-expanded={menuOpen}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a 
              href="#about" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              onClick={toggleMenu}
            >
              About
            </a>
            <a 
              href="#skills" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              onClick={toggleMenu}
            >
              Skills
            </a>
            <a 
              href="#projects" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              onClick={toggleMenu}
            >
              Projects
            </a>
            <a 
              href="#blog" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              onClick={toggleMenu}
            >
              Blog
            </a>
            <a 
              href="#contact" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;