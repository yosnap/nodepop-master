import T from 'prop-types';

const CheckboxGroup = ({ options, value, onChange, ...props }) => {
  const handleChange = ev => {
    const { name, checked, value: optionValue } = ev.target;
    onChange({
      target: {
        name,
        value: checked
          ? [...value, optionValue]
          : value.filter(v => v !== optionValue),
      },
    });
  };

  return (
    <nav>
      <ul>
        {options.map(option => (
          <li>
            <label key={option}>
            <input
              type="checkbox"
              value={option}
              checked={value.includes(option)}
              onChange={handleChange}
              {...props}
            />
              {option}
            </label>
          </li>
        ))}
      </ul>
    </nav>
  );
}

CheckboxGroup.propTypes = {
  options: T.arrayOf(T.string.isRequired).isRequired,
  value: T.arrayOf(T.string.isRequired).isRequired,
  onChange: T.func.isRequired,
};

export default CheckboxGroup;
