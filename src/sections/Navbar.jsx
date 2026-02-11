import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [dark, setDark] = useState(false);

  // apply dark class
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setNavOpen(false);
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl backdrop-saturate-150 border-b border-white/40 dark:border-gray-700/40 shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.6)]">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a onClick={() => scrollToSection('home')} className="text-xl font-bold text-blue-600 cursor-pointer hover:text-blue-500">
            Md Danish Alam
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-12 items-center">

            <button
              onClick={() => setDark(!dark)}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 transition"
            >
              {dark ? (
                // Sun icon
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700 dark:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364 6.364l-1.414-1.414M7.05 7.05 5.636 5.636m12.728 0-1.414 1.414M7.05 16.95l-1.414 1.414M12 8a4 4 0 100 8 4 4 0 000-8z" />
                </svg>
              ) : (
                // Moon icon
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700 dark:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3c0 .34 0 .67.05 1A7 7 0 0021 12.79z" />
                </svg>
              )}
            </button>


            <button onClick={() => scrollToSection('about')} className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600">About</button>
            <button onClick={() => scrollToSection('projects')} className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600">Projects</button>
            <button onClick={() => scrollToSection('skills')} className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600">Skills</button>
            <button onClick={() => scrollToSection('contact')} className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600">Contact</button>
          </nav>

          {/* Mobile Right Section */}
          <div className="md:hidden flex items-center gap-3">

            <button
              onClick={() => setDark(!dark)}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 transition"
            >
              {dark ? (
                // Sun icon
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700 dark:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364 6.364l-1.414-1.414M7.05 7.05 5.636 5.636m12.728 0-1.414 1.414M7.05 16.95l-1.414 1.414M12 8a4 4 0 100 8 4 4 0 000-8z" />
                </svg>
              ) : (
                // Moon icon
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700 dark:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3c0 .34 0 .67.05 1A7 7 0 0021 12.79z" />
                </svg>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button onClick={() => setNavOpen(!navOpen)} className="text-gray-700 dark:text-gray-400 hover:text-blue-600 dark:hover:text-gray-200">
              {navOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${navOpen ? 'max-h-60' : 'max-h-0'}`}>
          <nav
            className="flex flex-col items-center py-4 space-y-4 bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl backdrop-saturate-150 border-t border-white/40 dark:border-gray-700/40 shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.6)]">

            <button onClick={() => scrollToSection('about')} className="w-full text-center py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md">About</button>
            <button onClick={() => scrollToSection('projects')} className="w-full text-center py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md">Projects</button>
            <button onClick={() => scrollToSection('skills')} className="w-full text-center py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md">Skills</button>
            <button onClick={() => scrollToSection('contact')} className="w-full text-center py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md">Contact</button>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
