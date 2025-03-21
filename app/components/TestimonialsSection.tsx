"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { useState } from "react";

interface Testimonial {
  id: number;
  content: string;
  author: string;
  role: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    content:
      "Le CFC a été une ressource inestimable dans mon parcours d'apprentissage des cryptomonnaies. Les événements et la communauté sont d'une qualité exceptionnelle.",
    author: "Sophie Martin",
    role: "Investisseur particulier",
    avatar: "/avatars/sophie.png",
  },
  {
    id: 2,
    content:
      "Grâce aux ateliers du CFC, j'ai pu approfondir mes connaissances en DeFi et rencontrer des acteurs majeurs de l'écosystème crypto français.",
    author: "Thomas Dubois",
    role: "Développeur blockchain",
    avatar: "/avatars/thomas.png",
  },
  {
    id: 3,
    content:
      "En tant que startup dans la blockchain, notre partenariat avec le CFC nous a permis de nous connecter avec un réseau de qualité et d'accélérer notre développement.",
    author: "Julie Leroux",
    role: "CEO, CryptoStart",
    avatar: "/avatars/julie.png",
  },
  {
    id: 4,
    content:
      "Le niveau d'expertise et la bienveillance de la communauté CFC sont remarquables. Un véritable catalyseur pour l'adoption des cryptomonnaies en France.",
    author: "Marc Leroy",
    role: "Analyste financier",
    avatar: "/avatars/marc.png",
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const displayCount = 3;

  const visibleTestimonials = () => {
    const displayItems: Testimonial[] = [];
    for (let i = 0; i < displayCount; i++) {
      const index = (currentIndex + i) % testimonials.length;
      displayItems.push(testimonials[index]);
    }
    return displayItems;
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ils nous font confiance
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez les témoignages de nos membres et partenaires qui font
            partie de l&apos;aventure CFC.
          </p>
        </div>

        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {visibleTestimonials().map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        <div className="md:hidden">
          <TestimonialCard testimonial={testimonials[currentIndex]} />
        </div>

        <div className="flex justify-center mt-8 gap-4">
          <button
            onClick={goToPrevious}
            className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
            aria-label="Témoignage précédent"
          >
            <ArrowLeft size={20} />
          </button>
          <button
            onClick={goToNext}
            className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
            aria-label="Témoignage suivant"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <Quote className="h-8 w-8 text-blue-600 mb-4" />
        <p className="text-gray-700 mb-6 flex-grow">
          &ldquo;{testimonial.content}&rdquo;
        </p>
        <div className="flex items-center">
          <Avatar className="h-12 w-12 mr-4">
            <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
            <AvatarFallback>
              {testimonial.author
                .split(" ")
                .map((n: string) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-medium text-gray-900">{testimonial.author}</h4>
            <p className="text-gray-600 text-sm">{testimonial.role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
