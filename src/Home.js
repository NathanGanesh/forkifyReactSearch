import Title from './Title';
import Search from './Search';
import React, { Component } from 'react';
import RecipeList from './RecipeList';
export default class Home extends Component {
	state = {
		recipes: [],
		query: '',
		loading: false,
		url: `https://forkify-api.herokuapp.com/api/search?q=sushi`,
		searchUrl: `https://forkify-api.herokuapp.com/api/search?q=`
	};

	async getvalues() {
		const data = await fetch(this.state.url);
		const jsonData = await data.json();
		this.setState({
			recipes: jsonData.recipes
		});
	}

	async componentDidMount() {
		this.getvalues();
	}

	onHandleChange = (event) => {
		event.preventDefault();

		this.setState({
			query: event.target.value
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		const { searchUrl, query } = this.state;
		// console.log(searchUrl);
		// console.log(query);
		console.log(`${searchUrl}${query}`);
		this.setState({
			url: `${searchUrl}${query}`
		});
		this.getvalues();
	};

	render() {
		return (
			<div>
				<div className="god">
					<Title title="Search for recipe with forkify" />
					<Search value={this.state.query} onchange={this.onHandleChange} onsubmit={this.handleSubmit} />
					<Title title="recipe list" />
					<RecipeList recipes={this.state.recipes} />
				</div>
			</div>
		);
	}
}
