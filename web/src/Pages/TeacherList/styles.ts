import styled from "styled-components";

import { Container as GlobalContainer } from "../../Styles/GlobalStyles";

interface DaySpanProps {
  selected: Boolean;
}

export const Container = styled(GlobalContainer)`
  width: 100vw;
  height: 100vh;

  @media (min-width: 700px) {
    max-width: 100%;

    .form {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      position: absolute;
      bottom: -2.8rem;

      div {
        width: 30%;
      }
    }
  }
`;

export const OptionsContainer = styled.div`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const DaySpan = styled.span<DaySpanProps>`
  cursor: pointer;
  width: 18%;
  height: 3.4rem;
  display: flex;
  align-items: center;
  justify-content: center;

  font: 500 1.2rem Archivo;
  color: var(--color-title-in-primary);
  text-align: center;

  padding: 0 0.5rem;
  margin: 0.5rem;

  border-radius: 0.5rem;
  background: var(--color-primary-darker);

  opacity: ${(props) => (props.selected ? "1" : ".4")};

  transition: opacity 200ms ease;

  @media (min-width: 700px) {
    font-size: 1.6rem;
  }
`;

export const Form = styled.form`
  margin-top: 3.2rem;

  label {
    color: var(--color-text-in-primary);
  }
`;

export const Content = styled.main`
  margin: 3.2rem auto;
  width: 90%;

  @media (min-width: 700px) {
    padding: 3.2rem 0;
    max-width: 740px;
  }
`;
