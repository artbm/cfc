import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Handshake, Users } from "lucide-react";

export function StatsSection() {
  return (
    <section id="stats" className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Notre impact en chiffres
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez l&apos;ampleur de notre communauté et nos réalisations
            dans l&apos;écosystème crypto français.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard
            icon={<Users className="h-8 w-8 text-blue-600" />}
            value="10,000+"
            label="Membres actifs"
            description="Passionnés de crypto et de blockchain"
          />

          <StatCard
            icon={<Calendar className="h-8 w-8 text-blue-600" />}
            value="15+"
            label="Événements organisés"
            description="Conférences, ateliers et webinaires"
          />

          <StatCard
            icon={<Handshake className="h-8 w-8 text-blue-600" />}
            value="5+"
            label="Partenariats"
            description="Collaborations avec des acteurs clés"
          />
        </div>
      </div>
    </section>
  );
}

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  description: string;
}

function StatCard({ icon, value, label, description }: StatCardProps) {
  return (
    <Card>
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="mb-4 p-3 bg-blue-100 rounded-full">{icon}</div>
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          {value}
        </h3>
        <p className="text-xl font-medium text-blue-600 mb-1">{label}</p>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
}
