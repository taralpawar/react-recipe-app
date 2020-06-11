import React, { useEffect, useState } from "react";
import RecipeCard from "./components/card";
import NavBar from "./components/navbar";
import SearchBar from "./components/searchbar";
import {
  Button,
  Form,
  FormControl,
  Navbar,
  Container,
  InputGroup,
  Row,
  Col,
} from "react-bootstrap";

import "./App.css";

const App = () => {
  //const API_KEY = "efda0b273e421da7af1bc8de4a1094ff";  Open weather app id
  const API_ID = "11df7963";
  const API_KEY = "dd41702c8871c1f6fdd333baabc297ec	";

  const [recipe, setRecipe] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    getWeather();
  }, [query]);

  const getWeather = async () => {
    console.log("Fetching");

    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`
    );

    const data = await response.json();
    console.log(data.hits);
    setRecipe(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getQuery = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };
  return (
    <div className="App">
      <Container>
        <Form onSubmit={getQuery} id="SearchForm">
          <InputGroup className="mb-3">
            <FormControl
              placeholder="What would you like to cook today !"
              value={search}
              onChange={updateSearch}
              id="InputText"
            />
            <InputGroup.Append>
              <Button
                variant="outline-secondary"
                type="submit"
                id="SearchButton"
              >
                Search
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Form>
      </Container>

      <Container>
        <Row>
          {recipe.map((item) => (
            <Col sm={4}>
              <RecipeCard
                id="RecipeCard"
                key={item.recipe.label}
                title={item.recipe.label}
                calories={item.recipe.calories}
                image={item.recipe.image}
                labels={item.recipe.healthLabels}
                ingredients={item.recipe.ingredientLines}
                recipeurl={item.recipe.url}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default App;
