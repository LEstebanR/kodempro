"use client";

import { CheckCircle2, Users, FileCheck, Building2 } from "lucide-react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const KPIData = [
  {
    title: "Proyectos Completados",
    value: "12",
    icon: <CheckCircle2 className="w-8 h-8 text-primary" />,
    description: "Proyectos exitosamente entregados",
  },
  {
    title: "Clientes Felices",
    value: "50",
    icon: <Users className="w-8 h-8 text-primary" />,
    description: "Clientes satisfechos con nuestros servicios",
  },
  {
    title: "Servidores Públicos Cualificados",
    value: "500",
    icon: <Building2 className="w-8 h-8 text-primary" />,
    description: "Funcionarios capacitados en el sector público",
  },
  {
    title: "Procesos de Contratación",
    value: "90",
    icon: <FileCheck className="w-8 h-8 text-primary" />,
    description:
      "Procesos realizados en SECOP I y II, MGA WEB, SGR, PIP, SISPT",
  },
];

export function Kpi() {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div className="w-screen flex items-center justify-center py-14" id="kpi">
      <div className="md:w-6/12 px-4 md:px-0">
        <h2 className="text-5xl mb-10 text-center">Nuestros Logros</h2>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
          {KPIData.map((kpi, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 border border-primary text-center"
              ref={ref}
            >
              <div className="flex items-center justify-center gap-4 mb-4">
                {kpi.icon}
                <h3 className="text-6xl font-semibold text-gray-900">
                  {inView ? (
                    <CountUp
                      end={Number(kpi.value)}
                      duration={1}
                      separator=","
                      decimals={0}
                      prefix=""
                    />
                  ) : (
                    <span className="text-gray-900">{kpi.value}</span>
                  )}
                </h3>
              </div>
              <p className="text-md text-gray-600">{kpi.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
