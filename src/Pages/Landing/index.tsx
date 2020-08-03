import React from "react";

import logoImg from "../../Assets/Images/logo.svg";
import landingImg from "../../Assets/Images/landing.svg";

import studyIcon from "../../Assets/Images/icons/study.svg";
import giveClassesIcon from "../../Assets/Images/icons/give-classes.svg";
import purpleHeartIcon from "../../Assets/Images/icons/purple-heart.svg";

import {
  Container,
  GlobalContainer,
  LogoContainer,
  HeroImg,
  ButtonsContainer,
  StudyLink,
  GiveClassesLink,
} from "./styles";

const Landing: React.FC = () => {
  return (
    <Container>
      <GlobalContainer>
        <LogoContainer className="logo">
          <img src={logoImg} alt="Proffy Logo" />
          <h2>Sua plataforma de estudos online.</h2>
        </LogoContainer>

        <HeroImg
          className="heroImg"
          src={landingImg}
          alt="Plataforma de estudos"
        />

        <ButtonsContainer className="buttonsContainer">
          <StudyLink to="/study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </StudyLink>
          <GiveClassesLink to="/give-class">
            <img src={giveClassesIcon} alt="Dar aulas" />
            Dar aulas
          </GiveClassesLink>
        </ButtonsContainer>

        <span className="total">
          Total de 200 conexões já realizadas
          <img src={purpleHeartIcon} alt="Coração roxo" />
        </span>
      </GlobalContainer>
    </Container>
  );
};

export default Landing;
