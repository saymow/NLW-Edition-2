import styled from "styled-components";

import { AuthButton, AuthForm } from "../../Styles/utils";
import { ArrowNarrowLeft, BsEye, BsEyeSlash } from "../../Styles/icons";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-columns: 45% 55%;
`;

export const RegisterContainer = styled.section`
  margin-bottom: 10%;

  p {
    max-width: 55%;
    margin-bottom: 3rem;
  }
`;

export const Form = styled(AuthForm)``;

export const Button = styled(AuthButton)`
  margin-top: 3rem;
`;

export const Eye = styled(BsEye)``;

export const EyeSlash = styled(BsEyeSlash)``;

export const ArrowBack = styled(ArrowNarrowLeft)`
  position: absolute;
  top: -4rem;
  margin-bottom: auto;
  color: var(--color-primary);

  width: 6rem;
  height: 6rem;
`;
