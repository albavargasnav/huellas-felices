import T from 'prop-types';
import React from 'react';

import useForm from '../../../hooks/useForm';
import { InputFile, RadioGroup} from '../../common';

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="nombre" value={nombre} onChange={handleChange} />
      <input name="raza" value={raza} onChange={handleChange} />
      <input type="date" name="edad" value={edad} onChange={handleChange}/>
      {<RadioGroup
              options={Object.values(perroFilter)}
              name="perro"
              value={perro}
              onChange={handleChange} />}
      {<RadioGroup
              options={Object.values(sexoFilter)}
              name="sexo"
              value={sexo}
              onChange={handleChange} />}
      {<RadioGroup
              options={Object.values(sizeFilter)}
              name="size"
              value={size}
              onChange={handleChange} />}
      <div>
      <label for="descripcion">Introduce un texto:</label>
      <br></br>
      <textarea rows="10" cols="40" name="descripcion" id="descripcion" maxlenght="180" value={descripcion} onChange={handleChange} ></textarea>
      </div>
        <InputFile name="foto" onChange={handleChange} />
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
