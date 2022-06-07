import T from 'prop-types';

const RadioGroup = ({ options, value, ...props }) => {
  return (
    <nav>
      <ul>
      {options.map(({ value: optionValue, label }) => (
        <li>
          <label key={optionValue}>
            <input
              type="radio"
              value={optionValue}
              checked={optionValue === value}
              {...props}
            />
            {label}
          </label>
        </li>
      ))}
      </ul>
    </nav>
  );
}

RadioGroup.propTypes = {
  options: T.arrayOf(
    T.shape({
      value: T.string.isRequired,
      label: T.node.isRequired,
    }).isRequired
  ).isRequired,
  value: T.string.isRequired,
};

export default RadioGroup;
