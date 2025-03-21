"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full py-4 px-4 md:px-8 bg-white shadow-sm fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="font-bold text-xl text-blue-600">
          CFC
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="#about"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            À propos
          </Link>
          <Link
            href="#stats"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Statistiques
          </Link>
          {/*<Link
            href="#testimonials"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Témoignages
          </Link>*/}
          <Link
            href="#team"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Équipe
          </Link>
          <Link
            href="#contact"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md py-4 px-4 flex flex-col gap-4 z-50">
            <Link
              href="#about"
              className="text-gray-700 hover:text-blue-600 transition-colors py-2"
              onClick={toggleMenu}
            >
              À propos
            </Link>
            <Link
              href="#stats"
              className="text-gray-700 hover:text-blue-600 transition-colors py-2"
              onClick={toggleMenu}
            >
              Statistiques
            </Link>
            <Link
              href="#testimonials"
              className="text-gray-700 hover:text-blue-600 transition-colors py-2"
              onClick={toggleMenu}
            >
              Témoignages
            </Link>
            <Link
              href="#team"
              className="text-gray-700 hover:text-blue-600 transition-colors py-2"
              onClick={toggleMenu}
            >
              Équipe
            </Link>
            <Link
              href="#contact"
              className="text-gray-700 hover:text-blue-600 transition-colors py-2"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Button variant="default" className="w-full mt-2">
              Rejoindre
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
