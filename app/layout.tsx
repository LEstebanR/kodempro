import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kodempro - Consultores en Proyectos y Desarrollo Económico",
  description:
    "Consultores especializados en proyectos, desarrollo económico y emprendimiento. Ofrecemos soluciones estratégicas para promover el crecimiento sostenible y la competitividad.",
  keywords:
    "consultoría, desarrollo económico, emprendimiento, proyectos, optimización de procesos, eficiencia empresarial",
  authors: [{ name: "Kodempro" }],
  openGraph: {
    title: "Kodempro - Consultores en Proyectos y Desarrollo Económico",
    description:
      "Consultores especializados en proyectos, desarrollo económico y emprendimiento. Soluciones estratégicas para el crecimiento sostenible.",
    type: "website",
    locale: "es_ES",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased grid min-h-dvh grid-rows-[auto_1fr_auto] w-full mx-auto bg-gray-50`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
