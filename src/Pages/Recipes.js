import React, { useState, useEffect } from "react";
import { Container } from "../GlobalStyles";
import Recipe from "../components/Recipe";
import styled from "styled-components";
import { pageAnimation } from "../animations";
import { motion } from "framer-motion";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");
  const [isLoading, setIsLoading] = useState(true);
  const APP_ID = "4f91a5c7";
  const APP_KEY = "4a829ae80b48951a2b9f96ca16b2e0dc";

  const url = `https://api.edamam.com/search?q=${query}&ingr=7&nutrients%5BCHOCDF%5D=20&app_id=${APP_ID}&app_key=${APP_KEY}`;
  useEffect(() => {
    const getData = () => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setRecipes(data.hits);
          setIsLoading(false);
        })
        .catch((err) => console.log(err));
    };

    getData();
  }, [url]);

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  };
  console.log(url);
  return (
    <Container>
      <StyledForm onSubmit={getSearch}>
        <SearchBar
          type="text"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          value={search}
          placeholder="Find more recipes"
        />
        <Button type="submit">Search</Button>
      </StyledForm>

      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <StyledRecipe variants={pageAnimation} initial="hidden" animate="show">
          {recipes.map((recipe) => (
            <Recipe
              className="recipe"
              recipe={recipe}
              key={recipe.recipe.calories}
            />
          ))}
        </StyledRecipe>
      )}
    </Container>
  );
};
const StyledRecipe = styled(motion.div)`
  display: grid;
  max-width: 1366px;
  width: 80%;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4rem;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    width: 60%;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    width: 90%;
  }
`;

const StyledForm = styled.form`
  width: 80%;
  text-align: center;
  margin: 0rem auto 5rem auto;
  padding: 8rem;
  height: 5vh;
`;

const SearchBar = styled.input`
  font-family: inherit;
  font-size: 1.6rem;
  width: 50%;
  padding: 1rem;
  outline: none;
  border: none;
  border-radius: 2rem;
  margin-right: 1rem;

  @media (max-width: 600px) {
    width: 70%;
  }

  &:focus {
    outline: none;
  }
`;
const Button = styled.button`
  font-size: 1.6rem;
  border: none;
  font-family: inherit;
  border-radius: 2rem;
  cursor: pointer;
  padding: 1rem;
  transition: all 0.3s ease;
  background: #0afcd7;

  &:hover {
    background: #07c0a4;
  }
`;
export default Recipes;
