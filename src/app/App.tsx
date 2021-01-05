import React, { useEffect, useState } from 'react';
import Recipe from './components/recipe.component';

const App = (): JSX.Element => {
  const APP_ID = '75dacbe7';
  const APP_KEY = 'fb30cc8e1fbd364407862bb77cfca31b';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('cherry');

  const getRecipes = async () => {
    const res = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await res.json();
    setRecipes(data.hits);
  };

  const updateSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const getSearch = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  useEffect(() => {
    getRecipes();
  }, [query]);

  return (
    <div className="page">
      <div className="container">
        <div className="content">
          <form className="search" onSubmit={getSearch}>
            <h1 className="search__title">Search recipe</h1>
            <input
              className="search__bar"
              type="text"
              value={search}
              placeholder="Cherry"
              required
              onChange={updateSearch}
            />
            <button className="search__btn">Search</button>
          </form>
          <div className="recipes">
            {recipes.map((recipeItem: any) => (
              <Recipe
                key={recipeItem.recipe.label}
                title={recipeItem.recipe.label}
                calories={recipeItem.recipe.calories}
                ingredients={recipeItem.recipe.ingredients}
                image={recipeItem.recipe.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
