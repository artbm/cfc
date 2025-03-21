import Image from "next/image";
export function AboutSection() {
  return (
    <section id="about" className="py-16 px-4 bg-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            À propos du CFC
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez notre mission et notre vision pour l&apos;avenir des
            cryptomonnaies en France.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden order-last md:order-first">
            <div className="absolute inset-0 bg-opacity-10 rounded-lg flex items-center justify-center">
              <Image
                src="/david-tedx.png"
                alt="CFC Logo"
                width={1000}
                height={800}
              />
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">
              Le Club français des cryptomonnaies
            </h3>
            <p className="text-gray-700">
              Fondé en 2017 par Ihsan GIBERT et David PRINÇAY, le Club Français
              de la Cryptomonnaie (CFC) est une association qui réunit
              passionnés, experts et curieux autour des technologies blockchain
              et cryptomonnaies.
            </p>
            <p className="text-gray-700">
              Notre mission est de démocratiser l&apos;accès aux connaissances
              sur les cryptomonnaies, favoriser les échanges entre les acteurs
              de l&apos;écosystème et promouvoir le développement de projets
              blockchain innovants en France.
            </p>
            <p className="text-gray-700">
              Grâce à nos événements réguliers, nos formations et notre
              communauté active, nous contribuons à faire de la France un acteur
              majeur dans l&apos;univers des cryptomonnaies et de la blockchain.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
