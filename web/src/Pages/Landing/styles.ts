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
  /* background: var(--color-primary); */
  background: linear-gradient(
    var(--color-primary) 70%,
    var(--color-background) 0%
  );
`;

export const GlobalContainer = styled(GlobalContainerStyles)`
  @media (min-width: 1100px) {
    max-width: 1260px;
    width: 90%;

    height: min(85%, 660px);
    display: grid;
    grid-template-rows: 75% 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "logo hero "
      "total buttons";

    .logo {
      grid-area: logo;
      align-self: center;
      text-align: left;
      margin-bottom: 10rem;

      h2 {
        max-width: 60%;
        font-size: 3.6rem;
      }

      img {
        height: 100%;
      }
    }

    .heroImg {
      grid-area: hero;
      justify-self: self-end;
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
      /* justify-self: center; */
    }
  }
`;

export const LogoContainer = styled.div`
  height: 10rem;
  text-align: center;
  margin-bottom: 3.6rem;

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

export const Message = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 2rem;

  h5 {
    color: var(--color-text-base);
    font-size: 2rem;
    font-weight: 500;

    span {
      display: block;
      font-weight: bold;
    }
  }

  > span {
    font-size: 1.4rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    color: var(--color-text-complement);

    span {
      display: block;

      img {
        margin-left: 0.8rem;
      }
    }
  }
`;
