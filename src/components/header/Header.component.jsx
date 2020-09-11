import React from "react";
import "./Header.styles.css";

import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../../redux/StateProvider";
import { auth } from "../../firebase/firebase.utils";

function Header() {
	const [{ basket, user }, dispatch] = useStateValue();

	const handleAuthentication = () => {
		if (user) auth.signOut();
	};

	return (
		<div className="header">
			<Link to="/">
				<img
					className="header-logo"
					src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
					alt="amazon-logo"
				/>
			</Link>
			<div className="header-search">
				<input className="header-searchInput" type="text" />
				<SearchIcon className="header-searchIcon" />
			</div>
			<div className="header-nav">
				<Link to={!user && "/login"}>
					<div onClick={handleAuthentication} className="header-option">
						<span className="header-optionLineOne">
							Hello {user ? `${user?.email}` : "Guest"}
						</span>
						<span className="header-optionLineTwo">
							{user ? "Sign Out" : "Sign In"}
						</span>
					</div>
				</Link>
				<div className="header-option">
					<span className="header-optionLineOne">Returns</span>
					<span className="header-optionLineTwo">& Orders</span>
				</div>
				<div className="header-option">
					<span className="header-optionLineOne">Your</span>
					<span className="header-optionLineTwo">Prime</span>
				</div>
				<Link to="/checkout">
					<div className="header-optionBasket">
						<ShoppingBasketIcon />
						<span className="header-optionLineTwo header-basketCount">
							{basket?.length}
						</span>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default Header;
