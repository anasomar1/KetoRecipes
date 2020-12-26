import React from "react";
import styled from "styled-components";
import HeroImg from "../images/HappyGirl.svg";
import { Container } from "../GlobalStyles";

const HeroContainer = styled(Container)`
  background: #373737;
`;
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
const Image = styled.div`
  width: 50%;
  height: 50vh;
  object-fit: cover;
`;

const Button = styled.button`
  color: #373737;
  margin-top: 4rem;
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

const Hero = () => {
  return (
    <HeroContainer>
      <StyledHero>
        <HeroContent>
          <h1>
            Eat fat, <span>lose</span> fat
          </h1>
          <h2>It's not just a diet... it's life well lived.</h2>
          <Button>Lose Weight Now</Button>
        </HeroContent>
        <Image>
          <img src={HeroImg} alt="" />
        </Image>
      </StyledHero>
    </HeroContainer>
  );
};

export default Hero;
