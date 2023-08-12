import React from "react";
import Image from "next/image";

function CardTecnologia(tecnologia) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl m-8 rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
      <figure className="px-10 pt-10">
        <Image
          src={tecnologia.imagen}
          className="rounded-xl"
          width={100}
          height={100}
          alt=""
        />
      </figure>
      <div className="card-body items-center text-center">
        <h1 className="card-title">{tecnologia.titulo}</h1>
        <p>{tecnologia.texto}</p>
      </div>
    </div>
  );
}

export default CardTecnologia;
