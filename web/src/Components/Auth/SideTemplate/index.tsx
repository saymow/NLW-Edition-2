import React from "react";

import { Container, FormContainer } from "./styles";

const SideTemplate: React.FC = ({ children }) => {
  return (
    <Container>
      <FormContainer>{children}</FormContainer>
    </Container>
  );
};

export default SideTemplate;
