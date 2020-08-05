import styled from "styled-components";

import { Container as DefaultContainer } from "../../Styles/GlobalStyles";

export const Container = styled(DefaultContainer)`
  height: 100vh;
  width: 100vw;

  > header {
    > main {
      margin-bottom: 6.4rem;
    }
  }

  @media (min-width: 700px) {
    max-width: 100vw;

    > header {
      > main {
        margin-bottom: 0;
      }
    }

    form fieldset {
      padding: 0 6.4rem;
    }

    form footer {
      padding: 4rem 6.4rem;
      display: flex;
      align-items: center;
      justify-content: space-between;

      p {
        justify-content: space-between;
      }

      button {
        margin-top: 0;
        width: 20rem;
      }
    }
  }
`;

export const Form = styled.form`
  background: var(--color-box-base);
  width: 100%;
  max-width: 74rem;
  border-radius: 0.8rem;
  margin: -3.2rem auto 3.2rem;
  padding-top: 6.4rem;
  overflow: hidden;

  label {
    color: var(--color-text-complement);
  }
`;

export const FieldSet = styled.fieldset`
  border: 0;
  padding: 0 2.4rem;

  & + & {
    margin-top: 6.4rem;
  }
`;

export const Legend = styled.legend`
  font: 700 2.4rem Archivo;
  color: var(--color-text-title);
  margin-bottom: 2.4rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding-bottom: 1.6rem;
  border-bottom: 1px solid var(--color-line-in-white);

  button {
    cursor: pointer;
    background: none;
    border: none;
    color: var(--color-primary);
    font: 700 1.6rem Archivo;
  
    transition: color 200 ease;

    &:holor {
      color: var(--color-primary-dark);
    }
  }
`;

export const ScheduleItem = styled.div`
  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    column-gap: 1.6rem;
  }
`;

export const Footeer = styled.footer`
  padding: 4rem 2.4rem;
  background: var(--color-box-footer);
  border-top: 1px solid var(--color-line-in-white);
  margin-top: 6.4rem;

  P {
    font-size: 1.4rem;
    line-height: 2.4rem;
    color: var(--color-text-complement);

    display: flex;
    align-items: center;
    justify-content: center;

    img {
      margin-right: 2rem;
    }
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 5.6rem;
  background: var(--color-secondary);
  color: var(--color-button-text);
  border: 0;
  border-radius: 0.8rem;
  font: 700 1.6rem Archivo;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  text-decoration: none;
  margin-top: 3.2rem;

  transition: filter 200ms ease;

  &:hover {
    filter: brightness(90%);
  }
`;
