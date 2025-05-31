import { Heart } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <div className="bg-sky-900 w-full py-4">
      <div className="container mx-auto px-4 md:px-0 md:w-6/12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col gap-4">
            <p className="text-white text-2xl font-bold">LOGO</p>
            <p className="text-slate-300">
              Consultores en proyectos, desarrollo económico y emprendimiento.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-white text-2xl font-bold">Servicios</p>
            <div className="flex flex-col gap-1">
              <Link
                href="#services"
                className="text-slate-300 hover:text-white transition-all duration-300 hover:underline underline-offset-4"
              >
                Servicio 1
              </Link>
              <Link
                href="#services"
                className="text-slate-300 hover:text-white transition-all duration-300 hover:underline underline-offset-4"
              >
                Servicio 2
              </Link>
              <Link
                href="#services"
                className="text-slate-300 hover:text-white transition-all duration-300 hover:underline underline-offset-4"
              >
                Servicio 3
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4 ">
            <p className="text-white text-2xl font-bold">Empresa</p>
            <div className="flex flex-col gap-1">
              <Link
                href="#services"
                className="text-slate-300 hover:text-white transition-all duration-300 hover:underline underline-offset-4"
              >
                Lo que hacemos
              </Link>

              <Link
                href="#clients"
                className="text-slate-300 hover:text-white transition-all duration-300 hover:underline underline-offset-4"
              >
                Nuestros clientes
              </Link>
            </div>
          </div>
        </div>
        <div className="z-10 flex flex-wrap items-center justify-center gap-x-1 gap-y-3 sm:gap-x-2 mt-14">
          <div className="flex items-center gap-x-1 text-xs sm:text-base">
            <span className="text-slate-300">Hecho con</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span className="text-slate-300">por</span>
            <Link
              href="https://github.com/LEstebanR/lesteban"
              className="text-slate-300 hover:text-primary transition-all duration-300 hover:underline underline-offset-4"
            >
              LEstebanR
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
