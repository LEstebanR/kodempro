import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { About } from "@/components/about";
import { Clients } from "@/components/clients";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <div className="container h-full w-full flex flex-col items-center justify-center mx-auto ">
      <Hero />
      <Services />
      <About />
      <Clients />
      <Contact />
    </div>
  );
}
