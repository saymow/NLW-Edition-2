import styled from "styled-components";
import { Form as FormikForm } from "formik";

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

export { AuthButton, AuthForm };
