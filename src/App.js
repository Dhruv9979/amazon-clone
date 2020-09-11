import React, { useEffect } from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/header/Header.component";
import Home from "./components/home/Home.component";
import Checkout from "./components/checkout/Checkout.component";
import LogIn from "./components/login/LogIn.component";
import { auth } from './firebase/firebase.utils';
import { useStateValue } from "./redux/StateProvider";

function App() {
	const [{}, dispatch] = useStateValue();
	//will only run once when the app component will loads.
	useEffect(() => {
		auth.onAuthStateChanged(authUser => {
			if (authUser) {
				dispatch({
					type: "SET_USER",
					user: authUser,
				});
			} else {
				dispatch({
					type: "SET_USER",
					user: null,
				});
			}
		});
	}, {});

	return (
		<Router>
			<div className="app">
				<Switch>
					<Route path="/login">
						<LogIn />
					</Route>
					<Route path="/checkout">
						<Header />
						<Checkout />
					</Route>
					<Route path="/">
						<Header />
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
