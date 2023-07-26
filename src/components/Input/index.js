import React from "react";
import { InputStyled } from "./styles";

function Input({ value, onChange }) {
  return (
    <InputStyled
      value={value}
      onChange={onChange}
      placeholder="usuario/repositorio"
    />
  );
}

export default Input;
