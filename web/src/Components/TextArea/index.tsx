import React, { TextareaHTMLAttributes } from "react";

import { Container } from "./styles";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: string;
}

const Textarea: React.FC<TextareaProps> = ({ label, ...rest }) => {
  return (
    <Container>
      <label htmlFor={rest.name}>{label}</label>
      <textarea {...rest} id={rest.name} />
    </Container>
  );
};

export default Textarea;
