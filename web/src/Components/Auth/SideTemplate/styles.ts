import styled from "styled-components";

export const Container = styled.main`
  position: relative;
  background: var(--color-background);

  margin: 5rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

export const FormContainer = styled.section`
  width: 90%;
  max-width: 340px;

  h2 {
    font-size: 3rem;
    color: var(--color-text-title);
    margin-bottom: 2.5rem;
  }
`;
