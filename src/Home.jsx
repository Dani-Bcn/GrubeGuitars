import React from "react";
import { motion as m} from "framer-motion"

export default function Home() {
  return (
    <main className="overflow-y-hidden">
      <m.h1 
      initial={{
       opacity:0,
        transition:{
          duration:1
        }
      }}
      animate={{
        opacity:1,
        transition:{
          duration:1
        }
      }}
      className="drop-shadow-[0_0_55px_rgba(175,100,25,0.35)] w-screen h-60 text-5xl lg:text-[13em] font-extrabold bg-[url(/assets/guitar-1.jpg)] bg-[center_bottom_-10rem] bg-[length:1400px_600px]  bg-clip-text text-red-100/[0] mt-40 ">
        Grubeguitars
      </m.h1>
      <h2 className="lg:mt-60 mt-40 text-7xl lg:text-9xl text-orange-300 font-extrabold">About</h2>
      <p className="my-16 lg:my-20 w-96">
        Hola, me llamo Sebastian Grube y desde pequeño las guitarras eléctricas
        son mi gran pasión. Con 13 años no podía comprar una guitarra y fue
        entonces cuando decidí hacer mi primera guitarra eléctrica. Fue rápido.
        La corté de una tabla de chapas de madera, los trastes eran guías de
        tren de juguete, el puente era de aluminio doblado y la pastilla un
        magneto eléctrico de juguete. La guitarra no tenía nada de ver con las
        guitarras que puedes comprar...pero FUNCIONABA! Desde entonces he ido
        perfeccionando mis instrumentos, siempre buscando el mejor sonido y
        tacto
      </p>
    </main>
  );
}
