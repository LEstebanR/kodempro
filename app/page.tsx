import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Clients } from "@/components/clients";
import { Contact } from "@/components/contact";
import { About } from "@/components/about";
import { Kpi } from "@/components/kpi";

export default function Home() {
  return (
    <>
      <Hero />
      <section id="services" aria-label="Nuestros servicios">
        <Services />
      </section>
      <section>
        <Kpi />
      </section>
      <section id="about" aria-label="Sobre nosotros">
        <About />
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
