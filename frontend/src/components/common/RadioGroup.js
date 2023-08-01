import T from 'prop-types';

function RadioGroup({ options, value, onChange, ...props }) {
  const handleChange = ev => {
    onChange(ev);
  };

  return (
    <div>
      {options.map(({ value: optionValue, label }) => (
        <label key={optionValue}>
          <input
            type="radio"
            value={optionValue}
            checked={optionValue === value}
            onChange={handleChange}
            {...props}
          />
          {label}
        </label>
      ))}
    </div>
  );
}

RadioGroup.propTypes = {
  options: T.arrayOf(
    T.shape({
      value: T.string.isRequired,
      label: T.node.isRequired,
    }).isRequired,
  ).isRequired,
  value: T.string.isRequired,
  onChange: T.func.isRequired,
};

export default RadioGroup;
