import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Clients } from "@/components/clients";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <section id="services" aria-label="Nuestros servicios">
        <Services />
      </section>
      <section id="about" aria-label="Sobre nosotros">
        <Clients />
      </section>
      <section id="contact" aria-label="Contacto">
        <Contact />
      </section>
    </>
  );
}
