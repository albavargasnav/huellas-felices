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
      <p>Filters</p>
      {<input name="raza" value={raza} onChange={handleChange} />}
      {<RadioGroup
        options={Object.values(perroFilter)}
        name="perro"
        value={perro}
        onChange={handleChange}
      />}
      {<RadioGroup
        options={Object.values(sexoFilter)}
        name="sexo"
        value={sexo}
        onChange={handleChange}
      />}
      {<SelectTags multiple name="size" value={size} onChange={handleChange} /> }
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
