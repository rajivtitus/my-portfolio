import { createGlobalStyle } from "styled-components";

//Global Style for entire app
const GlobalStyle = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    }

body {
  background: #030506;
  color: #ecf0f1;
  font-family: 'Roboto', sans-serif;
  
  h1 {
    font-size: 3.5rem;
    font-family: 'Dosis', sans-serif;
    }
  
  h2 {
    font-size: 2.75rem;
    padding-bottom: 1rem;
    }
  
  h3 {
    font-size: 1.75rem;
    }

  p {
    font-size: 1.15rem;
    }

    span {
    color: #de354c;
  }
}

`;

export default GlobalStyle;
