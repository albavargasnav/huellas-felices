import T from 'prop-types';
import React from 'react';

import useForm from '../../../hooks/useForm';
import { InputFile, RadioGroup} from '../../common';
import './NewAdvertForm.css'

const validName = ({ nombre }) => nombre;
const validRaza = ({ raza }) => raza;
const validEdad = ({ edad }) => edad;
const ValidPhoto = ({ foto }) => foto;

const sexoFilter = {
  macho: { value: "true", label: 'Macho' },
  hembra: { value: "false", label: 'Hembra' },
};
const perroFilter = {
  perro: { value: 'true', label: 'Perro' },
  gato: { value: 'false', label: 'Gato' },
};
const sizeFilter = {
  pequeño: { value: 'Pequeño', label: 'Pequeño' },
  mediano: { value: 'Mediano', label: 'Mediano' },
  grande: { value: 'Grande', label: 'Grande' }
};

function NewAdvertForm({ onSubmit, isLoading }) {
  const {
    formValue: advert,
    handleChange,
    handleSubmit,
    validate,
  } = useForm({
    nombre: '',
    raza: '',
    edad: '',
    size: sizeFilter.pequeño.value,
    sexo: sexoFilter.macho.value,
    perro: perroFilter.perro.value,
    foto: null
  });
  const { nombre, raza, edad,  size, sexo, perro, descripcion} = advert;  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='NewAdvert'>
      <div className="datos"> 
      <div className='datosInput'>
      <input className="nombre" name="nombre" value={nombre} onChange={handleChange} placeholder="Nombre del animal"/>
      <input name="raza" value={raza} onChange={handleChange} placeholder="Nombre de la raza"/>
      <legend className='genero'>Fecha de Nacimiento:</legend>
      <input type="date" name="edad" value={edad} onChange={handleChange}/>
      </div>
      <div className='NewOpciones'>
      <legend className='Animal'>¿Es un perro o gato?</legend>
      <div className="RadioGroup">
      {<RadioGroup 
              options={Object.values(perroFilter)}
              name="perro"
              value={perro}
              onChange={handleChange} />}
      </div>
      <legend className='genero'>¿Es macho o hembra?</legend>
      <div className="RadioGroup">
      {<RadioGroup 
              options={Object.values(sexoFilter)}
              name="sexo"
              value={sexo}
              onChange={handleChange} />}
      </div>
      <legend className='Tamanio'>¿Cúal es el tamaño?</legend>
      <div className="RadioGroup"> 
      {<RadioGroup 
              options={Object.values(sizeFilter)}
              name="size"
              value={size}
              onChange={handleChange} />}
      </div>
      
      </div>
      
    
      <div>
      <label for="descripcion">Escribe una pequeña descripcion:</label>
      <br></br>
      <textarea rows="5" cols="40" name="descripcion" id="descripcion" maxlenght="180" value={descripcion} onChange={handleChange} ></textarea>
      <legend className='foto'>Selecciona una imagen:</legend>
      </div>
        <InputFile name="foto" onChange={handleChange} />
      </div>
      
      <button
        disabled={!validate(validName, validRaza, validEdad, ValidPhoto, () => !isLoading)}
      >
        Crear Anuncio
      </button>
    </form>
  );
}

NewAdvertForm.propTypes = {
  isLoading: T.bool,
  onSubmit: T.func.isRequired,
};

export default NewAdvertForm;
