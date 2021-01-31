import { createGlobalStyle } from "styled-components";

//Global Style for entire app
const GlobalStyle = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    }

html {
  scrollbar-color: darkgray black;
  scrollbar-width: thin;

  ::-webkit-scrollbar {
    width: 10px;
    }
  ::-webkit-scrollbar-thumb {
    background: darkgray;
    border-radius: 10px; 
    &:hover{
      background: white; 
      }
    }
   
    @media (min-width:1925px) and (max-width:2560px){
      font-size: 125%;
    }

    @media (max-width:1750px){
      font-size: 90%;
    }

    @media (max-width:1550px){
      font-size: 77%;
    }    
}

body {
  background: #030506;
  color: #ecf0f1;
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  
  h1 {
    font-size: 1.65rem;
    font-weight: lighter;
    letter-spacing: 6.5px;
    font-family: 'Pattaya', sans-serif;
    }
  
  h2 {
    font-size: 4.5rem;
    font-weight: 800;
    }
  
  h3 {
    font-size: 3.25rem;
    padding-bottom: 0.5rem;
    }

  ul {
    list-style: none;
    }

  p, li {
    font-size: 1.45rem;
    line-height: 1.65;    
    }

    input, label, textarea, button {
      font-size: 1.35rem;
      font-family: 'Open Sans', sans-serif;
    }

  a {
    text-decoration: none;
    color: #ecf0f1;
    }

  span {
    color: #de354c;
    } 
}

@media screen and (max-width:)

`;

export default GlobalStyle;
