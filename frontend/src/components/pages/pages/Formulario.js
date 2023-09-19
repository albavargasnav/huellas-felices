import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Formulario.css";

import { createRequest } from "../../adverts/service";

function Formulario() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    dni: "",
    fechaNacimiento: "",
    codigoPostal: "",
    provincia: "",
    email: "",
    movil: "",
    estadoCivil: "",
    tipoVivienda: "",
    motivoAdopcion: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    const body = {
      nombre: form.elements.nombre.value,
      apellidos: form.elements.apellidos.value,
      dni: form.elements.dni.value,
      fechaNacimiento: form.elements.fechaNacimiento.value,
      codigoPostal: form.elements.codigoPostal.value,
      provincia: form.elements.provincia.value,
      email: form.elements.email.value,
      movil: form.elements.movil.value,
      estadoCivil: form.elements.estadoCivil.value,
      tipoVivienda: form.elements.tipoVivienda.value,
      motivoAdopcion: form.elements.motivoAdopcion.value,
    };

    createRequest(body)
      .then(() => navigate("/"))
      .catch((error) => {
        // Manejar el error aquí, por ejemplo, mostrar un mensaje de error al usuario.
        console.error(error);
      });
  };

  return (
    <div className="fondo-formulario"> 
    <form onSubmit={handleSubmit} className="formulario">
      <div className="name">
        <div className="Name">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div className="lastname">
          <label htmlFor="apellidos">Apellidos</label>
          <input
            type="text"
            id="apellidos"
            name="apellidos"
            value={formData.apellidos}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="dni-date">
        <div className="dni">
          <label htmlFor="dni">DNI</label>
          <input
            type="text"
            id="dni"
            name="dni"
            value={formData.dni}
            onChange={handleChange}
            required
          />
        </div>
        <div className="text">
          <label htmlFor="fechaNacimiento">Fecha de nacimiento</label>
          <input
            type="text"
            id="fechaNacimiento"
            name="fechaNacimiento"
            value={formData.fechaNacimiento}
            onChange={handleChange}
            pattern="\d{2}-\d{2}-\d{4}"
            placeholder="dd-mm-yyyy"
            required
          />
        </div>
      </div>

      <div className="direccion">
        <div className="codigoPostal">
          <label htmlFor="codigoPostal">Código Postal</label>
          <input
            type="text"
            id="codigoPostal"
            name="codigoPostal"
            value={formData.codigoPostal}
            onChange={handleChange}
          />
        </div>
        <div className="provincia">
          <label htmlFor="provincia">Provincia</label>
          <input
            type="text"
            id="provincia"
            name="provincia"
            value={formData.provincia}
            onChange={handleChange}
          />
        </div>

        
        <div className="info">
          <div className="Email">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="movil">
            <label htmlFor="movil">Móvil</label>
            <input
              type="text"
              id="movil"
              name="movil"
              value={formData.movil}
              onChange={handleChange}
              required
              pattern="[6-7]\d{8}"
            />
          </div>
        </div>

        <div className="estadoCivil">
          <label htmlFor="estadoCivil">Estado Civil</label>
          <select
            id="estadoCivil"
            name="estadoCivil"
            value={formData.estadoCivil}
            onChange={handleChange}
            required
          >
            <option value="">Selecciona</option>
            <option value="soltero">Soltero</option>
            <option value="casado">Casado</option>
          </select>
        </div>

        <div className="vivienda">
          <label htmlFor="tipoVivienda">Tipo de Vivienda</label>
          <select
            id="tipoVivienda"
            name="tipoVivienda"
            value={formData.tipoVivienda}
            onChange={handleChange}
            required
          >
            <option value="">Selecciona</option>
            <option value="Piso">Piso</option>
            <option value="Duplex">Duplex</option>
            <option value="Chalet">Chalet</option>
          </select>
        </div>

        <div className="motivo">
          <label htmlFor="motivoAdopcion">
            ¿Por qué crees que eres un buen candidato para adoptar?
          </label>
          <textarea
            id="motivoAdopcion"
            name="motivoAdopcion"
            value={formData.motivoAdopcion}
            onChange={handleChange}
            placeholder="Indica nombre y especie que desea adoptar"
          />
        </div>
        </div>
     
      <button type="submit">Enviar</button>
    </form>
    </div>
  ); 
}

export default Formulario;