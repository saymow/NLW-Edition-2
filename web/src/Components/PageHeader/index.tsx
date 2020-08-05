import React from "react";
import { Link } from "react-router-dom";

import { useGlobalState } from "../../Context";

import logoImg from "../../Assets/Images/logo.svg";
import backicon from "../../Assets/Images/icons/back.svg";

import {
  Container,
  Header,
  HeaderContent,
  SwitchElement,
  SwitchInput,
  SunIcon,
  MoonIcon,
  SwitchBall,
} from "./styles";

interface Props {
  title: string;
  description?: string;
}

const PageHeader: React.FC<Props> = ({ title, description, children }) => {
  const { toggleTheme } = useGlobalState();

  return (
    <Container>
      <Header>
        <Link to="/">
          <img src={backicon} alt="voltar" />
        </Link>
        <SwitchElement>
          <SwitchInput type="checkbox" id="checkbox" onClick={toggleTheme} />
          <label htmlFor="checkbox">
            <MoonIcon />
            <SunIcon />
            <SwitchBall />
          </label>
        </SwitchElement>
        <img src={logoImg} alt="Proffy logo" />
      </Header>

      <HeaderContent>
        <strong>{title}</strong>
        {description && <p>{description}</p>}
        {children}
      </HeaderContent>
    </Container>
  );
};

export default PageHeader;
