import './App.css';

import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import RecipeDetails from './RecipeDetails';
import Error from './Error';

export default class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/recipe/:id" component={RecipeDetails} />
					<Route component={Error} />
				</Switch>
			</BrowserRouter>
		);
	}
}
