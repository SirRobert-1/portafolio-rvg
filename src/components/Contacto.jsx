import React from "react";

function Contacto() {
  return (
    <div className="hero h-full md:min-h-screen bg-base-200 flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 flex flex-col items-center p-10">
        <h1 className="text-5xl font-bold mb-5">Contáctame</h1>
        <span className="mb-2">22 81 60 40 84</span>
        <span>rviverosgonzalez@gmail.com</span>
      </div>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 m-10 md:m-20">
        <h1 className="text-center text-2xl m-5">Contáctame por correo</h1>
        <div className="card-body">
          <div className="form-control mb-5">
            <input
              type="text"
              placeholder="Nombre"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mb-5">
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mb-5">
            <input
              type="textarea"
              placeholder="Mensaje"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Contáctame</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
