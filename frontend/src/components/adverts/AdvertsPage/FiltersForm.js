import T from 'prop-types';

import useForm from '../../../hooks/useForm';
import SelectTags from '../SelectTags';
import { RadioGroup} from '../../common';
import { advert } from '../propTypes';
import { perroFilter, sexoFilter } from './filters';

function FiltersForm({ initialFilters, defaultFilters, onFilter, prices }) {
  const {
    formValue: filters,
    setFormValue,
    handleChange,
    handleSubmit,
  } = useForm(initialFilters);

  const handleResetClick = () => {
    setFormValue(defaultFilters);
    onFilter(defaultFilters);
  };
  const {raza, sexo, perro, size} = filters;
  return (
    <form onSubmit={handleSubmit(onFilter)}>
      <div>
      <p>Búsqueda:</p>
      {<input name="raza" value={raza} placeholder="Nombre de la raza" onChange={handleChange} />}
      <div>
        <legend>¿Qué tipo de animal buscas?</legend>
      {<RadioGroup
        options={Object.values(perroFilter)}
        name="perro"
        value={perro}
        onChange={handleChange}
      />}
      </div>
      <div>
        <legend>¿Qué género buscas?</legend>
        {<RadioGroup
          options={Object.values(sexoFilter)}
          name="sexo"
          value={sexo}
          onChange={handleChange}
        />}
      </div>
      <div>
      <legend>¿Qué tamaño buscas?</legend>
      {<SelectTags multiple name="size" value={size} onChange={handleChange} /> }
      </div>
      </div>
     
      <button type="submit">Filter</button>
      <button onClick={handleResetClick}>Reset</button>
    </form>
  );
}

const filtersProp = T.shape({
  ...advert,
});

FiltersForm.propTypes = {
  initialFilters: filtersProp.isRequired,
  defaultFilters: filtersProp.isRequired,
  onFilter: T.func.isRequired,
};

export default FiltersForm;
