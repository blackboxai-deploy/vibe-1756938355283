"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    alert('Merci pour votre message! Nous vous contacterons bientôt.');
    
    // Reset form
    setFormData({
      nom: '',
      email: '',
      telephone: '',
      service: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-stone-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-stone-800 mb-6">
            Réservez Votre Moment de Bien-être
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Contactez-nous pour réserver votre expérience au Le Cèder Lounge ou pour toute information
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-playfair text-stone-800">
                Formulaire de Réservation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nom" className="block text-sm font-medium text-stone-700 mb-2">
                    Nom Complet *
                  </label>
                  <Input
                    id="nom"
                    name="nom"
                    type="text"
                    value={formData.nom}
                    onChange={handleChange}
                    required
                    className="border-stone-300 focus:border-amber-500 focus:ring-amber-500"
                    placeholder="Votre nom complet"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-stone-300 focus:border-amber-500 focus:ring-amber-500"
                    placeholder="votre.email@exemple.com"
                  />
                </div>

                <div>
                  <label htmlFor="telephone" className="block text-sm font-medium text-stone-700 mb-2">
                    Téléphone
                  </label>
                  <Input
                    id="telephone"
                    name="telephone"
                    type="tel"
                    value={formData.telephone}
                    onChange={handleChange}
                    className="border-stone-300 focus:border-amber-500 focus:ring-amber-500"
                    placeholder="+212 6XX XXX XXX"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-stone-700 mb-2">
                    Service Souhaité
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  >
                    <option value="">Sélectionnez un service</option>
                    <option value="hammam">Hammam Traditionnel</option>
                    <option value="massage">Massage Thérapeutique</option>
                    <option value="forfait">Forfait Premium</option>
                    <option value="consultation">Consultation Personnalisée</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="border-stone-300 focus:border-amber-500 focus:ring-amber-500 resize-none"
                    placeholder="Précisez vos préférences, dates souhaitées, ou toute question..."
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-amber-800 hover:bg-amber-900 text-white py-3 text-lg font-medium"
                >
                  Envoyer la Demande
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Location Card */}
            <Card className="shadow-lg border-0 bg-gradient-to-br from-amber-50 to-stone-50">
              <CardHeader>
                <CardTitle className="text-2xl font-playfair text-stone-800 flex items-center">
                  <svg className="w-6 h-6 mr-3 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Notre Adresse
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-stone-700 mb-4 leading-relaxed">
                  <strong>Le Cèder Lounge SPA</strong><br />
                  Boulevard Mohammed V<br />
                  Quartier des Habous<br />
                  20000 Casablanca, Maroc
                </p>
                <p className="text-stone-600 text-sm">
                  Facilement accessible en voiture ou en transport en commun, avec parking privé disponible.
                </p>
              </CardContent>
            </Card>

            {/* Contact Details */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-playfair text-stone-800 flex items-center">
                  <svg className="w-6 h-6 mr-3 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Contact Direct
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-stone-800 mb-2">Téléphone</h4>
                  <p className="text-stone-700">+212 522 XX XX XX</p>
                  <p className="text-stone-700">+212 661 XX XX XX</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-stone-800 mb-2">Email</h4>
                  <p className="text-stone-700">contact@lecederlounge.ma</p>
                  <p className="text-stone-700">reservation@lecederlounge.ma</p>
                </div>

                <div>
                  <h4 className="font-semibold text-stone-800 mb-2">Réseaux Sociaux</h4>
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
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hours */}
            <Card className="shadow-lg border-0 bg-stone-800 text-white">
              <CardHeader>
                <CardTitle className="text-2xl font-playfair flex items-center">
                  <svg className="w-6 h-6 mr-3 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Horaires d'Ouverture
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Lundi - Samedi</span>
                    <span className="text-amber-300">9h00 - 21h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dimanche</span>
                    <span className="text-amber-300">10h00 - 20h00</span>
                  </div>
                  <div className="pt-3 border-t border-stone-600">
                    <p className="text-stone-300 text-sm">
                      Réservation recommandée. Dernière admission 2h avant la fermeture.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}