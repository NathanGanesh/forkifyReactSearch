import React from 'react';
import { Link } from 'react-router-dom';

export default function Recipe(props) {
	const { image_url, title, source_url, publisher, recipe_id } = props.recipe;
	return (
		<div className="grid-item">
			<div className="grid-image">
				<img src={`${image_url}`} />
			</div>
			<div className="grid-details">
				<h4> {title}</h4>
				<h5>{publisher}</h5>
				<form action={source_url}>
					<button className="button-source">Recipe Url</button>
				</form>
				<Link to={`/recipe/${recipe_id}`}>Details</Link>
			</div>
		</div>
	);
}
