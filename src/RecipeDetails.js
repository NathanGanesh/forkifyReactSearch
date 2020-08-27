import React, { Component } from 'react';

export default class RecipeDetails extends Component {
	state = {
		url: `https://forkify-api.herokuapp.com/api/get?rId=${this.props.match.params.id}`,
		publisher: '',
		ingredients: [],
		image_url: '',
		title: ''
	};

	async componentDidMount() {
		const data = await fetch(this.state.url);
		const jsonData = await data.json();

		console.log(jsonData);
		this.setState({
			url: jsonData.recipe.source_url,
			publisher: jsonData.recipe.publisher_url,
			ingredients: jsonData.recipe.ingredients,
			image_url: jsonData.recipe.image_url,
			title: jsonData.recipe.title
		});
	}

	render() {
		let arr = this.state.ingredients;
		return (
			<div className="recipe-detail">
				<h1>{this.state.title}</h1>
				<div>
					<img src={`${this.state.image_url}`} />
				</div>
				<form action={this.state.publisher}>
					<button className="button-source">publisher Url</button>
				</form>
				<form action={this.state.url}>
					<button className="button-source">recipe Url</button>
				</form>
				{arr.map((ingredient, index) => {
					return <li key={index}>{ingredient}</li>;
				})}

				<p>{this.state.publisher}</p>
			</div>
		);
	}
}
