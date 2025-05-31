import { Check, MessageCircleIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <div
      className="flex flex-col items-center justify-center  w-screen  mt-14"
      id="hero"
    >
      <div className="py-14 grid grid-cols-1 md:grid-cols-2 gap-12 md:w-6/12 px-4 md:px-0 items-center">
        <div className="flex flex-col gap-4">
          <h2 className="text-6xl font-bold text-primary text-shadow-lg">
            Kodempro
          </h2>
          <p className="text-2xl">
            Transformamos proyectos y negocios con soluciones
          </p>
          <p>
            Consultores en proyectos, desarrollo económico y emprendimiento.
            Ofrecemos soluciones estratégicas para promover el crecimiento
            sostenible y la competitividad en diferentes sectores.
          </p>
          <Button asChild>
            <Link
              href="https://wa.me/573012707999"
              target="_blank"
              className="flex items-center gap-2"
            >
              <MessageCircleIcon className="w-4 h-4" />
              Contacto
            </Link>
          </Button>
          <div className="flex gap-4 justify-between flex-wrap">
            <div className="flex gap-1 ">
              <div className="rounded-full bg-primary p-1 flex items-center justify-center">
                <Check className="w-4 h-4 text-white  " />
              </div>
              <p>Confiables</p>
            </div>
            <div className="flex gap-1">
              <div className="rounded-full bg-primary p-1 flex items-center justify-center">
                <Check className="w-4 h-4 text-white  " />
              </div>
              <p>Experimentados</p>
            </div>
            <div className="flex gap-1">
              <div className="rounded-full bg-primary p-1 flex items-center justify-center">
                <Check className="w-4 h-4 text-white  " />
              </div>
              <p>Profesionales</p>
            </div>
          </div>
        </div>

        <Image
          src="https://res.cloudinary.com/lesteban/image/upload/v1748650434/kodempro/consultores.jpg"
          alt="consultores"
          width={400}
          height={400}
          className="rounded-lg"
        />
      </div>
    </div>
  );
}
