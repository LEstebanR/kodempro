import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  HomeIcon,
  MenuIcon,
  MessageCircleIcon,
  PresentationIcon,
  UserIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const links = [
  {
    label: "Inicio",
    href: "#hero",
    icon: <HomeIcon />,
  },
  {
    label: "Servicios",
    href: "#services",
    icon: <PresentationIcon />,
  },
  {
    label: "Nosotros",
    href: "#about",
    icon: <UserIcon />,
  },
];

export function Header() {
  return (
    <header className="w-full h-18 fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="container py- flex items-center justify-between mx-auto  px-4 md:px-0 md:w-6/12">
        <Link href="/" className="w-36 flex items-end pt-2">
          <Image
            src="/logos/logonegro.jpg"
            alt="Logo"
            width={100}
            height={50}
            priority
          />
        </Link>

        <div className="hidden md:flex gap-4">
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.label}
              className="hover:text-primary hover:underline transition-all duration-300 underline-offset-4"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <Button className="font-bold hidden md:inline-flex w-36" asChild>
          <Link href="https://wa.me/573012707999">
            <MessageCircleIcon className="w-4 h-4" />
            Contacto
          </Link>
        </Button>
        <div className="md:hidden">
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>
                <MenuIcon className="w-6 h-6" />
              </MenubarTrigger>
              <MenubarContent className="w-screen rounded-t-none mt-2">
                {links.map((link) => (
                  <MenubarItem key={link.label} asChild>
                    <Link href={link.href}>
                      {link.icon}
                      {link.label}
                    </Link>
                  </MenubarItem>
                ))}
                <MenubarSeparator />
                <MenubarItem asChild>
                  <Link
                    href="https://wa.me/573012707999"
                    target="_blank"
                    className="flex items-center gap-2"
                  >
                    <MessageCircleIcon className="w-4 h-4" /> Contacto
                  </Link>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      </div>
    </header>
  );
}
