import React from 'react';

const Recipe = ({ title, calories, ingredients, image }: any): JSX.Element => {
  return (
    <div className="recipe">
      <h2 className="recipe__title">{title}</h2>
      <p className="recipe__calories">Calories: {parseInt(calories, 10)}</p>
      <ul className="recipe__ingredients">
        {ingredients.map((ingredient: any) => (
          <li key={ingredient.text}>{ingredient.text}</li>
        ))}
      </ul>
      <img className="recipe__img" src={image} alt={title} />
    </div>
  );
};

export default Recipe;
