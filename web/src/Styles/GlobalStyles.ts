import styled, { createGlobalStyle } from "styled-components";

import { themeTypes } from "../Helper/theme_Related";

const GlobalStyles = createGlobalStyle<{ theme: themeTypes }>`
  :root {
    --color-background: ${({ theme }) => theme.color_background};
    --color-primary-lighter: #9871F5;
    --color-primary-light: #916BEA;
    --color-primary: #8257E5;
    --color-primary-dark: #774DD6;
    --color-primary-darker: #6842C2;
    --color-secondary: ${({ theme }) => theme.color_secondary};
    --color-secondary-dark: #04BF58;
    --color-title-in-primary: #FFFFFF;
    --color-text-in-primary: #D4C2FF;
    --color-text-title: ${({ theme }) => theme.color_text_title};
    --color-text-complement: #9C98A6;
    --color-text-base: ${({ theme }) => theme.color_text_base};
    --color-line-in-white: ${({ theme }) => theme.color_line_in_white};
    --color-input-background: ${({ theme }) => theme.color_input_background};
    --color-button-text: #FFFFFF;
    --color-box-base: ${({ theme }) => theme.color_box_base};
    --color-box-footer: ${({ theme }) => theme.color_box_footer};

    font-size: 60%;
    
    @media (min-width: 700px) {
      font-size: 62.5%;
    }
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    transition: all 200ms ease;
    transition-property: background-color, color;
  }


  html, body, #root {
    height: 100vh;
  }

  body {
    background: var(--color-background);
  }

  #root {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  body,
  input,
  select,
  option,
  button,
  textarea {
    font: 500 1.6rem Poppins;
    color: var(--color-text-base);
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const Container = styled.div`
  width: 90vw;
  max-width: 700px;
`;

export default GlobalStyles;
