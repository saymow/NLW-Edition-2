import styled from "styled-components";
import { Sun, Moon } from "@styled-icons/boxicons-solid";

export const Container = styled.header`
  display: flex;
  flex-direction: column;

  background: var(--color-primary);

  @media (min-width: 700px) {
    height: 340px;
  }
`;

export const Header = styled.div`
  width: 90%;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  color: var(--color-text-in-primary);
  padding: 1.6rem 0;

  a {
    transition: opacity 200ms ease;

    &:hover {
      opacity: 0.8;
    }

    img {
      height: 3.2rem;
    }
  }

  img {
    height: 1.6rem;
  }

  @media (min-width: 700px) {
    max-width: 1100px;
  }
`;

export const HeaderContent = styled.main`
  width: 90%;
  margin: 0 auto;
  position: relative;
  margin: 3.2rem auto;

  @media (min-width: 700px) {
    flex: 1;
    max-width: 740px;
    margin: 0 auto;
    padding-bottom: 4.8rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    strong {
      max-width: 35rem;
    }
  }

  strong {
    font: bold 3.6rem Archivo;
    line-height: 4.2rem;
    color: var(--color-title-in-primary);
  }

  p {
    max-width: 30rem;
    font-size: 1.6rem;
    line-height: 2.6rem;
    color: var(--color-text-in-primary);
    margin-top: 2rem;
  }
`;

// based upon => https://www.youtube.com/watch?v=xodD0nw2veQ

export const SwitchElement = styled.div`
  margin-left: auto;
  margin-right: 3vw;

  /* @media (min-width: 700px) {
    margin-right: 5rem;
  } */
  
  > label {
    position: relative;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0.5rem;
    width: 5rem;
    border-radius: 5rem;
    height: 2.6rem;

    transition: background 400ms ease;

    background: rgba(255, 255, 255, 0.2);
  }
`;
export const SwitchInput = styled.input`
  position: absolute;
  opacity: 0;

  &:checked + label {
    background-color: rgba(0, 0, 0, 0.2);
    div {
      transform: translateX(2.5rem);
    }
  }
`;

export const SunIcon = styled(Sun)`
  height: 1.8rem;
  width: 1.8rem;
  color: #f39c12;
`;

export const MoonIcon = styled(Moon)`
  height: 1.8rem;
  width: 1.8rem;
  color: #f1c40f;
`;
export const SwitchBall = styled.div`
  cursor: pointer;
  background-color: #fff;
  position: absolute;
  top: 0.2rem;
  left: 0.2rem;

  border-radius: 50%;
  width: 2.2rem;
  height: 2.2rem;

  transition: transform 200ms ease;
`;
