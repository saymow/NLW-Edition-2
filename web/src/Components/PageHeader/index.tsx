import React from "react";
import { Link } from "react-router-dom";

import logoImg from "../../Assets/Images/logo.svg";
import backicon from "../../Assets/Images/icons/back.svg";

import { Container, Header, HeaderContent } from "./styles";

interface Props {
  title: string;
}

const PageHeader: React.FC<Props> = ({ title, children }) => {
  return (
    <Container>
      <Header>
        <Link to="/">
          <img src={backicon} alt="voltar" />
        </Link>
        <img src={logoImg} alt="Proffy logo" />
      </Header>

      <HeaderContent>
        <strong>{title}</strong>
        {children}
      </HeaderContent>
    </Container>
  );
};

export default PageHeader;
