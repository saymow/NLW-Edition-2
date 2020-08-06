import styled from "styled-components";
import { Link } from "react-router-dom";

import { Container as GlobalContainerStyles } from "../../Styles/GlobalStyles";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--color-text-in-primary);
  background: var(--color-primary);
`;

export const GlobalContainer = styled(GlobalContainerStyles)`
  @media (min-width: 1100px) {
    max-width: 1100px;

    display: grid;
    grid-template-rows: 350px 1fr;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-areas:
      "logo hero hero"
      "buttons buttons total";

    .logo {
      grid-area: logo;
      align-self: center;
      text-align: left;
      margin: 0;

      h2 {
        font-size: 3.6rem;
      }

      img {
        height: 100%;
      }
    }

    .heroImg {
      grid-area: hero;
      justify-self: end;
    }

    .buttonsContainer {
      grid-area: buttons;
      justify-content: flex-start;

      a {
        font-size: 2.4rem;
      }
    }

    .total {
      grid-area: total;
      justify-self: end;
    }
  }

  span {
    font-size: 1.4rem;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
      margin-left: 0.8rem;
    }
  }
`;

export const LogoContainer = styled.div`
  height: 10rem;
  text-align: center;
  margin-bottom: 3.2rem;

  h2 {
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 4.6rem;
    margin-top: 0.8rem;
  }
`;

export const HeroImg = styled.img`
  width: 100%;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 3.2rem 0;

  a {
    cursor: pointer;
    width: 30rem;
    height: 10.4rem;
    border-radius: 0.8rem;
    font: 700 2rem Archivo;

    display: flex;
    align-items: center;
    justify-content: center;

    color: var(--color-button-text);

    transition: background-color 200ms ease;

    &:first-child {
      margin-right: 1.6rem;
    }

    img {
      width: 4rem;
      margin-right: 2.4rem;
    }
  }
`;

export const StudyLink = styled(Link)`
  background: var(--color-primary-lighter);

  &:hover {
    background: var(--color-primary-light);
  }
`;

export const GiveClassesLink = styled(Link)`
  background: var(--color-secondary);

  &:hover {
    background: var(--color-secondary-dark);
  }
`;