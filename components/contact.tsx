"use client";

import { useState } from "react";
import { MailIcon, PhoneIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "./ui/button";
import { SERVICES } from "@/lib/data";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const CONTACT_INFO = [
  {
    icon: <PhoneIcon />,
    title: "Teléfono",
    description: "301 270 7999",
  },
  {
    icon: <MailIcon />,
    title: "Email",
    description: "kodempro@gmail.com",
  },
];

export function Contact() {
  const [message, setMessage] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [service, setService] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  async function submitEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    try {
      const templateParams = {
        name: name,
        email: email,
        service: service,
        message: message,
      };

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      toast.success("Mensaje enviado correctamente");
      // Limpiar el formulario
      setName("");
      setEmail("");
      setService("");
      setMessage("");
    } catch (error) {
      console.error("Error al enviar el correo:", error);
      toast.error("Error al enviar el mensaje");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center w-screen bmt-14">
      <div className="py-14 grid grid-cols-1 md:grid-cols-2 gap-12 md:w-6/12 px-4 md:px-0">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl">Contacto</h2>
          <p className="">
            Estamos aquí para ayudarte. Completa el formulario y nos pondremos
            en contacto contigo lo antes posible.
          </p>
          <div className="flex flex-col gap-2">
            {CONTACT_INFO.map((info) => (
              <div className="flex gap-2 items-center" key={info.title}>
                <div className="bg-primary text-white font-bold rounded-full p-1 flex items-center justify-center h-10 w-10">
                  {info.icon}
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-lg font-bold">{info.title}</p>
                  <p className="text-sm text-gray-500">{info.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Card>
          <form className="p-8 flex flex-col gap-4" onSubmit={submitEmail}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div className="flex flex-col gap-2">
                <Label>Nombre</Label>
                <Input
                  type="text"
                  placeholder="Tu nombre"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label>Email</Label>
                <Input
                  type="email"
                  placeholder="Tu email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <Label>Servicio</Label>
            <Select
              value={service}
              onValueChange={(value) => setService(value)}
              required
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecciona un servicio" />
              </SelectTrigger>
              <SelectContent>
                {SERVICES.map((service) => (
                  <SelectItem value={service.title} key={service.id}>
                    {service.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Label>Mensaje</Label>
            <Textarea
              placeholder="Tu mensaje"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <Button className="w-full" type="submit" disabled={isLoading}>
              {isLoading ? "Enviando..." : "Enviar"}
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}
