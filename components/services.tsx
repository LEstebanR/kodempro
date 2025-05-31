import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartBarIcon } from "lucide-react";

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  id: string;
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <Card
      className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
      id={`#${service.id}`}
    >
      <CardHeader>
        <div className="flex items-center justify-center gap-4">
          <div className="rounded-full bg-cyan-700 p-2 text-white">
            {service.icon}
          </div>
          <CardTitle>{service.title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p>{service.description}</p>
      </CardContent>
    </Card>
  );
}

const SERVICES = [
  {
    title: "Servicio 1",
    description: "Descripción del servicio 1",
    icon: <ChartBarIcon />,
    id: "service-1",
  },
  {
    title: "Servicio 2",
    description: "Descripción del servicio 2",
    icon: <ChartBarIcon />,
    id: "service-2",
  },
  {
    title: "Servicio 3",
    description: "Descripción del servicio 3",
    icon: <ChartBarIcon />,
    id: "service-3",
  },
  {
    title: "Servicio 4",
    description: "Descripción del servicio 4",
    icon: <ChartBarIcon />,
    id: "service-4",
  },
];

export function Services() {
  return (
    <div
      className="w-screen flex items-center justify-center mb-14"
      id="services"
    >
      <div className="flex flex-col gap-8 py-14 text-center px-4 md:px-0 md:w-6/12">
        <h2 className="text-5xl">Nuestros servicios</h2>
        <p className="text-xl">
          Optimizamos procesos, mejoramos la eficiencia y aumentamos la
          rentabilidad de tu negocio.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
}
