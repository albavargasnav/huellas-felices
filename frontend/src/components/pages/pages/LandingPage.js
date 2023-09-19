import "./LandingPage.css";
import fotoFondo from "../../../assets/images/foto_fondo_recortadajpg.jpg";
import fotoInfo from "../../../assets/images/foto-perro-info-protectora.jpg";
import { MasInfoButton } from "../../common";


function LandingPage() {
  return (
    <>
      <section className="contenedor-img-header" id="contenedor-img-header">
        <img className="foto-fondo" src={fotoFondo} />
        <div className="header-img-texto">
          <h2 className="titulo-huellas-felices">
            Huellas felices, Esperando Una Nueva Vida
          </h2>
          <p className="texto-foto-fondo">
            Bienvenidos a Huellas Felices, un refugio comprometido con hacer
            brillar los corazones de peludos de cuatro patas. En Huellas
            Felices, nuestra pasión es crear vínculos duraderos entre humanos
            amorosos y adorables compañeros caninos y felinos en busca de un
            hogar. 
          </p>
        </div>
      </section>
      <div className="contenedor">
        <div className="imagen-foto-info">
          <img src={fotoInfo} />
        </div>
        <div className="texto-info">
          <p>
            Nuestra misión es más que simplemente encontrar hogares para estos
            peludos, se trata de tejer historias de alegría, amor y esperanza a
            través de cada perrito y gatito que encuentre su lugar especial en
            el mundo. Únete a nosotros en esta hermosa travesía de encontrar
            'hogar' en cada huella, y juntos construyamos un mundo donde las
            patitas dejen rastros de felicidad en cada corazón.
          </p>
        </div>
        <div className="boton">
          <MasInfoButton />
        </div>
      </div>

    </>
  );
}

export default LandingPage;
