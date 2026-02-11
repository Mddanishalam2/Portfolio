import React, { useState } from 'react';
import Navbar from './sections/Navbar';
import Home from './sections/home';
import About from './sections/about';
import ProjectsCard from './sections/projectCard';
import SkillsCard from './sections/skillsCard';
import Contact from "./sections/contact";

const App = () => {
  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen transition-colors">
      <Navbar/>
      {/* Main Content Sections */}
      <main className="container mx-auto px-4 mt-6">
        <Home/>
        <About/>
        <ProjectsCard/>
        <SkillsCard/>
        <Contact/>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-gray-500">
        <p><strong>&copy; {new Date().getFullYear()} Created by Md Danish Alam. All Rights Reserved.</strong></p>
      </footer>
    </div>
  );
};

export default App;