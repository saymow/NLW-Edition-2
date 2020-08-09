import styled from "styled-components";

import background from "../../../Assets/Images/success-background.svg";

export const Container = styled.div`
  position: relative;
  background: var(--color-primary);

  display: flex;
  justify-content: center;
  align-items: center;

  div {
    z-index: 2;
    color: var(--color-title-in-primary);

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    margin-left: 1rem;

    h1 {
      font: 700 10rem Archivo;
    }
    h3 {
      max-width: 70%;
      margin-left: 0.2rem;
      font: 400 2.5rem Archivo;
    }
  }
`;

export const BackDrop = styled.div`
  position: absolute;
  background: url(${background});
  background-size: contain;
  left: 10%;
  top: 10%;
  width: 80%;
  height: 80%;

  transform: rotate(90deg);
  filter: brightness(70%);
`;
