import React, { InputHTMLAttributes } from "react";

import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

const Input: React.FC<InputProps> = ({ label, ...rest }) => {
  return (
    <Container>
      <label htmlFor={rest.name}>{label}</label>
      <input {...rest} id={rest.name} />
    </Container>
  );
};

export default Input;
