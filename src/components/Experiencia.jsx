import React from "react";
import Slider from "react-slick";
import CardTecnologia from "./CardTecnologia";

const tecnologias = [
  {
    imagen: "/Html.png",
    titulo: "HTML",
    texto:
      "HTML es un lenguaje de marcado que se utiliza para el desarrollo de páginas de Internet. Se trata de la sigla que corresponde a HyperText Markup Language, que podría traducirse como Lenguaje de Formato de Documentos para Hipertexto.",
  },
  {
    imagen: "/Css.png",
    titulo: "CSS",
    texto:
      "CSS es un lenguaje de diseño gráfico para definir y crear la presentación de un documento estructurado escrito en un lenguaje de marcado.",
  },
  {
    imagen: "/JavaScript.png",
    titulo: "Javascript",
    texto:
      "JavaScript es un lenguaje de programación que se utiliza principalmente para crear páginas web dinámicas.",
  },
  {
    imagen: "/vue.png",
    titulo: "Vue",
    texto:
      "Vue.js es un framework de JavaScript de código abierto para crear interfaces de usuario y aplicaciones de una sola página.",
  },
  {
    imagen: "/nuxt.png",
    titulo: "Nuxt",
    texto:
      "Nuxt.js es un framework de código abierto de Vue.js que se utiliza para crear aplicaciones web.",
  },
  {
    imagen: "/vuetify.png",
    titulo: "Vuetify",
    texto:
      "Vuetify es un framework de código abierto de Vue.js que se utiliza para crear aplicaciones web.",
  },
  {
    imagen: "/react.png",
    titulo: "React",
    texto:
      "React es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página.",
  },
  {
    imagen: "/next.png",
    titulo: "Next",
    texto:
      "Next.js es un framework de código abierto de React que se utiliza para crear aplicaciones web.",
  },
  {
    imagen: "/tailwind.jpg",
    titulo: "Tailwind",
    texto:
      "Tailwind CSS es un framework CSS de código abierto que se puede utilizar para crear diseños personalizados y receptivos para sitios web.",
  },
  {
    imagen: "/daisyui.png",
    titulo: "DaisyUI",
    texto:
      "DaisyUI es un framework CSS de código abierto que se puede utilizar para crear diseños personalizados y receptivos para sitios web.",
  },
];

function Experiencia() {
  var settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    draggable: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          filter: "invert(1)",
        }}
        onClick={onClick}
      ></div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          filter: "invert(1)",
        }}
        onClick={onClick}
      ></div>
    );
  }
  return (
    <div className="bg-base-200 flex flex-col items-center">
      <h1 className="text-4xl text-center">Experiencia</h1>
      <div className="flex flex-wrap">
        {tecnologias.map((tecnologia, index) => (
          <CardTecnologia
            key={index}
            imagen={tecnologia.imagen}
            titulo={tecnologia.titulo}
            texto={tecnologia.texto}
          />
        ))}
      </div>
    </div>
  );
}

export default Experiencia;
