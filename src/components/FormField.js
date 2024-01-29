import React from 'react';

const FormField = ({ label, name, value, onChange, error }) => {
  return (
    <div className="formInput">
      <label htmlFor={name}>{label}</label><br />
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error && (
        <div style={{ color: 'red' }}>{error}</div>
      )}
      <br />
    </div>
  );
};

export default FormField;
