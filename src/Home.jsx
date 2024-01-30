import React, { useEffect } from "react";
import { motion as m } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to("#about", {
      scrollTrigger: {
        trigger: "#about",
        start: "center 800",
        end: 800,
        scrub: 2,
      },
      opacity: 1,
      y: -100,
    });
  }, []);

  return (
    <main className="w-screen flex flex-col ">
      <div className=" bg-indigo-950 flex flex-col w-screen h-screen">
        <h1 className="text-red-300 font-extrabold text-4xl lg:text-9xl py-24">
          Grubeguitars
        </h1>
        <h2>Sebastian Grube</h2>
      </div>
      <div
        id="about"
        className=" opacity-0 w-1/2 h-screen mt-24 flex flex-col justify-start p-10"
      >
        <h3 className="text-5xl lg:text-9xl font-bold py-10">About</h3>
        <p>
          Hola, me llamo Sebastian Grube y desde pequeño las guitarras
          eléctricas son mi gran pasión. Con 13 años no podía comprar una
          guitarra y fue entonces cuando decidí hacer mi primera guitarra
          eléctrica. Fue rápido. La corté de una tabla de chapas de madera, los
          trastes eran guías de tren de juguete, el puente era de aluminio
          doblado y la pastilla un magneto eléctrico de juguete. La guitarra no
          tenía nada de ver con las guitarras que puedes comprar...pero
          FUNCIONABA! Desde entonces he ido perfeccionando mis instrumentos,
          siempre buscando el mejor sonido y tacto.
        </p>
      </div>
      <seccion className="">
        <h2>Personalización</h2>
        <p>
          Construyo todo tipo de guitarras y bajos macizos, ademas de "hollow
          bodys". Los instrumentos son personalizados, incluso si es una "copia"
          que ya hay en el mercado. Las guitarras eléctricas permiten un gran
          libertad de diseño, siempre y cuando sea posible técnicamente.
          Naturalmente utilizo solo madera de alta calidad. Cada madera tiene su
          propio sonido. Así elijo la madera más apropiada al tipo de
          instrumento. El proceso de construcción tarda unos meses, incluso
          hasta un año. El tiempo garantiza una buena estabilidad de la madera.
          Durante el proceso de construcción estoy en contacto con el cliente.
          Cuando el instrumento está terminado hago el ajuste personalizado.
        </p>
      </seccion>
    </main>
  );
}
