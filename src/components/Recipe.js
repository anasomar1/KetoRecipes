import React from "react";
import styled from "styled-components";

const Recipe = ({ recipe }) => {
  const { totalNutrients, label, image, ingredients } = recipe.recipe;

  const carbs = Math.floor(
    totalNutrients.CHOCDF.quantity / recipe.recipe.yield
  );

  return (
    <RecipeContent>
      <h2>{label}</h2>
      <h3>Ingredients</h3>
      <IngList>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient.text}</li>
        ))}
      </IngList>
      <Image>
        <img src={image} style={{ borderRadius: "50%" }} alt={label} />
      </Image>
      <p style={{ marginBottom: "1px" }}>
        <strong> {recipe.recipe.yield} </strong>
        <p style={{ display: "inline" }}>servings.</p>
      </p>
      <p>
        <strong>{carbs}</strong>
        <p style={{ display: "inline" }}> carbs per perving</p>
      </p>
    </RecipeContent>
  );
};
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

const IngList = styled.ul`
  display: flex;
  flex-direction: column;
  grid-gap: 1rem;
  list-style: none;
  justify-content: space-around;
`;

export default Recipe;
