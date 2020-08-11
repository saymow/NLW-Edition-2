import React, { useState, useEffect } from "react";

import api from "../../Services/api";

import studyIcon from "../../Assets/Images/icons/study.svg";
import giveClassesIcon from "../../Assets/Images/icons/give-classes.svg";
import purpleHeartIcon from "../../Assets/Images/icons/purple-heart.svg";

import logoImg from "../../Assets/Images/logo.svg";
import landingImg from "../../Assets/Images/landing.svg";

import Header from "./Header";

import {
  Container,
  GlobalContainer,
  LogoContainer,
  HeroImg,
  ButtonsContainer,
  StudyLink,
  GiveClassesLink,
  Message,
} from "./styles";

const Landing: React.FC = () => {
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api
      .get("/connections")
      .then((response) => {
        const { total } = response.data;
        setTotalConnections(total);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container>
      <Header />
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
        <Message className="total">
          <h5>
            Seja bem vindo.
            <span>O que deseja fazer?</span>
          </h5>
          <span>
            Total de {totalConnections} conexões
            <span>
              já realizadas
              <img src={purpleHeartIcon} alt="Coração roxo" />
            </span>
          </span>
        </Message>
      </GlobalContainer>
    </Container>
  );
};

export default Landing;
