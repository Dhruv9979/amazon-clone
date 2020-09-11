import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/header/Header.component";
import Home from "./components/home/Home.component";
import Checkout from './components/checkout/Checkout.component';

function App() {
	return (
		<Router>
			<div className="app">
				<Header />
				<Switch>
					<Route path="/checkout">
						<Checkout />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
