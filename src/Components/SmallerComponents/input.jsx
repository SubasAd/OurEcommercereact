import React from "react";
const Input = ({ name, label, onChange, type, value, placeholder }) => {
  placeholder === null ? (placeholder = "") : (placeholder = placeholder);
  return (
    <div className="mb-3 w-300 p-3">
      <label htmlFor={name} Name="form-label">
        
        {label}
      </label>
      <input
        name={name}
        onChange={onChange}
        value={value}
        type={type}
        className="form-control w-200"
        id={name}
        placeholder={placeholder}
        onKeyDown={onChange}
      ></input>
    </div>
  );
};

export default Input;
