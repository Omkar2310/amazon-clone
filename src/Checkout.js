import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal.js'
import {useStateValue} from "./StateProvider";
import CheckoutProduct from './CheckoutProduct.js'
function Checkout() {
	const [{basket}, dispatch] = useStateValue();
	
	return (
		<div className="checkout" >
			<div className="checkout_left">
				<img className="checkout_ad" 
				src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/CEPC/Wearables/Mi/Redmi_Band/SaleOn/MI-Xiaomi_redmi_Smart_Band_shop-now_1500x300.jpg" alt=""/>
			
			
				<div>
					<h2 className="checkout_title1">
						Your Shopping Basket
					</h2>
						
						{basket.map(item=>(
							<CheckoutProduct
								id={item.id}
								title={item.title}
								image={item.image}
								price={item.price}
								rating={item.rating}
							/>
							))}
				</div>
				
			</div>
			<div className="checkout_right">
				<Subtotal/>
			</div>
		</div>


	)
}

export default Checkout