import React, { useState,useEffect} from "react";


import gsap from "gsap";

export default function Navbar() {
 const [stateMenu, setStateMenu]= useState(false)

   useEffect(() => {

    if (stateMenu) {
      gsap.to("#stick", {
        rotation: 45,
      });
      gsap.to("#cnt", {
        height: 1,
        marginTop: 0,
      });
      gsap.to("#stick1", {
        visibility: "hidden",
      });
      gsap.to("#stick2", {
        rotation: -45,
        ease: "circ.out(1.7)",
      });
      gsap.to("#cnt", {
        gap: 0,
        ease: "circ.out(1.7)",
      });
    } else {
      gsap.to("#cnt", {
        height: "50px",    
        gap: 2,
        marginTop: "5px",
        ease: "circ.out(1.7)",
      });
      gsap.to("#stick", {
        rotation: 0,
        background: "white",
      });
      gsap.to("#stick1", {
        visibility: "visible",
        rotation: 0,
        background: "white",
      });
      gsap.to("#stick2", {
        rotation: 0,
        background: "white",
      });
    }
  }, [stateMenu]); 
  return (
    <main className="fixed   lg:flex w-screen h-10">
      <nav className=" hidden w-full h-full bg-orange-300/[0.1]  backdrop-blur-md lg:flex justify-between gap-5 py-5 px-10">
        <div>
          <img
            src="assets/logo.webp"
            width={50}
            alt="img-logo"
            className="mt-10"
          />
        </div>
        <div className="flex gap-5">
          <li>Página principal</li>
          <li>Personalización</li>
          <li>Cursos</li>
          <li>Reparaciones</li>
          <li>Instrumentos</li>
          <li>Piezas</li>
          <li>Contacto</li>
        </div>
      </nav>
      <nav className=" lg:hidden w-full h-full bg-orange-300/[0.1] shadow-md shadow-orange-500 backdrop-blur-md flex justify-between gap-5 py-5 px-10">
        <div>
          <img
            src="assets/logo.webp"
            width={50}
            alt="img-logo"
            className="mt-10"
          />
        </div>
        <section
          id="cnt"
          className="flex flex-col  justify-center -mt-10"
          onClick={() => setStateMenu(!stateMenu)}
        >
          <div id="stick" className="w-7 h-1 bg-red-400"></div>
          <div id="stick1" className="w-7 h-1 bg-red-400"></div>
          <div id="stick2" className="w-7 h-1 bg-red-400"></div>
        </section>
      </nav>
    </main>
  );
}
