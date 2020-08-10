import styled from "styled-components";

import { BsEye, BsEyeSlash } from "../../Styles/icons";
import { AuthContainer, AuthButton, AuthForm } from "../../Styles/utils";

export const Container = styled(AuthContainer)`
  display: grid;

  grid-template-columns: 45% 55%;
`;

export const SetPassContainer = styled.div`
  h2 {
    max-width: 80%;
  }
`;

export const Form = styled(AuthForm)``;

export const Button = styled(AuthButton)`
  margin-top: 3rem;
`;

export const Eye = styled(BsEye)``;

export const EyeSlash = styled(BsEyeSlash)``;
