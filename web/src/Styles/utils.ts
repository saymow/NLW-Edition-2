import styled from "styled-components";

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

export { AuthButton };
