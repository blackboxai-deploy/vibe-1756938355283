"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Services() {
  const services = [
    {
      title: "Hammam Traditionnel",
      description: "Plongez dans l'authenticité du hammam marocain avec nos rituels ancestraux",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/df0ffd80-6482-4679-b857-b0241b854ae0.png",
      features: [
        "Bain de vapeur purifiant",
        "Gommage au savon noir traditionnel",
        "Massage relaxant aux huiles d'argan",
        "Thé à la menthe offert"
      ],
      duration: "90 minutes",
      price: "À partir de 450 DH"
    },
    {
      title: "Massage Thérapeutique",
      description: "Libérez vos tensions avec nos massages personnalisés par des thérapeutes experts",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f3d30106-96e2-4656-8b57-fb52293bac7f.png",
      features: [
        "Massage suédois relaxant",
        "Deep tissue pour tensions profondes",
        "Aromathérapie aux huiles essentielles",
        "Massage aux pierres chaudes"
      ],
      duration: "60-90 minutes",
      price: "À partir de 380 DH"
    },
    {
      title: "Forfaits Premium",
      description: "Offrez-vous une expérience complète avec nos forfaits wellness exclusifs",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ad47f6ba-16ad-4e17-bf81-33f9c648a06f.png",
      features: [
        "Hammam + Massage complet",
        "Soins du visage personnalisés",
        "Espace détente privatif",
        "Collations wellness incluses"
      ],
      duration: "3-4 heures",
      price: "À partir de 890 DH"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-stone-800 mb-6">
            Nos Services
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez notre gamme complète de soins de bien-être, alliant tradition marocaine et techniques modernes pour votre détente absolue
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0 shadow-lg">
              <div className="relative">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-amber-800 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {service.duration}
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-2xl font-playfair text-stone-800 mb-2">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-stone-600 text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-amber-600 rounded-full flex-shrink-0"></div>
                      <span className="text-stone-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-stone-100">
                  <span className="text-lg font-semibold text-amber-800">{service.price}</span>
                  <Button 
                    onClick={scrollToContact}
                    className="bg-stone-800 hover:bg-stone-900 text-white"
                  >
                    Réserver
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-gradient-to-r from-amber-50 to-stone-50 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-playfair font-bold text-stone-800 mb-4">
                Soins Personnalisés
              </h3>
              <p className="text-stone-600 mb-6 leading-relaxed">
                Chaque expérience au Le Cèder Lounge est unique. Nos thérapeutes qualifiés adaptent chaque soin selon vos besoins spécifiques pour garantir votre satisfaction absolue.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <span className="text-stone-700">Consultation personnalisée gratuite</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <span className="text-stone-700">Thérapeutes certifiés et expérimentés</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <span className="text-stone-700">Produits naturels premium</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <span className="text-stone-700">Environnement hygiénique et sécurisé</span>
                </li>
              </ul>
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-amber-800 hover:bg-amber-900 text-white px-8 py-3"
              >
                Consulter nos Experts
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/cbd3a0ec-6eb8-4234-967d-f2e3155af517.png"
                alt="Spa therapist consultation room with professional setup"
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}