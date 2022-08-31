import React from "react";
import { useForm } from "react-hook-form";

import "./CheckoutForm.css";
import Input from "./Input/Input";
import Select from "./Select/Select";

function CheckoutForm({ onIsSubmitSuccessful }) {
  const { register, handleSubmit, formState } = useForm({
    mode: "onSubmit",
  });
  const { isSubmitting, errors } = formState;

  const onSubmit = (data) => {
    onIsSubmitSuccessful(data);
  };

  return (
    <form className="form-checkout" onSubmit={handleSubmit(onSubmit)}>
      <h1>Inscription</h1>
      <Input
        register={register}
        error={errors.name}
        name="name"
        errorMessage="This field is required, at least 3 letters"
        required
        type="text"
        rules={{ pattern: /[A-Za-z]{3}/ }}
      />

      <Input
        register={register}
        error={errors.surname}
        name="surname"
        errorMessage="This field is required"
        required
        type="text"
      />

      <Input
        register={register}
        error={errors.address}
        name="address"
        errorMessage="This field is required"
        required
        type="text"
      />

      <div className="div-country-continent">
        <Select
          register={register}
          error={errors.continent}
          name="continent"
          errorMessage="This field is required"
          required
        >
          <option value="europe">Europe</option>
          <option value="north-america">North America</option>
          <option value="south-america">South America</option>
          <option value="asia">Asia</option>
          <option value="africa">Africa</option>
          <option value="oceania">Oceania</option>
        </Select>

        <Input
          register={register}
          error={errors.country}
          name="country"
          errorMessage="This field is required"
          required
          type="text"
        />
      </div>

      <Input
        register={register}
        error={errors.email}
        name="email"
        errorMessage="This field is required"
        required
        type="email"
      />

      <div className="div-cellphone">
        <Select register={register} name="indicator" required>
          {Array(10)
            .fill(null)
            .map((_, idx) => {
              const value = `0${idx + 50}`;
              return (
                <option key={idx} value={value}>
                  {value}
                </option>
              );
            })}
        </Select>

        <Input
          register={register}
          error={errors.cellphone}
          name="cellphone"
          errorMessage="This field is required,min and max 7 numbers"
          required
          type="number"
          rules={{ minLength: 7, maxLength: 7 }}
        />
      </div>

      <button type="submit" disabled={isSubmitting} className="button-submit">
        Submit
      </button>
    </form>
  );
}

export default CheckoutForm;
