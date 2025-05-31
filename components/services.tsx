import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SERVICES } from "@/lib/data";

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  id: string;
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <Card
      className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-primary"
      id={`#${service.id}`}
    >
      <CardHeader>
        <div className="flex items-center justify-center gap-4">
          <div className="rounded-full bg-primary p-2 text-white">
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

export function Services() {
  return (
    <div
      className="w-screen flex items-center justify-center mb-14"
      id="services"
    >
      <div className="flex flex-col gap-8 py-14  px-4 md:px-0 md:w-6/12">
        <h2 className="text-5xl text-center">Nuestros servicios</h2>
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
