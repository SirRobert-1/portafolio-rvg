import React from "react";
import Image from "next/image";

function About() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col md:flex-row">
        <div className="w-full md:w-1/2 m-5">
          <p className="my-5 text-3xl font-semibold">My specialization</p>
          <p className="font-bold text-2xl">
            I am a trending designer who cares about the details
          </p>
          <div className="my-10">
            <ul>
              <li className="mb-5">01. HOME DESIGN</li>
              <li className="mb-5">02. COMMERCIAL DESIGN</li>
              <li className="mb-5">03. PRODUCT DESIGN</li>
              <li className="mb-5">04. WEBSITE DESIGN</li>
              <li className="mb-5">05. LANDSCAPE DESIGN</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center items-center px-5 w-full md:w-1/2">
          <Image src="/foto.jpg" width={400} height={400} alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;
