import React from "react";
import styled from "styled-components";

const RecipeContent = styled.div`
  display: block;
  border: 1px solid white;
  border-radius: 1rem;
  padding: 4rem;
  background: #2c2c2c;
`;
const Image = styled.div`
  width: 50%;
  object-fit: cover;
  margin: 3rem 0;
  height: 300px;
`;

const ingList = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-around;
`;
const Recipe = ({ recipe }) => {
  const { totalNutrients, label, image, ingredients } = recipe.recipe;

  const carbs = Math.floor(
    totalNutrients.CHOCDF.quantity / recipe.recipe.yield
  );

  return (
    <RecipeContent>
      <h2>{label}</h2>
      <h3>Ingredients</h3>
      <ingList>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient.text}</li>
        ))}
      </ingList>
      <Image>
        <img src={image} style={{ borderRadius: "50%" }} alt={label} />
      </Image>
      <p>
        <strong>Servings: </strong> {recipe.recipe.yield}
      </p>
      <p>
        <strong>Carbs</strong>: {carbs} <strong>Per Serving</strong>
      </p>
    </RecipeContent>
  );
};

export default Recipe;
