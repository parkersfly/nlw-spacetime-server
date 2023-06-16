import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Poppins", sans-serif;
    color: ${({ theme}) => theme.COLORS.BLACK};
  }

  .flex {
    display: flex;
  }

  .column {
    flex-direction: column;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: ${({ theme}) => theme.COLORS.BLACK};
  }

  button, a {
    cursor: pointer;
    font-family: "Poppins", sans-serif;
  }

  button {
    background: none;
    border: none;
  }
`