import React, { useState } from "react";
import "./Formulario.css";

function Formulario() {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar validaciones adicionales si es necesario
    // Luego, puedes enviar los datos al backend
    console.log("Datos a enviar:", formData);
    // Llama a una función para enviar los datos al backend aquí
    
  };

  return (
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
        <div className="date">
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

      <div className="additional-info">
        <div className="campo">
          <label htmlFor="codigoPostal">Código Postal</label>
          <input
            type="text"
            id="codigoPostal"
            name="codigoPostal"
            value={formData.codigoPostal}
            onChange={handleChange}
          />
        </div>
        <div className="campo">
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
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
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

        <div className="campo">
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

        <div className="campo">
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

        <div className="campo">
          <label htmlFor="motivoAdopcion">
            ¿Por qué crees que eres un buen candidato para adoptar?
          </label>
          <textarea
            id="motivoAdopcion"
            name="motivoAdopcion"
            value={formData.motivoAdopcion}
            onChange={handleChange}
          />
        </div>
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Formulario;
