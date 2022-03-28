import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Trebuchet MS", sans-serif;
  }

  body {
    background: ${props => props.theme.background};
    font: 400 16px "Trebuchet MS", sans-serif;
  }

  img {
    width: 100%;
    max-width: 100%;
  }
  
  ul {
    list-style: none;
  }
  
  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  .container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
  }
  .scroll::-webkit-scrollbar{
    display: none;
  }
`;
