import styled from "styled-components";

import { AuthButton, AuthContainer } from "../../Styles/utils";

export const Container = styled(AuthContainer)`
  display: grid;
  grid-template-columns: 45% 55%;

  @media (max-width: 1000px) {
    grid-template-columns: 55% 45%;
  }

  @media (max-width: 660px) {
    grid-template-columns: 1fr;
  }
`;

export const RecoverPassContainer = styled.div`
  position: relative;

  h2 {
    max-width: 70%;
  }
`;

export const Form = styled.form`
  margin-top: 2.5rem;

  div {
    position: relative;
    border: 1px solid var(--color-line-in-white);
    overflow: hidden;
    background: var(--color-box-footer);
    padding: 0.7rem 0;
    border-radius: 0.5rem;
    margin-bottom: 2rem;

    span {
      color: var(--color-text-complement);
      line-height: 1.6rem;
      font-size: 1.6rem;
      top: calc(50% - 0.8rem);
      position: absolute;
      left: 1rem;

      transition: all 200ms ease;

      &.repositioned {
        font-size: 1.2rem;
        top: 0.5rem;
      }
    }

    input:focus + span {
      font-size: 1.2rem;
      top: 0.5rem;
    }
  }
`;

export const Input = styled.input`
  font-size: 1.6rem;
  padding: 1.4rem 1rem 0.6rem;
  border: 0;
  width: 100%;
  background: var(--color-box-footer);
  outline: 0;

  &::placeholder {
    color: var(--color-text-complement);
  }

  &:focus {
    border-left: 2px solid var(--color-primary);
  }
`;

export const Button = styled(AuthButton)``;

export const NavigateBackImage = styled.img`
  position: absolute;
  top: 1rem;
`;
