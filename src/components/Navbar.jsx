import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, User, Cpu, Briefcase, FolderGit2, GraduationCap, Award, Mail } from 'lucide-react';
import AILogoEmblem from './AILogoEmblem';

const navItems = [
  { id: 'hero', label: 'About', icon: User },
  { id: 'skills', label: 'Skills', icon: Cpu },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'projects', label: 'Projects', icon: FolderGit2 },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'certifications', label: 'Certifications', icon: Award },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [avatarError, setAvatarError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id, e) => {
    if (e) e.preventDefault();
    setMobileMenuOpen(false);

    // Use a small timeout so menu collapse finishes before calculating scroll position on mobile
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const navHeight = 85;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - navHeight;

        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: 'smooth'
        });
      }
    }, 60);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 transition-all duration-300">
      <nav
        className={`max-w-6xl mx-auto rounded-2xl transition-all duration-300 border ${
          isScrolled
            ? 'bg-[#0f172a]/80 backdrop-blur-xl border-slate-700/50 shadow-lg shadow-cyan-950/20 py-3'
            : 'bg-[#0f172a]/40 backdrop-blur-md border-slate-800/40 py-4'
        }`}
      >
        <div className="flex items-center justify-between px-4 sm:px-6">
          {/* Logo / Name with AI Emblem */}
          <button
            onClick={(e) => scrollToSection('hero', e)}
            className="flex items-center gap-3 text-left group focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-lg p-1"
          >
            {!avatarError ? (
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-md shadow-cyan-500/20 overflow-hidden">
                <img
                  src="/profile.png"
                  alt="Dipro Chowdhury"
                  onError={() => setAvatarError(true)}
                  className="w-full h-full object-cover object-top rounded-[9px]"
                />
              </div>
            ) : (
              <AILogoEmblem size="md" />
            )}

            <div>
              <span className="font-heading font-bold text-lg text-slate-100 tracking-tight block">
                Dipro Chowdhury
              </span>
              <span className="text-xs text-cyan-400 font-mono block -mt-0.5">AI/ML Engineer</span>
            </div>
          </button>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-1 bg-[#080c14]/60 p-1.5 rounded-xl border border-slate-800/60">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={(e) => scrollToSection(item.id, e)}
                  className={`relative px-3.5 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center gap-1.5 min-h-[44px] ${
                    isActive ? 'text-cyan-300' : 'text-slate-400 hover:text-slate-200'
                  }`}
                  aria-label={`Navigate to ${item.label}`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavBackground"
                      className="absolute inset-0 bg-cyan-500/15 border border-cyan-500/30 rounded-lg -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* CTA Link (Desktop) */}
          <div className="hidden sm:flex lg:hidden xl:flex items-center gap-3">
            <button
              onClick={(e) => scrollToSection('contact', e)}
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 border border-cyan-500/30 rounded-xl hover:bg-cyan-500/10 hover:border-cyan-500/60 transition-all duration-200 min-h-[44px]"
            >
              Get in Touch
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/60 focus:outline-none focus:ring-2 focus:ring-cyan-500 min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="lg:hidden overflow-hidden px-4 pt-3 pb-4 border-t border-slate-800/80 mt-3"
            >
              <div className="flex flex-col gap-1.5">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => scrollToSection(item.id, e)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all text-left min-h-[44px] ${
                        isActive
                          ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30'
                          : 'text-slate-300 hover:bg-slate-800/50 hover:text-white'
                      }`}
                    >
                      <Icon className="w-5 h-5 text-cyan-400" />
                      <span>{item.label}</span>
                    </a>
                  );
                })}
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection('contact', e)}
                  className="mt-2 w-full py-3 text-center text-sm font-bold text-slate-900 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl hover:brightness-110 transition-all shadow-md shadow-cyan-500/20 min-h-[44px] flex items-center justify-center"
                >
                  Contact Me
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
