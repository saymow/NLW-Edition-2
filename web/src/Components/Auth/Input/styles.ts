import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  overflow: hidden;
  background: var(--color-box-footer);
  padding: 0.7rem 0;

  svg {
    cursor: pointer;
    width: 2.5rem;
    height: 2.5rem;
    position: absolute;
    right: 1.5rem;
    top: calc(50% - 1.25rem);
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

  &:focus + svg {
    color: var(--color-primary);
  }
`;
