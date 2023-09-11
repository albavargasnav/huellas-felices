export const perroFilter = {
  all: { value: 'Todo', label: 'Todo' },
  perro: { value: 'perro', label: 'Perro' },
  gato: { value: 'gato', label: 'Gato' },
};
export const sexoFilter = {
  all: { value: 'Todo', label: 'Todo' },
  macho: { value: 'macho', label: 'Macho' },
  hembra: { value: 'hembra', label: 'Hembra' },
};

export const defaultFilters = {
  raza: '',
  sexo: sexoFilter.all.value,
  perro: perroFilter.all.value,
  size: [],
};

const filterByRaza =
  filter =>
  ({ raza }) => {
    const cleanFilter = filter.trim();
    return !cleanFilter || new RegExp(cleanFilter, 'gi').test(raza);
  };

const filterByPerro =
  filter =>
  ({ perro }) =>
    [
      perroFilter.all.value,
      perro ? perroFilter.perro.value : perroFilter.gato.value,
    ].includes(filter);

const filterBySexo =
  filter =>
  ({ sexo }) =>
    [
       sexoFilter.all.value,
        sexo ? sexoFilter.macho.value : sexoFilter.hembra.value,
      ].includes(filter);


const filterByTags =
  filter =>
  ({ size }) =>
    !filter.length || filter.some(siz => size.includes(siz));



export const filterAdverts = (adverts, {perro, raza, sexo, size }) =>
  
  adverts
     .filter(filterByRaza(raza))
     .filter(filterByPerro(perro))
     .filter(filterBySexo(sexo))
     .filter(filterByTags(size))
