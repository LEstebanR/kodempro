"use client";

import { CLIENTS_OPTIONS } from "@/lib/data";
import { OpinionCard } from "@/components/opinion-card";

export function Clients() {
  const duplicatedClients = [...CLIENTS_OPTIONS, ...CLIENTS_OPTIONS];
  return (
    <div className="w-screen flex items-center justify-center" id="clients">
      <div className="flex flex-col gap-8 py-14 text-center w-full">
        <h2 className="text-5xl">Lo que dicen nuestros clientes</h2>
        <p className="text-xl">
          Hemos ayudado a muchas empresas a crecer y a mejorar su rentabilidad.
        </p>
        <div className="relative overflow-hidden w-full">
          <div className="flex animate-scroll gap-8">
            {duplicatedClients.map((opinion, index) => (
              <div
                key={`${index}-${opinion.name}`}
                className="flex-shrink-0 w-[300px] px-4"
              >
                <OpinionCard opinion={opinion} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
