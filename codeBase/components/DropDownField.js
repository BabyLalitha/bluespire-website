import React from 'react';

const Dropdown = ({ label, id, name, options, value, onChange,className }) => {
  return (
    <div>
      <label htmlFor={id}>
        {label}<span className="text-red-500">*</span>
      </label>
      <div className='mt-2'>
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={className}
        required
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      </div>
    </div>
  );
};

export default Dropdown;
