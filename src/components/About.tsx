"use client";

export default function About() {
  return (
    <section id="apropos" className="py-20 bg-gradient-to-b from-stone-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-stone-800 mb-6">
              L'Excellence du Bien-être à Casablanca
            </h2>
            
            <p className="text-lg text-stone-600 mb-6 leading-relaxed">
              Le Cèder Lounge incarne l'art de vivre marocain dans toute sa splendeur. Niché au cœur de Casablanca, notre spa de luxe vous invite à découvrir une expérience sensorielle unique, où tradition ancestrale et modernité se rencontrent harmonieusement.
            </p>
            
            <p className="text-lg text-stone-600 mb-8 leading-relaxed">
              Depuis notre ouverture, nous nous engageons à offrir des soins authentiques dans un cadre raffiné, utilisant uniquement des produits naturels de première qualité et des techniques éprouvées transmises de génération en génération.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 bg-amber-600 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-stone-800 mb-2">Tradition Authentique</h4>
                  <p className="text-stone-600 text-sm">Rituels marocains préservés et transmis par nos maîtres</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 bg-amber-600 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-stone-800 mb-2">Expertise Moderne</h4>
                  <p className="text-stone-600 text-sm">Techniques contemporaines pour un bien-être optimal</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 bg-amber-600 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-stone-800 mb-2">Produits Naturels</h4>
                  <p className="text-stone-600 text-sm">Huiles d'argan, savon noir et ingrédients bio exclusifs</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 bg-amber-600 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-stone-800 mb-2">Service Premium</h4>
                  <p className="text-stone-600 text-sm">Attention personnalisée et discrétion absolue</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-stone-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-800 mb-2">5+</div>
                <div className="text-sm text-stone-600">Années d'Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-800 mb-2">1000+</div>
                <div className="text-sm text-stone-600">Clients Satisfaits</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-800 mb-2">15+</div>
                <div className="text-sm text-stone-600">Soins Proposés</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img 
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3e873b0a-10c1-44b5-9cd1-bb90a7639383.png"
                alt="Elegant spa interior with Moroccan architecture and traditional tiles"
                className="w-full h-[600px] object-cover rounded-2xl shadow-2xl"
              />
              
              {/* Overlay Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-stone-100 max-w-xs">
                <h4 className="font-semibold text-stone-800 mb-2">Notre Philosophy</h4>
                <p className="text-stone-600 text-sm leading-relaxed">
                  "Créer un havre de paix où chaque détail contribue à votre bien-être et à votre renaissance intérieure."
                </p>
                <div className="flex items-center mt-4 space-x-2">
                  <div className="w-10 h-10 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"></div>
                  <div>
                    <div className="font-medium text-stone-800 text-sm">Directrice Wellness</div>
                    <div className="text-stone-500 text-xs">Le Cèder Lounge</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}