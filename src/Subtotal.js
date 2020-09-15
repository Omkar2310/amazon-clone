import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import {useStateValue} from "./StateProvider";
import {getTotalBasket} from './reducer.js'
function Subtotal() {
	const [{basket}, dispatch] = useStateValue();
	

	return (
		<div className="subtotal">
			<CurrencyFormat
			renderText={(value) =>(
					<>
						<p> Subtotal ({basket?.length} items):
							<strong>  {value} </strong>
						</p>
						<small className="subtotal_gift">
							<input type="checkbox" />This order contains gift
						</small>
					</>	

				)}
				decimalScale={2}
				value={getTotalBasket(basket)}
				displayType={"text"}
				thousandSeperator={true}
				prefix={'\u20B9'}
			/>

			<button> Proceed to Checkout </button>
		</div>
	)
}

export default Subtotal