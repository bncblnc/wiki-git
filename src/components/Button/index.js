import React from "react";
import { ButtonStyled } from "./styles";

function Button({ onClick }) {
  return <ButtonStyled onClick={onClick}>Buscar</ButtonStyled>;
}

export default Button;
