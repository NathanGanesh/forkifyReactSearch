import React from 'react';
import Recipe from './Recipe';

export default function RecipeList({ recipes, onclick }) {
	console.log(recipes);
	return (
		<div className="grid-list">
			{recipes.map((recipe, index) => {
				return <Recipe key={recipe.recipe_id} recipe={recipe} onclick={onclick} />;
			})}
		</div>
	);
}
