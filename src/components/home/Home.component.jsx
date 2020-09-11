import React from "react";
import "./Home.styles.css";

import Product from "../product/Product.component";

function Home() {
	return (
		<div className="home">
			<div className="home-container">
				<img
					className="home-image"
					src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
					alt="ads"
				/>
				<div className="home-row">
					<Product
						id="12321342"
						title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
						image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400.jpg"
						price={11.96}
						rating={5}
					/>
					<Product
						id="49538094"
						title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
						image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
						price={239}
						rating={4}
					/>
				</div>
				<div className="home-row">
					<Product
						id="4903850"
						title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
						image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
						price={199.99}
						rating={3}
					/>
					<Product
						id="23445930"
						title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
						image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
						price={98.99}
						rating={5}
					/>
					<Product
						id="3254354345"
						title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
						image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
						price={598.99}
						rating={5}
					/>
				</div>
				<div className="home-row">
					<Product
						id="90829332"
						title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
						image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
						price={1049.98}
						rating={5}
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
