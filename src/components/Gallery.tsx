"use client";

import { useState } from "react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a6d57d06-9e99-4d0f-b8b5-840943743607.png",
      alt: "Hammam traditionnel avec surfaces en marbre",
      title: "Hammam Traditionnel"
    },
    {
      src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0fce9319-ee03-4023-8669-214b7e0dd411.png",
      alt: "Salle de massage thérapeutique professionnelle",
      title: "Salle de Massage"
    },
    {
      src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0c576395-8629-4c1a-9ed7-da19c4710825.png",
      alt: "Espace de détente avec sièges confortables",
      title: "Espace Détente"
    },
    {
      src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a18072b9-3a72-4473-a006-76cf44aed847.png",
      alt: "Réception du spa avec décor marocain élégant",
      title: "Réception"
    },
    {
      src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6657a297-43c2-4b0f-8485-de0142074e83.png",
      alt: "Salle de soins premium avec équipements de luxe",
      title: "Salle de Soins Premium"
    },
    {
      src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3d9283e9-e587-4e1d-acc4-6a808d43ceeb.png",
      alt: "Service de thé marocain traditionnel",
      title: "Service de Thé"
    }
  ];

  return (
    <section id="galerie" className="py-20 bg-stone-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
            Notre Galerie
          </h2>
          <p className="text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed">
            Découvrez l'ambiance raffinée et l'élégance de nos espaces dédiés à votre bien-être
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="relative group overflow-hidden rounded-xl cursor-pointer transform transition-all duration-300 hover:scale-105"
              onClick={() => setSelectedImage(index)}
            >
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg mb-2">{image.title}</h3>
                  <div className="w-12 h-1 bg-amber-500"></div>
                </div>
              </div>
              <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Experience Section */}
        <div className="bg-gradient-to-r from-amber-800/20 to-stone-800/20 rounded-2xl p-8 md:p-12 border border-amber-800/30">
          <div className="text-center">
            <h3 className="text-3xl font-playfair font-bold text-white mb-6">
              Une Expérience Visuelle Unique
            </h3>
            <p className="text-stone-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Chaque espace du Le Cèder Lounge a été pensé pour créer une harmonie parfaite entre esthétique marocaine traditionnelle et confort moderne. Laissez-vous transporter dans un univers de sérénité absolue.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 9.172V5L8 4z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Design Authentique</h4>
                <p className="text-stone-400">Décoration inspirée de l'artisanat marocain traditionnel</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Ambiance Apaisante</h4>
                <p className="text-stone-400">Éclairage tamisé et musique douce pour votre détente</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Propreté Irréprochable</h4>
                <p className="text-stone-400">Standards d'hygiène les plus élevés pour votre sécurité</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for enlarged images */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <img 
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              className="w-full h-full object-contain rounded-lg"
            />
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm transition-colors"
            >
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="absolute bottom-4 left-4 bg-black/50 text-white px-4 py-2 rounded-lg backdrop-blur-sm">
              <h3 className="font-semibold">{galleryImages[selectedImage].title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}