import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
export function HeroSection() {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            Club Français des{" "}
            <span className="text-blue-600">Cryptomonnaies</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            Depuis 2017, le Club Français de la Cryptomonnaie vous guide dans la
            compréhension de la blockchain et des cryptomonnaies. Formations,
            conseils et accompagnement, nos experts vous ouvrent les portes
            d&apos;un secteur en plein essor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="#contact">
              <Button size="lg" className="w-full sm:w-auto">
                Contactez-nous
              </Button>
            </Link>
            <Link href="#about">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                En savoir plus
              </Button>
            </Link>
          </div>
        </div>
        <div className="relative h-64 md:h-96 rounded-lg overflow-hidden order-first md:order-last">
          <div className="absolute inset-0 bg-blue-600 bg-opacity-10 rounded-lg flex items-center justify-center">
            {/* Placeholder for crypto illustration - in a real project we'd use an actual image */}
            <Image src="/cfc.png" alt="CFC Logo" width={1000} height={800} />
          </div>
        </div>
      </div>
    </section>
  );
}
