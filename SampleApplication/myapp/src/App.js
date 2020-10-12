import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './Recipe'

const App = () => {

  const APP_ID = 'db7ae04e';
  const APP_KEY = "8ab7a49e847dff94346ab7dce82c3c6f";

  //recipes is a array and setRecipes is a method. API will 
  const [recipes, setRecipes] = useState([]);

  const [strSearch, setSearch] = useState("");

  const [query, setQuery] = useState("chicken");

  //useEffect runs once when application mounts
  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  const updateSeacrh = e => {
    setSearch(e.target.value);
    console.log(strSearch);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(strSearch);
    setSearch("");
  }

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={strSearch} onChange={updateSeacrh}></input>
        <button className="search-button">Search</button>
      </form>
      {
        recipes.map(rec => (
          <Recipe
            key={rec.recipe.label}
            title={rec.recipe.label}
            calories={rec.recipe.calories}
            image={rec.recipe.image}
            ingredients = {rec.recipe.ingredients}
          />
        ))
      }
    </div>
  );
}

export default App;
