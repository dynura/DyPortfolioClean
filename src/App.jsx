import React, { useState, useEffect, useRef } from 'react';
import { Sun, Moon, Mail, ExternalLink, ArrowUp, FileText } from 'lucide-react';
import { SiGithub } from 'react-icons/si';

import ScrollSection from './components/ScrollSection';
import Navbar from './components/Navbar';
import TechStack from './components/TechStack';
import ProjectDetailModal from './components/ProjectDetailModal';
import ProjectsModal from './components/ProjectsModal';

import { allProjectsList } from './data/projects';
import { experiences, education, certificates, highlights } from './data/portfolioData';

const LinkedinIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  const [isAllProjectsOpen, setIsAllProjectsOpen] = useState(false);
  const [isAllProjectsClosing, setIsAllProjectsClosing] = useState(false);

  const [selectedProject, setSelectedProject] = useState(null);
  const [isSelectedProjectClosing, setIsSelectedProjectClosing] = useState(false);

  const isManualScrolling = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isManualScrolling.current) return; // Skip during manual nav click

      if (window.scrollY < 120) {
        setActiveTab('home');
        return;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    const sectionIds = ['home', 'projects', 'experience', 'skills', 'education', 'contact'];
    const observerOptions = { root: null, rootMargin: '-20% 0px -50% 0px', threshold: 0.1 };

    const observerCallback = (entries) => {
      if (isManualScrolling.current) return; // Skip observer updates during click scroll

      entries.forEach((entry) => {
        if (entry.isIntersecting && window.scrollY >= 120) {
          setActiveTab(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const handleReturnTop = (e) => {
    e.preventDefault();
    setActiveTab('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeAllProjects = () => {
    setIsAllProjectsClosing(true);
    setTimeout(() => {
      setIsAllProjectsOpen(false);
      setIsAllProjectsClosing(false);
    }, 400);
  };

  const closeSelectedProject = () => {
    setIsSelectedProjectClosing(true);
    setTimeout(() => {
      setSelectedProject(null);
      setIsSelectedProjectClosing(false);
    }, 400);
  };

  const featuredProjects = allProjectsList.slice(0, 3);

  useEffect(() => {
    const isModalActive = isAllProjectsOpen || selectedProject;
    if (isModalActive) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`);
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
      document.body.style.removeProperty('--scrollbar-width');
    }

    return () => {
      document.body.classList.remove('modal-open');
      document.body.style.removeProperty('--scrollbar-width');
    };
  }, [isAllProjectsOpen, selectedProject]);

  return (
    <div className="min-h-screen bg-mono-light-base dark:bg-mono-dark-base text-mono-light-900 dark:text-mono-dark-900 transition-colors duration-500 font-sans">
      <div id="top" />

      <div className="max-w-[1126px] mx-auto min-h-screen flex flex-col pt-0 pb-16 font-sans">
        
        {/* Header */}
        <header className="flex justify-between items-center w-full px-4 sm:px-6 py-6 m-0 relative">
          <span className="font-bold tracking-widest text-sm text-mono-light-900 dark:text-mono-dark-900 font-sans flex-shrink-0">
            DYNURA
          </span>

          <div className="flex items-center gap-2.5 sm:gap-4 flex-shrink-0">
            <Navbar 
              activeTab={activeTab} 
              setActiveTab={setActiveTab} 
              isManualScrolling={isManualScrolling} 
            />
            
            <button 
              onClick={toggleDarkMode} 
              className="p-2.5 rounded-full shadow-sm bg-mono-light-100 dark:bg-mono-dark-100 text-mono-light-900 dark:text-mono-dark-900 hover:opacity-80 transition-opacity cursor-pointer flex items-center justify-center border-none flex-shrink-0"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>
        </header>

        {/* 1. Hero Section */}
        <ScrollSection id="home" className="flex flex-col md:flex-row items-start gap-8 my-16 md:my-20 px-20 font-sans transition-all duration-500">
          <div className="mosaic-avatar-box w-28 h-28 border-2 border-mono-light-900 dark:border-mono-dark-300 shadow-md flex-shrink-0 cursor-pointer bg-mono-light-100 dark:bg-mono-dark-100 flex items-center justify-center relative">
            <div className="mosaic-pixel-grid">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="mosaic-pixel-cell" />
              ))}
            </div>

            <img 
              src="https://res.cloudinary.com/dt2j9qzxy/image/upload/v1784794634/avatar1_pnmylb.jpg"
              alt="Avatar Default" 
              className="mosaic-text-default absolute inset-0 w-full h-full object-cover rounded-full"
            />
            <img 
              src="https://res.cloudinary.com/dt2j9qzxy/image/upload/v1784794626/IMG_WHITE_BG_2025_mifc0m.png" 
              alt="Avatar Hover" 
              className="mosaic-text-hover absolute inset-0 w-full h-full object-cover rounded-full opacity-0 z-30"
            />
          </div>

          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2 font-sans">Hello There!</h1>
            <h2 className="text-base md:text-lg text-mono-light-600 dark:text-mono-dark-500 font-medium mb-3 font-sans">
              Software Engineer · Frontend Developer · Full Stack Developer
            </h2>
            <p className="text-xs text-mono-light-500 dark:text-mono-dark-500 max-w-xl leading-relaxed font-sans">
              I build responsive web applications, accessible user interfaces, and robust backend services. Passionate about turning complex requirements into clean, scalable software using modern web and mobile frameworks.
            </p>
          </div>
        </ScrollSection>

        {/* 2. Projects Section */}
        <ScrollSection id="projects" className="px-6 my-20 md:my-20 font-sans transition-all duration-500">
          <div className="curved-inward-card bg-mono-light-900 dark:bg-mono-dark-100 text-mono-light-base dark:text-mono-dark-900 p-6 sm:p-12 shadow-xl">
            <h2 className="text-2xl font-bold mb-8 font-sans text-mono-light-base dark:text-mono-dark-900">Projects</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
              {featuredProjects.map((proj) => (
                <div 
                  key={proj.id} 
                  onClick={() => setSelectedProject(proj)}
                  className="text-left bg-transparent p-2 rounded-2xl shadow-none hover:scale-[1.02] transition-transform duration-500 cursor-pointer group"
                >
                  <div className="w-full h-36 rounded-2xl mb-4 overflow-hidden bg-mono-light-200 dark:bg-mono-dark-300 shadow-sm">
                    <img 
                      src={proj.images?.[0] || proj.image}
                      alt={proj.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>

                  <h3 className="text-base font-bold mb-1 font-sans text-mono-light-base dark:text-mono-dark-900">{proj.title}</h3>
                  <p className="text-mono-light-400 dark:text-mono-dark-500 text-xs mb-4 leading-relaxed font-sans line-clamp-2">{proj.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tags.map((tag, i) => (
                      <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-mono-light-800 dark:bg-mono-dark-200 text-mono-light-300 dark:text-mono-dark-500 font-sans shadow-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <button 
                onClick={() => setIsAllProjectsOpen(true)}
                className="px-6 py-2.5 rounded-xl bg-mono-light-200 dark:bg-mono-dark-200 text-mono-light-900 dark:text-mono-dark-900 text-xs font-bold hover:bg-mono-light-base dark:hover:bg-mono-dark-900 hover:text-mono-light-900 dark:hover:text-mono-dark-100 hover:scale-105 transition-all duration-300 cursor-pointer shadow-md border-none font-sans"
              >
                View All Projects
              </button>
            </div>
          </div>
        </ScrollSection>

        {/* 3. Experience Section */}
        <ScrollSection id="experience" className="my-20 md:my-20 px-6 text-center font-sans transition-all duration-500">
          <h2 className="text-2xl font-bold mb-16 font-sans">Experience</h2>
          
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 top-4 bottom-10 w-[2px] bg-mono-light-300 dark:bg-mono-dark-300" />

            <div className="space-y-12 relative">
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex items-start w-full">
                  <div className="w-1/2 pr-6 md:pr-8 text-right pt-0.5">
                    <span className="text-[11px] md:text-xs text-mono-light-500 dark:text-mono-dark-500 block font-sans leading-tight">
                      {exp.date}
                    </span>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 top-1 w-3.5 h-3.5 rounded-full border-2 border-mono-light-900 dark:border-mono-dark-300 bg-mono-light-base dark:bg-mono-dark-base z-10 shadow-xs" />

                  <div className="w-1/2 pl-6 md:pl-8 text-left">
                    <h3 className="text-xs md:text-sm font-bold text-mono-light-900 dark:text-mono-dark-900 font-sans leading-tight">{exp.role}</h3>
                    <p className="text-[11px] md:text-xs text-mono-light-600 dark:text-mono-dark-500 font-sans mt-0.5">{exp.company}</p>
                    <span className="text-[10px] text-mono-light-400 dark:text-mono-dark-500 font-sans">{exp.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollSection>

        {/* 4. Tools & Technologies Section */}
        <TechStack />

        {/* 5. Education Section */}
        <ScrollSection id="education" className="my-20 md:my-20 px-6 font-sans transition-all duration-500">
          <h2 className="text-2xl font-bold mb-8 font-sans">Education</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="p-6 md:p-8 bg-mono-light-100 dark:bg-mono-dark-100 rounded-3xl shadow-md hover:scale-[1.01] transition-transform duration-500">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-2">
                  <div>
                    <h3 className="text-base font-bold font-sans">{edu.degree}</h3>
                    <p className="text-xs font-semibold text-mono-light-600 dark:text-mono-dark-500 mt-1 font-sans">{edu.institution}</p>
                    <span className="text-xs text-mono-light-500 dark:text-mono-dark-500 font-bold block mt-1 font-sans">{edu.result}</span>
                  </div>
                  <span className="text-xs text-mono-light-500 dark:text-mono-dark-500 font-sans">{edu.period}</span>
                </div>
                <p className="text-xs text-mono-light-500 dark:text-mono-dark-500 leading-relaxed font-sans mt-4">{edu.details}</p>
              </div>
            ))}
          </div>
        </ScrollSection>

        {/* 6. Certificates Section */}
        <ScrollSection className="my-20 md:my-20 px-6 font-sans transition-all duration-500">
          <h2 className="text-2xl font-bold mb-6 font-sans">Certificates</h2>
          <ul className="divide-y divide-mono-light-200 dark:divide-mono-dark-200">
            {certificates.map((cert, index) => (
              <li key={index} className="py-4 flex justify-between items-center text-xs">
                <div>
                  <span className="font-bold text-sm block font-sans">{cert.title}</span>
                  <span className="text-mono-light-500 dark:text-mono-dark-500 font-sans">{cert.issuer}</span>
                </div>
                <span className="text-mono-light-400 dark:text-mono-dark-400 font-sans">{cert.year}</span>
              </li>
            ))}
          </ul>
        </ScrollSection>

        {/* 7. Key Highlights Section */}
        <ScrollSection id="highlights" className="my-20 md:my-28 px-6 font-sans transition-all duration-500">
          <h2 className="text-2xl font-bold mb-8 font-sans">Key Highlights</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {highlights.map((item, index) => (
              <div 
                key={index} 
                className="flex flex-col h-full bg-mono-light-100 dark:bg-mono-dark-100 rounded-3xl overflow-hidden shadow-md hover:scale-[1.02] transition-transform duration-500 group"
              >
                <div className="w-full h-56 flex-shrink-0 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>

                <div className="p-6 bg-mono-light-900 dark:bg-mono-dark-100 text-mono-light-base dark:text-mono-dark-900 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold mb-2 font-sans text-mono-light-base dark:text-mono-dark-900 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-mono-light-300 dark:text-mono-dark-500 leading-relaxed font-sans">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollSection>

        {/* 8. GitHub Activity Section */}
        <ScrollSection className="my-20 md:my-20 px-6 font-sans transition-all duration-500">
          <h2 className="text-2xl font-bold mb-6 font-sans">GitHub Activity</h2>
          <div className="p-6 md:p-8 bg-mono-light-100 dark:bg-mono-dark-100 rounded-3xl shadow-md flex flex-col items-center justify-center">
            <img 
              src="https://ghchart.rshah.org/dynura" 
              alt="dynura's GitHub Contribution Activity" 
              className="w-full max-w-2xl opacity-90 dark:invert transition-all duration-500"
            />
            <p className="text-xs text-mono-light-500 dark:text-mono-dark-500 mt-4 font-sans">
              Live GitHub contribution activity retrieved
            </p>
          </div>
        </ScrollSection>

        {/* 9. Contact Section */}
        <ScrollSection id="contact" className="my-20 md:my-28 px-6 font-sans transition-all duration-500">
          <div className="curved-inward-card p-6 sm:p-12 bg-mono-light-900 dark:bg-mono-dark-100 text-mono-light-base dark:text-mono-dark-900 shadow-2xl flex flex-col justify-between gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-3 font-sans text-mono-light-base dark:text-mono-dark-900">Let's Build Something Great Together</h2>
              <p className="text-xs text-mono-light-400 dark:text-mono-dark-500 max-w-md leading-relaxed mb-6 font-sans">
                Whether you have a new project in mind, a potential role to discuss, or just want to connect, feel free to reach out anytime!
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-2">
              <a href="https://github.com/dynura" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs font-semibold text-mono-light-300 dark:text-mono-dark-500 hover:text-white dark:hover:text-white transition-colors font-sans">
                <SiGithub size={16} /> GitHub <ExternalLink size={12} />
              </a>
              <a href="https://linkedin.com/in/dayang-nur-ezzah-adibah" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs font-semibold text-mono-light-300 dark:text-mono-dark-500 hover:text-white dark:hover:text-white transition-colors font-sans">
                <LinkedinIcon size={16} /> LinkedIn <ExternalLink size={12} />
              </a>
              <a href="mailto:ezzahadibah@gmail.com" className="flex items-center gap-1.5 text-xs font-semibold text-mono-light-300 dark:text-mono-dark-500 hover:text-white dark:hover:text-white transition-colors font-sans">
                <Mail size={16} /> Email <ExternalLink size={12} />
              </a>
              <a 
                href="https://drive.google.com/file/d/1tEv0oBXHoXQ5qQEH1-cW3L1iJ4bh-q4Y/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1.5 rounded-xl bg-mono-light-800 dark:bg-mono-dark-200 text-mono-light-base dark:text-mono-dark-900 hover:bg-mono-light-base dark:hover:bg-mono-dark-900 hover:text-mono-light-900 dark:hover:text-mono-dark-100 transition-all duration-300 shadow-sm"
              >
                <FileText size={15} /> View Resume <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </ScrollSection>

        {/* Minimal Centered Footer */}
        <footer className="px-6 pt-6 flex justify-center items-center text-center font-sans">
          <p className="text-xs text-mono-light-500 dark:text-mono-dark-500 font-sans">
            © 2026 DYNURA. All rights reserved.
          </p>
        </footer>

      </div>

      {/* Floating Return to Top Button */}
      <a 
        href="#top"
        onClick={handleReturnTop}
        aria-label="Return to top"
        className="fixed bottom-6 right-6 p-3.5 rounded-full bg-mono-light-900 dark:bg-mono-dark-100 text-mono-light-base dark:text-mono-dark-900 shadow-2xl hover:scale-110 transition-transform duration-300 z-40 flex items-center justify-center border-none cursor-pointer"
      >
        <ArrowUp size={18} />
      </a>

      {/* MODAL 1: All Projects Grid */}
      <ProjectsModal 
        isOpen={isAllProjectsOpen}
        isClosing={isAllProjectsClosing}
        onClose={closeAllProjects}
        onSelectProject={setSelectedProject}
      />

      {/* MODAL 2: Single Project Detail Brief */}
      <ProjectDetailModal 
        selectedProject={selectedProject}
        isClosing={isSelectedProjectClosing}
        onClose={closeSelectedProject}
      />
    </div>
  );
}