import React from "react";
import Image from "next/image";

function CardTecnologia(tecnologia) {
  return (
    <div className="group h-96 w-96 [perspective:1000px] cursor-pointer m-8 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
      <div className="relative h-full w-full rounded-x1 shadow-xl transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className="absolute inset-0 [backface-visibility:hidden] flex flex-col items-center justify-center">
          <Image
            className="rounded-xl mb-5"
            src={tecnologia.imagen}
            width={100}
            height={100}
            alt=""
          />
          <h1 className="text-xl">{tecnologia.titulo}</h1>
        </div>
        <div className="absolute flex flex-col items-center justify-center inset-0 h-full w-full rounded-xl text-white px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <h1 className="card-title text-xl mb-5">{tecnologia.titulo}</h1>
          <p>{tecnologia.texto}</p>
        </div>
      </div>
    </div>
  );
}

export default CardTecnologia;
