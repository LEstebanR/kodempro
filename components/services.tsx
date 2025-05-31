import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartBarIcon,
  ComputerIcon,
  HandCoinsIcon,
  PresentationIcon,
  TrendingUpIcon,
  UserIcon,
} from "lucide-react";

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

const SERVICES = [
  {
    title: "Consultoría especializada",
    description:
      "Sabemos la importancia de promover el desarrollo social y de atender las necesidades insatisfechas de la población. Te brindamos toda la consultoría especializada para el sector público y privado: seguimiento, monitoreo y evaluación de los planes de desarrollo, planes de acción, planes estratégicos y planes de ordenamiento territorial",
    icon: <PresentationIcon />,
    id: "service-1",
  },
  {
    title: "Cualificación de funcionarios públicos",
    description:
      "Capacitamos física y virtualmente a funcionarios y/o comtratistas. Si deseas prestar tus servicios en entidades territoriales y requieres fortalecer tus conocimientos en la dinámica pública en los niveles asistencial, técnico y profesional",
    icon: <UserIcon />,
    id: "service-2",
  },
  {
    title: "Desarrollo de software",
    description:
      "Ofrecemos el servicio de desarrollo de soluciones tecnológicas para empresas del sector público y privado, esto partiendo de los requerimientos del cliente bajo el enfoque de mejora continua",
    icon: <ComputerIcon />,
    id: "service-3",
  },
  {
    title: "Creamos estrategias de recuperación de cartera",
    description:
      "Te ayudamos a evitar el vencimiento de las cuentas por cobrar. El acompañamiento en la implementación de nuevas estrategias de cobro coactivo y cobro persuasivo de los diferentes tributos municipales, lo que garantiza un aumento del recaudo del municipio y mayor liquidez para la inversión en los proyectos estratégicos de la entidad",
    icon: <TrendingUpIcon />,
    id: "service-4",
  },
  {
    title: "Comercialización de software",
    description:
      "Comercializamos las soluciones web propias y aplicaciones de terceros debidamente autorizadas para su venta bajo los estándares requeridos por nuestros clientes",
    icon: <HandCoinsIcon />,
    id: "service-5",
  },
  {
    title: "Fortalecimiento y desarrollo de proyectos",
    description:
      "Suministramos insumos, materiales, herramientas para el fortalecimiento y desarrollo de proyectos en entidades públicas y privadas al costo justo y con la calidad y oportunidades requeridas",
    icon: <ChartBarIcon />,
    id: "service-6",
  },
];

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
