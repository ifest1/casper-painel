import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background-color: #312e38;
    color: black;
    -webkit-font-smoothing: antialiased;
    display: flex;
    justify-content: center;
  }

  body, input, button {
    font-family: sans-serif;
    align-items: center;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;