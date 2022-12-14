const Dropdown = ({ label, value, options, onChange }) => {
  return (
    <label>
      {label}
      <select className="form-control" value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
};

export default Dropdown;
