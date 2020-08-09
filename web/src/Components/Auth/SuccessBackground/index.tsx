import React from "react";

import checkedIcon from "../../../Assets/Images/icons/success-check-icon.svg";

import { Container, Content, BackDrop } from "./styles";

interface Props {
  title: string;
  description: string[];
  action(): void;
}

const SuccessBackground: React.FC<Props> = ({ title, description, action }) => {
  return (
    <Container>
      <BackDrop></BackDrop>
      <Content>
        <img src={checkedIcon} alt="checked" />
        <h1>{title}</h1>
        {description.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
        <button onClick={action}>Fazer login</button>
      </Content>
    </Container>
  );
};

export default SuccessBackground;
