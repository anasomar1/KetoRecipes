import React from "react";
import styled from "styled-components";
import HeroImg from "../images/HappyGirl.svg";
import { Container, Image } from "../GlobalStyles";

const Hero = () => {
  return (
    <Container>
      <StyledHero>
        <HeroContent>
          <h1>
            Eat fat, <span>lose</span> fat
          </h1>
          <h2>It's not just a diet... it's life well lived.</h2>
          <p>Learn how to lose weight without reducing your calories</p>
          <Button>Lose Weight Now</Button>
        </HeroContent>
        <Image>
          <img src={HeroImg} alt="" />
        </Image>
      </StyledHero>
    </Container>
  );
};

const StyledHero = styled.div`
  width: 80%;
  max-width: 1366px;
  margin: 0 auto;
  height: 90vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  color: #373737;
  font-size: 1.6rem;
  background: #0afcd7;
  width: 20rem;
  border-radius: 1rem;
  padding: 1.5rem;
  font-weight: bold;
  border: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #07c0a4;
  }
`;

export default Hero;
