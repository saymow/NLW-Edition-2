import styled from "styled-components";

import { Container as GlobalContainer } from "../../Styles/GlobalStyles";

export const Container = styled(GlobalContainer)`
  width: 100vw;
  height: 100vh;

  @media (min-width: 700px) {
    max-width: 100%;

    .form {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      column-gap: 1.6rem;
      position: absolute;
      bottom: -2.8rem;
    }
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
