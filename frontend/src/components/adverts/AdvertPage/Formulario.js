import React, { useState } from "react";

function Formulario() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    email: "",
    edad: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos al backend
    console.log("Datos a enviar:", formData);
    // Llama a una función para enviar los datos al backend aquí
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      {/* Agrega más campos según sea necesario */}
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Formulario;
