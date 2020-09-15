import React from 'react'
import './CheckoutProduct.css'
import {useStateValue} from "./StateProvider";

function CheckoutProduct({id,image,title,price,rating}) {
		const [{basket}, dispatch] = useStateValue();
		const removefromBasket=()=>{
				dispatch({
					type:'REMOVE_FROM_BASKET',
					id:id,
				})
		}
	return (
		<div className="checkoutProduct">
			<img className="checkout_image" src={image} alt=""/>
			<div className="checkout_info">
				<p className="checkout_title">{title}
				</p>
				<p className="checkout_price">
				<small> {'\u20B9'}</small>
				<strong>{price} </strong>
				</p>
				<div className="checkout_product_rating">
					{
							Array(rating).fill().map((_,i)=>(
							<p> ⭐ </p>
							))
					}
				</div>
				<button onClick={removefromBasket}> Remove from basket  </button>
			</div>	
		</div>
	)
}

export default CheckoutProduct