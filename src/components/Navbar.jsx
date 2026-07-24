import React, { useState, useRef, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'education', label: 'Education', href: '#education' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export default function Navbar({ activeTab, setActiveTab, isManualScrolling }) {
  const [hoveredTab, setHoveredTab] = useState(null);
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navRef = useRef(null);
  const itemRefs = useRef(new Map());

  const updatePill = () => {
    const targetId = hoveredTab || activeTab;
    const targetEl = itemRefs.current.get(targetId);

    if (targetEl && navRef.current) {
      const navRect = navRef.current.getBoundingClientRect();
      const targetRect = targetEl.getBoundingClientRect();

      setPillStyle({
        left: targetRect.left - navRect.left,
        width: targetRect.width,
      });
    }
  };

  useEffect(() => {
    updatePill();
    window.addEventListener('resize', updatePill);
    return () => window.removeEventListener('resize', updatePill);
  }, [activeTab, hoveredTab]);

  const handleNavClick = (e, item) => {
    e.preventDefault();
    
    // Disable IntersectionObserver lock temporarily
    if (isManualScrolling) isManualScrolling.current = true;

    setActiveTab(item.id);
    setMobileMenuOpen(false);
    
    const targetEl = document.getElementById(item.id) || document.querySelector(item.href);
    
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }

    // Release the observer lock after smooth scroll finishes (~800ms)
    setTimeout(() => {
      if (isManualScrolling) isManualScrolling.current = false;
    }, 800);
  };

  return (
    <>
     {/* Desktop Navigation */}
      <nav
        ref={navRef}
        className="relative hidden lg:inline-flex items-center nav-pill-container font-sans shadow-sm flex-shrink-0"
        onMouseLeave={() => setHoveredTab(null)}
      >
        <div
          className="nav-sliding-pill pointer-events-none absolute top-0 bottom-0 transition-all duration-300"
          style={{
            transform: `translateX(${pillStyle.left}px)`,
            width: `${pillStyle.width}px`,
          }}
        />

        {NAV_ITEMS.map((item) => {
          const isCurrent = (hoveredTab || activeTab) === item.id;

          return (
            <a
              key={item.id}
              href={item.href}
              ref={(el) => {
                if (el) itemRefs.current.set(item.id, el);
                else itemRefs.current.delete(item.id);
              }}
              onClick={(e) => handleNavClick(e, item)}
              onMouseEnter={() => setHoveredTab(item.id)}
              className={`relative z-20 px-4 py-1.5 text-xs font-semibold no-underline transition-colors duration-300 flex items-center justify-center font-sans cursor-pointer ${
                isCurrent
                  ? 'text-mono-light-base dark:text-mono-dark-900 font-bold'
                  : 'text-mono-light-500 dark:text-mono-dark-500 hover:text-mono-light-900 dark:hover:text-mono-dark-900'
              }`}
            >
              {item.label}
            </a>
          );
        })}
      </nav>

      {/* Mobile/Tablet Hamburger Toggle Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="lg:hidden p-2.5 rounded-full bg-mono-light-100 dark:bg-mono-dark-100 text-mono-light-900 dark:text-mono-dark-900 hover:opacity-80 transition-opacity cursor-pointer border-none shadow-sm flex-shrink-0 flex items-center justify-center"
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
      </button>

      {/* Mobile/Tablet Floating Dropdown Panel */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed top-20 left-4 right-4 z-50 bg-mono-light-base dark:bg-mono-dark-100 p-4 rounded-3xl shadow-2xl border border-mono-light-200 dark:border-mono-dark-300 flex flex-col gap-1.5 transition-all duration-300 animate-modal-open">
          {NAV_ITEMS.map((item) => {
            const isCurrent = activeTab === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className={`px-4 py-3 rounded-2xl text-xs font-semibold transition-all duration-300 text-left ${
                  isCurrent
                    ? 'bg-mono-light-900 dark:bg-mono-dark-200 text-mono-light-base dark:text-mono-dark-900 font-bold'
                    : 'text-mono-light-700 dark:text-mono-dark-500 hover:bg-mono-light-100 dark:hover:bg-mono-dark-200'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      )}
    </>
  );
}