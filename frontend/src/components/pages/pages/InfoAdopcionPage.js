import React from "react";
import "./InfoAdopcionPage.css";
import fotoInfoProte1 from "../../../assets/images/foto-perro-pag-info-prote1.jpg";
import fotoInfoProte2 from "../../../assets/images/foto-gato-pag-info-prote2.jpg";
import fotoInfoProte3 from "../../../assets/images/foto-perro-info-prote3.jpg";
import fotoInfoProte4 from "../../../assets/images/foto-perro-info-prote4.jpg";

function InfoAdopcionPage() {
  return (
    <>
      <section className="primer-bloque">
        <img className="foto-info-prote1" src={fotoInfoProte1} />
        <p className="texto-info-prote1">
          Adoptar un animal es un gesto muy bonito pero conlleva muchas
          obligaciones. Hemos oído en muchas ocasiones que adoptar significa
          “abrirle a un animal las puertas de tu casa para que sea uno más de la
          familia”. Nos gusta esta descripción y se corresponde con la filosofía
          de huellas felices, cuyo objetivo es el de ofrecer un trato excelente
          a cada uno de los animales que nos llegan. Estos son nuestros
          objetivos. Sin embargo, la realidad es más dura. La cantidad de
          animales de compañía abandonados asciende, en España, a más de
          137.000, según indica el último estudio sobre abandono y adopción 2016
          de la Fundación Affinity. Es por ello que la tarea de las protectoras
          de animales debe ser la de controlar con precisión y exigencia quién
          adopta a cada uno de sus animales. ¿Entienden ahora por qué el proceso
          de adopción es, en ocasiones, largo y exigente? La seguridad de los
          animales es siempre lo que debe primar en estos casos.{" "}
        </p>
      </section>
      <section className="segundo-bloque">
        <img className="foto-info-prote2" src={fotoInfoProte2} />
        <p className="texto-info-prote2">
          ¿Qué obligaciones tienes al adoptar? En Huellas felices funcionamos
          así. Queremos que seas consciente de que al adoptar asumes compartir
          muchos años con el animal elegido. Toda mascota requiere de mucha
          atención y cuidado. Por ello, debes plantearte si eres capaz de cubrir
          y satisfacer todas sus necesidades: ofrecerle un hogar adecuado,
          dedicarle tiempo, sacarle a pasear… en definitiva, hacerle feliz. No
          podemos olvidar que es un ser vivo al que debes tratar con respeto. En
          nuestro caso, te adelantamos que nuestros perros y gatos proceden de
          la calle o del abandono, por lo que, muchas veces, no contamos con la
          información completa sobre sus condiciones, su situación antes de
          llegar a nuestras instalaciones o sobre su carácter . Sobre las
          condiciones físicas podemos ofrecer más información, gracias al equipo
          de veterinarios con los que contamos en el centro. Sin embargo, ningún
          centro puede ofrecer garantías sobre algunas patologías ocultas que
          puedan padecer.
        </p>
      </section>
      <section className="tercer-bloque">
        <img className="foto-info-prote3" src={fotoInfoProte3} />
        <p className="texto-info-prote3">
          ¿Por qué rellenar un cuestionario de adopción? Muchas personas se
          sorprenden cuando se enfrentan, por primera vez, al proceso de
          adopción. Largo, tedioso, farragoso… En ocasiones lo es, sí, pero
          tenemos nuestros motivos. Debes tener en cuenta que los animales que
          llegan a Huellas felices, o a cualquier otro centro de acogida, han
          tenido una vida difícil, en muchas ocasiones sufriendo abandonos y
          maltratos. Nuestra obligación, como centro especializado en la
          adopción y gestión de animales perdidos o abandonados, es garantizar,
          en la medida de lo posible, que nada similar les vuelva a ocurrir.
          Este es el motivo por el que, por medio de un cuestionario, tratamos
          de recopilar cuánta más información sea posible. ¿Por qué NO es gratis
          adoptar? Desde que el animal llega al centro, supone una serie de
          gastos tales como: servicio de transporte para su recogida y,
          posteriormente, entrega. Tasas, lavado, vacunación, análisis, comida,
          cuidado… y un largo etcétera. Realmente, la adopción sí es gratuita,
          pero, se deben abonar ciertos GASTOS DE GESTIÓN. Estos gastos son
          referidos al veterinario, vacunación, esterilización… y son exigidos
          por Ley. Intentamos que el coste sea el mínimo posible, sobre todo,
          gracias a la colaboración de nuestros veterinarios.
        </p>
        <section className="cuarto-bloque">
          <img
            className="foto-info-prote4"
            src={fotoInfoProte4}
            alt="Imagen protección animal"
          />
          <p className="texto-info-prote4">
            En definitiva, esperamos haberte sido de utilidad si tenías en mente
            adoptar un animal. Si cumples los requisitos y estás preparado para
            ello: ¡ADELANTE! Adoptar es siempre una buenísima idea. Consúltanos
            para gestionar la adopción, por medio de nuestras redes sociales
            (Facebook e Instagram) podrás ver a algunos de los peluditos que
            buscan hogar.
          </p>
        </section>
      </section>
    </>
  );
}

export default InfoAdopcionPage;
