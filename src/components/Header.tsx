"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-playfair font-bold text-amber-800">
              Le Cèder Lounge
            </h1>
            <p className="text-xs text-stone-600 -mt-1">SPA & HAMMAM</p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('accueil')}
              className="text-stone-700 hover:text-amber-800 transition-colors font-medium"
            >
              Accueil
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-stone-700 hover:text-amber-800 transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('apropos')}
              className="text-stone-700 hover:text-amber-800 transition-colors font-medium"
            >
              À Propos
            </button>
            <button
              onClick={() => scrollToSection('galerie')}
              className="text-stone-700 hover:text-amber-800 transition-colors font-medium"
            >
              Galerie
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-stone-700 hover:text-amber-800 transition-colors font-medium"
            >
              Contact
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-amber-800 hover:bg-amber-900 text-white"
            >
              Réserver
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-stone-700 hover:text-amber-800 focus:outline-none focus:text-amber-800"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-stone-200">
              <button
                onClick={() => scrollToSection('accueil')}
                className="block px-3 py-2 text-stone-700 hover:text-amber-800 transition-colors font-medium w-full text-left"
              >
                Accueil
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block px-3 py-2 text-stone-700 hover:text-amber-800 transition-colors font-medium w-full text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('apropos')}
                className="block px-3 py-2 text-stone-700 hover:text-amber-800 transition-colors font-medium w-full text-left"
              >
                À Propos
              </button>
              <button
                onClick={() => scrollToSection('galerie')}
                className="block px-3 py-2 text-stone-700 hover:text-amber-800 transition-colors font-medium w-full text-left"
              >
                Galerie
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block px-3 py-2 text-stone-700 hover:text-amber-800 transition-colors font-medium w-full text-left"
              >
                Contact
              </button>
              <div className="px-3 py-2">
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-amber-800 hover:bg-amber-900 text-white w-full"
                >
                  Réserver
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}