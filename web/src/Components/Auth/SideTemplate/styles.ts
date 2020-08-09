import styled from "styled-components";

export const Container = styled.main`
  position: relative;
  background: var(--color-background);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

export const FormContainer = styled.section`
  margin: auto 0 auto;

  width: 90%;
  max-width: 340px;

  > div:first-of-type {
    padding-top: 5rem;

    h2 {
      font-size: 3rem;
      color: var(--color-text-title);
      margin-bottom: 2.5rem;
    }
  }
`;
