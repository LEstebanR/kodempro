import Image from "next/image";

export function About() {
  return (
    <div className="flex items-center justify-center w-screen" id="about">
      <div className="flex flex-col gap-8   md:border rounded-lg bg-white w-screen md:w-6/12 p-4 shadow-lg border border-primary">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          <Image
            src="https://res.cloudinary.com/lesteban/image/upload/v1748652782/kodempro/trato_rcpvs2.avif"
            alt="consultores"
            width={400}
            height={400}
            className="rounded-lg"
          />
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl">Sobre nosotros</h2>
            <p className="">
              Somos una empresa que se dedica a ofrecer servicios de consultoría
              y desarrollo económico. <br />
              Nos comprometemos a brindar soluciones personalizadas y eficientes
              para impulsar el crecimiento de tu negocio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
