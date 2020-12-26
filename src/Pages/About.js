import React from "react";
import { Container, Image } from "../GlobalStyles";
import styled from "styled-components";
import Food1 from "../images/Food1.jpg";
import { pageAnimation } from "../animations";

const About = () => {
  return (
    <Container variants={pageAnimation} initial="hidden" animate="show">
      <StyledAbout>
        <h2>What's Keto?</h2>
        <p>
          Keto basics The ketogenic diet is a very low carb, high fat diet that
          shares many similarities with the Atkins and low carb diets. It
          involves drastically reducing carbohydrate intake and replacing it
          with fat. This reduction in carbs puts your body into a metabolic
          state called ketosis. When this happens, your body becomes incredibly
          efficient at burning fat for energy. It also turns fat into ketones in
          the liver, which can supply energy for the brain. Ketogenic diets can
          cause significant reductions in blood sugar and insulin levels. This,
          along with the increased ketones, has some health benefits.
        </p>
        <ImageContainer>
          <img src={Food1} alt="" />
        </ImageContainer>

        <h2>What is ketosis?</h2>
        <p>
          Ketosis is a metabolic state in which your body uses fat for fuel
          instead of carbs. It occurs when you significantly reduce your
          consumption of carbohydrates, limiting your body’s supply of glucose
          (sugar), which is the main source of energy for the cells. Following a
          ketogenic diet is the most effective way to enter ketosis. Generally,
          this involves limiting carb consumption to around 20 to 50 grams per
          day and filling up on fats, such as meat, fish, eggs, nuts, and
          healthy oils. It’s also important to moderate your protein
          consumption. This is because protein can be converted into glucose if
          consumed in high amounts, which may slow your transition into ketosis.
          Practicing intermittent fasting could also help you enter ketosis
          faster. There are many different forms of intermittent fasting, but
          the most common method involves limiting food intake to around 8 hours
          per day and fasting for the remaining 16 hours. Blood, urine, and
          breath tests are available, which can help determine whether you’ve
          entered ketosis by measuring the amount of ketones produced by your
          body. Certain symptoms may also indicate that you’ve entered ketosis,
          including increased thirst, dry mouth, frequent urination, and
          decreased hunger or appetite.
        </p>

        <h2>Foods to avoid</h2>
        <h3>
          Here’s a list of foods that need to be reduced or eliminated on a
          ketogenic diet:
        </h3>
        <ul className="foodsList">
          <li>
            <strong>sugary foods: </strong>soda, fruit juice, smoothies, cake,
            ice cream, candy, etc.
          </li>
          <li>
            <strong>grains or starches: </strong>wheat-based products, rice,
            pasta, cereal, etc.
          </li>
          <li>
            <strong>fruit: </strong>all fruit, except small portions of berries
            like strawberries
          </li>
          <li>
            <strong>beans or legumes: </strong>peas, kidney beans, lentils,
            chickpeas, etc.
          </li>
          <li>
            <strong>low fat or diet products: </strong>low fat mayonnaise, salad
            dressings, and condiments
          </li>
        </ul>
      </StyledAbout>
    </Container>
  );
};

const StyledAbout = styled.div`
  width: 80%;
  max-width: 1366px;
  margin: 0 auto;
  padding: 8rem 0;
  height: 100%;
`;

const ImageContainer = styled(Image)`
  margin-bottom: 4rem;
  @media (max-width: 720px) {
    display: none;
  }
`;

export default About;
