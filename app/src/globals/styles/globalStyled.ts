import { createGlobalStyle } from "styled-components";

export const GlobaleStyled = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;    
    box-sizing: border-box;
  }

  html {
    font-size: 67.5%;
    font-family: "Roboto", sans-serif;
  } 

  body {            
    background: linear-gradient(90deg, #9541EE, #00C4FD);
  }  
`