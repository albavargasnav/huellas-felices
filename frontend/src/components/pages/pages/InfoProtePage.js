import React from "react";
import "./InfoProtePage.css";
import fotoInfoProte from "../../../assets/images/foto-perro-pag-informacion2.jpg";
import fotoMaps from "../../../assets/images/foto-googlemaps.png";

function InfoProtePage() {
  return (
    <>
      <section className="primer-bloque">
        <img className="foto-info-prote" src={fotoInfoProte} />
        <p className="texto-info-prote1">
          A diario recibimos muchos correos electrónicos y llamadas de teléfono,
          la mayoría para informarnos sobre el abandono de un nuevo animal.
          Rogamos que tengas paciencia y que, por favor, ayudes al animal
          mientras nosotros te contestamos, lo más rápido posible.
        </p>
      </section>

      <section className="contenedor-info-maps">
        <img className="foto-maps" src={fotoMaps} />
        <span className="recuadros">
          <div className="direccion">Calle San Miguel 8, Galapagar 28260</div>
          <div className="recuadro">☎️ 693 563 785</div>
          <div className="recuadro">✉️huellasfelices@gmail.com</div>
        </span>
      </section>
    </>
  );
}

export default InfoProtePage;
