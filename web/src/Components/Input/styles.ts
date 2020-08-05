import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  & + & {
    margin-top: 1.2rem;

    @media (min-width: 720px) {
      margin-top: 0;
    }
  }

  &:focus-within::after {
    content: "";
    position: absolute;
    left: 1.6rem;
    right: 1.6rem;
    bottom: 0;

    width: calc(100% - 3.2rem);
    height: 2px;
    background-color: var(--color-primary-light);
  }

  label {
    font-size: 1.4rem;
  }

  input {
    width: 100%;
    height: 5.6rem;
    margin-top: 0.8rem;

    font: 1.6rem Archivo;
    outline: 0;
    padding: 0 1.6rem;
    border: 1px solid var(--color-line-in-white);
    border-radius: 0.8rem;

    background-color: var(--color-input-background);
  }
`;
