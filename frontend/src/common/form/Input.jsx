import React from 'react';

const Input = ({ input, placeholder, readOnly, type }) => {
  return (
    <input
      {...input}
      className="form-control"
      placeholder={placeholder}
      readOnly={readOnly}
      type={type}
    />
  );
};

export default Input;
