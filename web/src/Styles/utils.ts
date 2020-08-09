import styled from "styled-components";
import { Form as FormikForm } from "formik";

const AuthContainer = styled.div`
  /* margin: auto;
  width: 90%;
  max-width: 1440px;
  height: 100%;
  max-height: 640px; */

  width: 100vw;
  height: 100vh;

  /* height: 560px;
  margin: 3rem auto;
  width: 90%;
  max-width: 1440px;

  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3); */
`;

const AuthButton = styled.button`
  cursor: pointer;
  width: 100%;

  color: var(--color-text-complement);
  background: #dcdce6;
  border-radius: 0.5rem;

  padding: 1.2rem;
  border: 0;
  outline: 0;

  &.validForm {
    color: var(--color-background);
    background: var(--color-secondary);
  }
`;

const AuthForm = styled(FormikForm)`
  > div {
    border: 1px solid var(--color-line-in-white);
  }

  > div:first-child {
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }

  > div:not(:first-child) {
    border-top: none;
  }

  > div:last-of-type {
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
  }
`;

export { AuthButton, AuthForm, AuthContainer };
