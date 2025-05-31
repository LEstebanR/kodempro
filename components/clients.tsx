import { StarIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Opinion {
  name: string;
  description: string;
  icon: React.ReactNode;
  avatar: string;
  position: string;
  fallback: string;
  company: string;
}

const OPINIONS = [
  {
    name: "Jhon Doe",
    company: "ACME",
    fallback: "AC",
    description:
      "Kodempro transformó nuestra idea en una aplicación web funcional en tiempo récord. Su equipo es profesional y altamente capacitado.",
    icon: <StarIcon />,
    position: "CEO ",
    avatar:
      "https://res.cloudinary.com/lesteban/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1748655846/kodempro/avatar_echm3i.avif",
  },
  {
    name: "Jhon Adams",
    company: "ACME",
    fallback: "AC",
    description:
      "La consultoría IT de Kodempro nos ayudó a optimizar nuestros procesos y reducir costos. Recomendamos sus servicios sin dudarlo.",
    position: "CEO",
    icon: <StarIcon />,
    avatar:
      "https://res.cloudinary.com/lesteban/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1748655846/kodempro/avatar_echm3i.avif",
  },
  {
    name: "Jhon Smith",
    company: "ACME",
    fallback: "AC",
    description:
      "Los cursos de formación de Kodempro han sido fundamentales para que nuestro equipo se actualice en las últimas tecnologías.",
    icon: <StarIcon />,
    position: "CTO",
    avatar:
      "https://res.cloudinary.com/lesteban/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1748655846/kodempro/avatar_echm3i.avif",
  },
  {
    name: "Jhonn Adams",
    company: "ACME",
    fallback: "AC",
    description:
      "La consultoría IT de Kodempro nos ayudó a optimizar nuestros procesos y reducir costos. Recomendamos sus servicios sin dudarlo.",
    position: "CEO",
    icon: <StarIcon />,
    avatar:
      "https://res.cloudinary.com/lesteban/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1748655846/kodempro/avatar_echm3i.avif",
  },
];

function OpinionCard({ opinion }: { opinion: Opinion }) {
  return (
    <Card className="shadow-lg">
      <CardHeader className="flex gap-4 items-center">
        <Avatar className="w-14 h-14">
          <AvatarImage src={opinion.avatar} alt={opinion.name} />
          <AvatarFallback>{opinion.fallback}</AvatarFallback>
        </Avatar>
        <CardTitle>
          <p>{opinion.name}</p>
          <p className="text-sm text-gray-500">
            {opinion.position} de {opinion.company}
          </p>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 text-start h-full">
        <p>{opinion.description}</p>
        <div className="flex gap-2 items-center mt-auto">
          {Array.from({ length: 5 }).map((_, index) => (
            <StarIcon key={index} className="w-4 h-4 text-yellow-500" />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export function Clients() {
  return (
    <div className="w-screen flex items-center justify-center" id="clients">
      <div className="flex flex-col gap-8 py-14 text-center px-4 md:px-0 md:w-6/12">
        <h2 className="text-5xl">Lo que dicen nuestros clientes</h2>
        <p className="text-xl">
          Hemos ayudado a muchas empresas a crecer y a mejorar su rentabilidad.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {OPINIONS.map((opinion) => (
            <OpinionCard key={opinion.name} opinion={opinion} />
          ))}
        </div>
      </div>
    </div>
  );
}
