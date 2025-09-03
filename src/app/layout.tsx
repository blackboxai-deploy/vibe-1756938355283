import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair"
});

export const metadata: Metadata = {
  title: "Le Cèder Lounge SPA - Hammam & Massage Luxe à Casablanca",
  description: "Découvrez l'excellence du spa Le Cèder Lounge à Casablanca. Hammam traditionnel, massages thérapeutiques et soins de luxe dans un cadre raffiné.",
  keywords: "spa casablanca, hammam casablanca, massage casablanca, Le Cèder Lounge, spa luxe maroc",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-stone-50`}>
        {children}
      </body>
    </html>
  );
}