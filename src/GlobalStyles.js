import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { motion } from "framer-motion";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
    @media (max-width:1400px){
       font-size:9px;
    }
  @media (max-width:800px){
      font-size:8px;
    }
  @media (max-width:600px){
      font-size:7px;
    }
  }

  body {
    font-family: "Poppins", sans-serif;
    overflow-x:hidden;
    background: #373737;

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
export const Container = styled(motion.div)`
  background: #373737;
`;

export const Image = styled(motion.div)`
  width: 50%;
  object-fit: cover;

  @media (max-width: 750px) {
    width: 75%;
  }
  @media (max-width: 600px) {
    width: 85%;
  }
  @media (max-width: 400px) {
    width: 95%;
  }
`;
export default GlobalStyles;
