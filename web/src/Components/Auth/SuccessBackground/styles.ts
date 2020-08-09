import styled from "styled-components";

import Background from "../../../Assets/Images/success-background.svg";

export const Container = styled.div`
  z-index: 2;
  width: 100vw;
  height: 100vh;

  position: relative;
  overflow: hidden;
  background: var(--color-primary);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BackDrop = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  background: url(${Background});
  background-size: 1119.2px 561px;
  width: 1119.2px;
  height: 561px;
`;

export const Content = styled.main`
  z-index: 3;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1,
  p {
    font-family: Archivo;
  }

  h1 {
    color: #fff;
    margin-top: 1.6rem;
    font-size: 5rem;
    line-height: 7rem;
  }

  p {
    line-height: 2.4rem;
    color: var(--color-text-in-primary);
  }

  button {
    margin-top: 7rem;

    cursor: pointer;
    font: Archivo 2rem;

    color: #fff;
    background-color: var(--color-secondary);

    width: 15rem;
    border-radius: 0.5rem;
    padding: 1rem;
    border: 0;
  }
`;
