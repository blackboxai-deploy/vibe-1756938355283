"use client";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-stone-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 lg:col-span-2">
            <h3 className="text-3xl font-playfair font-bold text-amber-400 mb-4">
              Le Cèder Lounge
            </h3>
            <p className="text-stone-300 mb-6 leading-relaxed max-w-md">
              Votre destination de choix pour une expérience spa authentique à Casablanca. 
              Nous combinons traditions marocaines et techniques modernes pour votre bien-être absolu.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-amber-600 hover:bg-amber-700 rounded-full flex items-center justify-center cursor-pointer transition-colors">
                <span className="text-white font-bold text-sm">f</span>
              </div>
              <div className="w-10 h-10 bg-amber-600 hover:bg-amber-700 rounded-full flex items-center justify-center cursor-pointer transition-colors">
                <span className="text-white font-bold text-sm">@</span>
              </div>
              <div className="w-10 h-10 bg-amber-600 hover:bg-amber-700 rounded-full flex items-center justify-center cursor-pointer transition-colors">
                <span className="text-white font-bold text-sm">in</span>
              </div>
              <div className="w-10 h-10 bg-amber-600 hover:bg-amber-700 rounded-full flex items-center justify-center cursor-pointer transition-colors">
                <span className="text-white font-bold text-sm">📱</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('accueil')}
                  className="text-stone-300 hover:text-amber-400 transition-colors"
                >
                  Accueil
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-stone-300 hover:text-amber-400 transition-colors"
                >
                  Nos Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('apropos')}
                  className="text-stone-300 hover:text-amber-400 transition-colors"
                >
                  À Propos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('galerie')}
                  className="text-stone-300 hover:text-amber-400 transition-colors"
                >
                  Galerie
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-stone-300 hover:text-amber-400 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-3 text-stone-300">
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p>Boulevard Mohammed V</p>
                  <p>Quartier des Habous</p>
                  <p>20000 Casablanca</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-amber-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <p>+212 522 XX XX XX</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-amber-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p>contact@lecederlounge.ma</p>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="border-t border-stone-800 mt-8 pt-8">
          <h4 className="text-xl font-semibold text-white mb-4">Nos Spécialités</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-stone-300">
            <div>
              <p className="font-medium text-amber-400 mb-2">Hammam</p>
              <ul className="space-y-1 text-sm">
                <li>Bain traditionnel</li>
                <li>Gommage au savon noir</li>
                <li>Relaxation vapeur</li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-amber-400 mb-2">Massages</p>
              <ul className="space-y-1 text-sm">
                <li>Massage suédois</li>
                <li>Deep tissue</li>
                <li>Pierres chaudes</li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-amber-400 mb-2">Soins</p>
              <ul className="space-y-1 text-sm">
                <li>Aromathérapie</li>
                <li>Soins du visage</li>
                <li>Exfoliation douce</li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-amber-400 mb-2">Forfaits</p>
              <ul className="space-y-1 text-sm">
                <li>Journée bien-être</li>
                <li>Couple spa</li>
                <li>Package détente</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-stone-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-stone-400 text-sm mb-4 md:mb-0">
            <p>&copy; 2024 Le Cèder Lounge SPA. Tous droits réservés.</p>
            <p className="mt-1">Conçu avec passion pour votre bien-être à Casablanca.</p>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="bg-amber-600 hover:bg-amber-700 text-white p-2 rounded-full transition-colors"
            aria-label="Retour en haut"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}