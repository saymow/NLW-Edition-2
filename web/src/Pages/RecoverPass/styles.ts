import styled from "styled-components";
import { ArrowNarrowLeft } from "@styled-icons/heroicons-outline";

import { AuthButton } from "../../Styles/utils";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-columns: 45% 55%;
`;
export const RecoverPassContainer = styled.section`
  position: relative;
  margin-bottom: 40%;

  h2 {
    max-width: 70%;
  }
`;

export const Form = styled.form`
  margin-top: 2.5rem;

  div {
    border: 1px solid var(--color-line-in-white);
    overflow: hidden;
    background: var(--color-box-footer);
    padding: 0.7rem 0;
    border-radius: 0.5rem;
    margin-bottom: 2rem;
  }
`;

export const Input = styled.input`
  font-size: 1.6rem;
  padding: 1rem;
  border: 0;
  width: 100%;
  outline: 0;

  &::placeholder {
    color: var(--color-text-complement);
  }

  &:focus {
    border-left: 2px solid var(--color-primary);
  }
`;

export const Button = styled(AuthButton)``;

export const ArrowBack = styled(ArrowNarrowLeft)`
  position: absolute;
  top: -4rem;
  margin-bottom: auto;
  color: var(--color-primary);

  width: 6rem;
  height: 6rem;
`;
