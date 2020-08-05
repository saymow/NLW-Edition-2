import React, { SelectHTMLAttributes } from "react";

import { Container } from "./styles";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  options: {
    value: string;
    label: string;
  }[];
}

const Select: React.FC<SelectProps> = ({ label, options, ...rest }) => {
  return (
    <Container>
      <label htmlFor={rest.name}>{label}</label>
      <select value="" id={rest.name} {...rest}>
        <option value="" disabled hidden>
          Selecione uma opção
        </option>

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </Container>
  );
};

export default Select;
