import React from "react";
import "./CheckoutProduct.styles.css";

function CheckoutProduct({ id, image, title, price, rating }) {
	return (
		<div className="checkout-product">
			<img className="checkout-product-image" src={image} alt={title} />
			<div className="checkout-product-info">
				<p className="checkout-product-title">{title}</p>
				<p className="checkout-product-price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="checkout-product-rating">
					{Array(Math.floor(rating))
						.fill()
						.map((_, i) => (
							<span role="img" aria-label="star">
								⭐
							</span>
						))}
				</div>
                <button></button>
			</div>
		</div>
	);
}

export default CheckoutProduct;
