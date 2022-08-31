import React from "react";
import "./Select.css";

function Select({ register, name, error, errorMessage, required, children }) {
  return (
    <div>
      <label htmlFor={name} className="label-checkout">
        {name}
      </label>
      <select
        className="input-checkout"
        id={name}
        name={name}
        {...register(name, { required: !!required })}
      >
        {children}
      </select>
      {error && <div className="div-error">{errorMessage}</div>}
    </div>
  );
}

export default Select;
