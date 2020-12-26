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
      margin-bottom:2rem;
      color:#E1E1E1;
  }
  h3{
    font-size:2.4rem;
    margin-bottom:3rem;

      color:#E1E1E1;
  }
  p,li{
font-size:1.6rem;
color:#d1d1d1;
}


  p{
    line-height:2;
    margin-bottom:3rem;
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
  strong{
    text-transform:capitalize;
  }
  .foodsList li{
    margin-bottom:2rem;
  }
`;
export const Container = styled.div`
  background: #373737;
  height: 90%;
`;

export const Image = styled.div`
  width: 50%;
  height: 50vh;
  object-fit: cover;
`;
export default GlobalStyles;
