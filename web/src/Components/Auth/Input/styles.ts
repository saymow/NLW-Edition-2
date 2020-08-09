import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  overflow: hidden;
  background: var(--color-box-footer);
  padding: 0.7rem 0;

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
  padding: 1.4rem 1rem 0.6rem;
  border: 0;
  width: 100%;
  outline: 0;
  background: var(--color-box-footer);

  &:focus {
    border-left: 2px solid var(--color-primary);
  }

  &:focus + svg {
    color: var(--color-primary);
  }
`;
