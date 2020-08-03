import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  flex-direction: column;

  background: var(--color-primary);

  @media (min-width: 700px) {
    height: 340px;
  }
`;

export const Header = styled.div`
  width: 90%;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  color: var(--color-text-in-primary);
  padding: 1.6rem 0;

  a {
    transition: opacity 200ms ease;

    &:hover {
      opacity: 0.8;
    }

    img {
      height: 3.2rem;
    }
  }

  img {
    height: 1.6rem;
  }

  @media (min-width: 700px) {
    max-width: 1100px;
  }
`;

export const HeaderContent = styled.main`
  width: 90%;
  margin: 0 auto;
  position: relative;
  margin: 3.2rem auto;

  @media (min-width: 700px) {
    flex: 1;
    max-width: 740px;
    margin: 0 auto;
    padding-bottom: 4.8rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    strong {
      max-width: 35rem;
    }
  }

  strong {
    font: bold 3.6rem Archivo;
    line-height: 4.2rem;
    color: var(--color-title-in-primary);
  }
`;
