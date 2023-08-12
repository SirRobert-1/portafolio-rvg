import React from "react";
import Image from "next/image";

function Proyectos() {
  return (
    <div class="h-full md:h-screen px-5 text-white bg-base-200">
      <p class="text-center lg:text-left text-4xl py-5">Proyectos</p>

      <div class="flex flex-col md:flex-row items-center justify-center md:justify-around md:my-24">
        <a
          className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          href="https://rb-construccion.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="card w-96 bg-base-100 shadow-xl rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <figure>
              <Image src="/LogoRb.svg" width={200} height={200} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h1 className="text-center text-xl">Rb Construcción</h1>
            </div>
          </div>
        </a>
        <a
          className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          href="https://rb-construccion.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="card w-96 bg-base-100 shadow-xl rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <figure>
              <Image src="/LogoRb.svg" width={200} height={200} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h1 className="text-center text-xl">Rb Construcción</h1>
            </div>
          </div>
        </a>
        <a
          className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          href="https://rb-construccion.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="card w-96 bg-base-100 shadow-xl rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <figure>
              <Image src="/LogoRb.svg" width={200} height={200} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h1 className="text-center text-xl">Rb Construcción</h1>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Proyectos;
