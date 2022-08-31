import React from "react";
import "./Input.css";

function Input({ register, type, name, error, errorMessage, required, rules }) {
  return (
    <div>
      <label htmlFor={name} className="label-checkout">
        {name}
      </label>
      <input
        className="input-checkout"
        type={type}
        name={name}
        placeholder={name}
        {...register(name, {
          required: !!required,
          ...rules,
        })}
      ></input>
      {error && <div className="div-error">{errorMessage}</div>}
    </div>
  );
}

export default Input;
