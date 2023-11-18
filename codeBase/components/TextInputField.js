import React from 'react';

const TextInput = ({ label, id, name, type, value, onChange, placeholder ,className}) => {
  return (
    <div>
      <label htmlFor={id}>
        {label}<span className="text-red-500">*</span>
      </label>
      <div className='mt-2'>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={className}
        required
      />
      </div>
     </div>
  );
};

export default TextInput;
