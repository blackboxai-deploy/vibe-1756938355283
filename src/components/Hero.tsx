"use client";

import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/49a8e3d0-1a63-4e4c-8af9-3cb5d242169c.png"
          alt="Luxury spa interior with warm lighting and traditional Moroccan hammam design"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/70 via-stone-900/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-white mb-6 leading-tight">
          Le Cèder Lounge
          <span className="block text-2xl md:text-3xl lg:text-4xl font-normal text-amber-300 mt-2">
            SPA & HAMMAM DE LUXE
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-stone-200 mb-8 max-w-2xl mx-auto leading-relaxed">
          Découvrez l'art du bien-être dans un cadre authentiquement marocain au cœur de Casablanca
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="bg-amber-800 hover:bg-amber-900 text-white px-8 py-3 text-lg font-medium transition-all duration-300 transform hover:scale-105"
          >
            Réserver Maintenant
          </Button>
          <Button 
            variant="outline"
            size="lg"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-white text-white hover:bg-white hover:text-stone-900 px-8 py-3 text-lg font-medium transition-all duration-300"
          >
            Découvrir Nos Services
          </Button>
        </div>

        {/* Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-amber-800/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-amber-600 rounded-full"></div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Hammam Traditionnel</h3>
            <p className="text-stone-300">Expérience authentique dans nos bains de vapeur</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-amber-800/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-amber-600 rounded-full"></div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Massages Thérapeutiques</h3>
            <p className="text-stone-300">Soins personnalisés par nos thérapeutes experts</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-amber-800/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-amber-600 rounded-full"></div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Cadre Luxueux</h3>
            <p className="text-stone-300">Environnement raffiné pour votre détente absolue</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}