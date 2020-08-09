import styled from "styled-components";

import { AuthButton, AuthForm, AuthContainer } from "../../Styles/utils";
import { BsEye, BsEyeSlash } from "../../Styles/icons";

export const Container = styled(AuthContainer)`
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

export const NavigateBackImage = styled.img`
  position: absolute;
  top: -4rem;
`;
