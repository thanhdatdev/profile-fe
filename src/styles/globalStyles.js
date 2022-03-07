import { createGlobalStyle } from "styled-components";
import { Color } from "./style";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
  }
  html, body {
    height: 100%;
    font-family: 'Roboto', sans-serif;
    background-color: ${Color.pageBackgroundColor};
    overflow-x: hidden;
  }
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  input, button, textarea, select {
    font: inherit;
  }
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }
  #root, #__next {
    isolation: isolate;
  }
  a{text-decoration:none; color:inherit; cursor:pointer;}
  button{background-color:transparent; color:inherit; border-width:0; cursor:pointer;}
  ol,ul{
    list-style-type: none;
    padding: 0;
  }
`;

export default GlobalStyle;
