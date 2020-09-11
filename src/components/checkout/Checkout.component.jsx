import React from 'react';
import './Checkout.styles.css';
import Subtotal from '../subtotal/Subtotal.component';
import CheckoutProduct from '../checkout-product/CheckoutProduct.component';
import { useStateValue } from '../../redux/StateProvider';

function Checkout() {
    const [{basket, user}, dispatch] = useStateValue();
    return (
		<div className="checkout">
			<div className="checkout-left">
				<img
					className="checkout-ad"
					src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
					alt="ads"
				/>
				<div>
				<h3>Hello, {user?.email}</h3>
					<h2 className="checkout-title">
						Your Shopping Basket
						{basket.map((item) => (
							<CheckoutProduct 
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
						))}
					</h2>
				</div>
			</div>
			<div className="checkout-right">
				<Subtotal />
			</div>
		</div>
	);
};

export default Checkout;