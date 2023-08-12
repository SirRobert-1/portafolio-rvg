import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Proyectos from "@/components/Proyectos";
import Contacto from "@/components/Contacto";
import Experiencia from "@/components/Experiencia";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Experiencia />
      <Proyectos />
      <Contacto />
    </div>
  );
}
