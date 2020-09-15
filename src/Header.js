import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from 'react-router-dom'
import {useStateValue} from "./StateProvider";
import {auth} from './firebase'
function Header() {
	const [{basket,user}, dispatch] = useStateValue();
	const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }
	return (
		<div className="header">
			<Link to="/">
			<img className='header_logo' src="https://images-na.ssl-images-amazon.com/images/I/31%2BDgxPWXtL.jpg"
			/>
			</Link>
			<div className='header__search'>
				<input className='header_search_Input'
				type='text'/>
				<SearchIcon className="header_searchicon"/>
			</div>	

			<div className="header_nav">
			<Link to='/login'>
				<div onClick={handleAuthenticaton} className="header_option">
					<span className="header__optionOne">Hello {!user ? 'Guest' : user.email}</span>
					<span className="header__optionTwo">{user ? 'Sign Out' : 'Sign In'}</span>
				</div>
			</Link>	
				<div className="header_option">
					<span className="header__optionOne">Returns</span>
					<span className="header__optionTwo">& Orders</span>
				</div>
				<div className="header_option">
					<span className="header__optionOne">Your</span>
					<span className="header__optionTwo">Prime</span>
				</div>
				<Link to="/checkout">
					<div className="header_optionbasket">
						<ShoppingBasketIcon className="header_basketicon"/>
						<span className="header__optionTwo header_basketcount">{basket?.length}</span>
					</div>
				</Link>
			</div>
		</div>
	)
}

export default Header