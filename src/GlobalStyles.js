import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
  }

  body {
    font-family: "Poppins", sans-serif;
  }

  h1{
      font-size:6.4rem;
      color:white;
      margin-bottom:3rem;
  }

  h1 span{
    color:#057805;
  }
  h2{
      font-size:3.2rem;
      color:#E1E1E1;
  }
  p{
font-size:1.6rem;
color:#5D5D5D;
  }
  a{
      text-decoration:none;
      color: #373737;
  font-size: 1.6rem;
  text-transform:capitalize;
  }
  ul{
      list-style:none;
  }
`;
export const Container = styled.div`
  background: #373737;
`;

export default GlobalStyles;
