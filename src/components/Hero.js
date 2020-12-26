import React from "react";
import styled from "styled-components";
import HeroImg from "../images/HappyGirl.svg";
import { Container, Image } from "../GlobalStyles";
import { motion } from "framer-motion";
import { pageAnimationX } from "../animations";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <Container variants={pageAnimationX} initial="hidden" animate="show">
      <StyledHero>
        <HeroContent>
          <h1>
            Eat fat, <span>lose</span> fat
          </h1>
          <h2>It's not just a diet... it's life well lived.</h2>
          <p>Learn how to lose weight without reducing your calories</p>
          <Link to="/recipes">
            <Button>Find recipes</Button>
          </Link>
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

  @media (max-width: 1300px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
`;

const HeroContent = styled(motion.div)`
  display: flex;
  flex-direction: column;

  @media (max-width: 1300px) {
    align-items: center;
    text-align: center;
  }
`;

const Button = styled(motion.button)`
  color: #373737;
  font-size: 1.6rem;
  background: #0afcd7;
  width: 20rem;
  border-radius: 1rem;
  padding: 1.5rem;
  font-weight: bold;
  border: none;

  &:hover {
    background: #07c0a4;
  }
`;

export default Hero;
