import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, Heart, Award, Briefcase, GraduationCap, Mail } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Sobre', href: '#sobre', icon: GraduationCap },
    { label: 'Alfajores', href: '#alfajores', icon: Heart },
    { label: 'O Que Eu Domino', href: '#conhecimentos', icon: Award },
    { label: 'Habilidades', href: '#habilidades', icon: Briefcase },
    { label: 'Contato', href: '#contato', icon: Mail },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF6F0]/90 backdrop-blur-md shadow-sm border-b border-autumn-200/50 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logotipo */}
        <a href="#" className="group flex items-center gap-2 text-autumn-900 font-serif">
          <span className="w-9 h-9 rounded-full bg-gradient-to-br from-autumn-500 to-terracotta flex items-center justify-center text-white text-base shadow-sm group-hover:rotate-12 transition-transform duration-300">
            🍂
          </span>
          <div className="flex flex-col">
            <span className="text-lg sm:text-xl font-bold tracking-tight group-hover:text-autumn-600 transition-colors">
              Aline Vitória
            </span>
            <span className="text-[10px] tracking-wider uppercase text-autumn-700 font-sans font-medium">
              IFAC • Microempreendedora
            </span>
          </div>
        </a>

        {/* Links no Desktop */}
        <nav className="hidden md:flex items-center gap-1 bg-white/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-autumn-200/60 shadow-xs">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.href}
                href={link.href}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm font-medium text-autumn-800 hover:text-autumn-600 hover:bg-autumn-100/70 transition-all duration-200"
              >
                <Icon className="w-3.5 h-3.5 text-autumn-500" />
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Botão de Destaque */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#alfajores"
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-autumn-600 to-terracotta text-white shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <Sparkles className="w-4 h-4 text-amber-200 animate-pulse" />
            <span>Encomendar Alfajor</span>
          </a>
        </div>

        {/* Botão do Menu Mobile */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-autumn-800 hover:bg-autumn-100 transition-colors"
          aria-label="Abrir menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Menu Mobile Retrátil */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF6F0] border-b border-autumn-200 px-4 pt-2 pb-6 shadow-xl animate-fadeIn">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-autumn-900 font-medium hover:bg-autumn-100 transition-colors"
                >
                  <Icon className="w-5 h-5 text-autumn-600" />
                  {link.label}
                </a>
              );
            })}
            <a
              href="#alfajores"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold bg-gradient-to-r from-autumn-600 to-terracotta text-white shadow-md text-center"
            >
              <Sparkles className="w-4 h-4 text-amber-200" />
              Encomendar Alfajor no Campus
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
