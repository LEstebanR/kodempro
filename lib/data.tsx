import {
  ComputerIcon,
  PresentationIcon,
  UserIcon,
  TrendingUpIcon,
  HandCoinsIcon,
  ChartBarIcon,
} from "lucide-react";

export const SERVICES = [
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
  {
    title: "Asistencia virtual",
    description:
      "Ofrecemos asistencia virtual para el fortalecimiento y desarrollo de proyectos en entidades públicas y privadas de cualquier país al costo justo y con la calidad y oportunidades requeridas. 18-30 $USD/h",
    icon: <UserIcon />,
    id: "service-7",
  },
];

export const CLIENTS_OPTIONS = [
  {
    name: "Personería",
    company: "Santa Bárbara",
    fallback: "SB",
    description:
      "Kodempro transformó nuestra idea en una aplicación web funcional en tiempo récord. Su equipo es profesional y altamente capacitado.",
    position: "Alcaldía",
    avatar: "/logos/alcaldia-sb.jpg",
  },
  {
    name: "Alcaldía",
    company: "Salgar",
    fallback: "S",
    description:
      "Kodempro transformó nuestra idea en una aplicación web funcional en tiempo récord. Su equipo es profesional y altamente capacitado.",
    position: "Alcaldía",
    avatar: "/logos/salgar.jpg",
  },
  {
    name: "Personería",
    company: "Entrerrios",
    fallback: "E",
    description:
      "Kodempro transformó nuestra idea en una aplicación web funcional en tiempo récord. Su equipo es profesional y altamente capacitado.",
    position: "Alcaldía",
    avatar: "/logos/entrerrios.jpg",
  },
  {
    name: "Alcaldía",
    company: "La Pintada",
    fallback: "LP",
    description:
      "Kodempro transformó nuestra idea en una aplicación web funcional en tiempo récord. Su equipo es profesional y altamente capacitado.",
    position: "Alcaldía",
    avatar: "/logos/la_pintada.jpg",
  },
  {
    name: "Carlos Montoya",
    company: "Universidad de Medellín",
    fallback: "UM",
    description:
      "Kodempro transformó nuestra idea en una aplicación web funcional en tiempo récord. Su equipo es profesional y altamente capacitado.",
    position: "Profesor",
    avatar: "/logos/udem.jpg",
  },
  {
    name: "Juan Martinez",
    company: "Compuhora",
    fallback: "JA",
    description:
      "Kodempro transformó nuestra idea en una aplicación web funcional en tiempo récord. Su equipo es profesional y altamente capacitado.",
    position: "CEO",
    avatar: "/logos/compuhora.jpg",
  },
];
