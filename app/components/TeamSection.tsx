import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Twitter } from "lucide-react";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  social: {
    twitter?: string;
    linkedin?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Ihsan Gibert",
    role: "Fondateur",
    bio: "Architecte d’affaires et du commerce, explorateur des cryptomonnaies, de la blockchain, de la science et de l’informatique quantique. Curieux insatiable, passionné par l’IA et l’innovation.",
    avatar: "/team/ihsan.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/i-san-33696496/",
    },
  },
  {
    id: 2,
    name: "Quentin Lenfle",
    role: "Secrétaire général",
    bio: "",
    avatar: "/team/quentin-lenfle.jpg",
    social: {
      linkedin: "",
    },
  },
  {
    id: 3,
    name: "Amine Haddadi",
    role: "Directeur financier",
    bio: "",
    avatar: "/team/amine.png",
    social: {
      linkedin: "https://www.linkedin.com/in/amine-haddadi-87274664/",
    },
  },
  {
    id: 4,
    name: "Romain Daubigny",
    role: "Juriste / spécialiste Blockchain",
    bio: "",
    avatar: "/team/romain-daubigny.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/romain-daubigny-8a062783/",
    },
  },
  {
    id: 5,
    name: "Dylan Tarquini",
    role: "Administrateur",
    bio: "",
    avatar: "/team/dylan.png",
    social: {
      linkedin: "https://www.linkedin.com/in/dylan-tarquini/",
    },
  },

  {
    id: 6,
    name: "Arthur Bensimon",
    role: "Superviseur technique",
    bio: "",
    avatar: "/team/arthur-bensimon.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/arthur-bensimon/",
    },
  },
  {
    id: 7,
    name: "Damien Rumiano",
    role: "Développeur full stack",
    bio: "",
    avatar: "/team/damien.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/damien-rumiano-a4a19525/",
    },
  },
  {
    id: 8,
    name: "Jordan NGK",
    role: "Développeur Python / ML",
    bio: "",
    avatar: "/team/jordan.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/jordan-ngk-199098130/",
    },
  },
  {
    id: 9,
    name: "Julien",
    role: "Développeur Python",
    bio: "",
    avatar: "",
    social: {
      linkedin: "#",
    },
  },

  {
    id: 10,
    name: "Marc Antoine Caen Poletti",
    role: "Directeur des études",
    bio: "",
    avatar: "/team/marc-antoine.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/marco-marketing-crypto/",
    },
  },

  {
    id: 11,
    name: "Guillaume Delawoevre",
    role: "Consultant",
    bio: "",
    avatar: "/team/guillaume.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/delawoevre-guillaume/",
    },
  },
  {
    id: 12,
    name: "Antoine",
    role: "Consultant",
    bio: "",
    avatar: "/team/antoine.jpg",
    social: {
      linkedin: "#",
    },
  },
];

export function TeamSection() {
  return (
    <section id="team" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Notre équipe
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez les passionnés qui font vivre le Club français des
            cryptomonnaies au quotidien.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface TeamMemberCardProps {
  member: TeamMember;
}

function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <Card className="h-full">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <Avatar className="h-24 w-24 mb-4">
          <AvatarImage src={member.avatar} alt={member.name} />
          <AvatarFallback>
            {member.name
              .split(" ")
              .map((n: string) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
        <p className="text-blue-600 font-medium mb-3">{member.role}</p>
        <p className="text-gray-600 mb-4 text-sm">{member.bio}</p>

        <div className="flex space-x-3">
          {member.social.twitter && (
            <a
              href={member.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Twitter de ${member.name}`}
              className="text-gray-500 hover:text-blue-500 transition-colors"
            >
              <Twitter size={20} />
            </a>
          )}
          {member.social.linkedin && (
            <a
              href={member.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`LinkedIn de ${member.name}`}
              className="text-gray-500 hover:text-blue-700 transition-colors"
            >
              <Linkedin size={20} />
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
