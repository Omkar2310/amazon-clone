export const initialState = {
	basket:[],
	user:null,
}

export const getTotalBasket= (basket) => basket?.reduce((amt, item) =>
  amt + item.price
	, 0);

const reducer =(state,action) =>{
	console.log(action);
	switch (action.type) {

	case 'ADD_TO_BASKET':
		return { ...state, basket:[...state.basket,action.item],
		 };
	case 'REMOVE_FROM_BASKET':
		const index=state.basket.findIndex(
			(basketitem) => basketitem.id=== action.id
			);
			let newBasket =[...state.basket];
			if(index>=0)
			{
				newBasket.splice(index,1);
			}else{
				console.warn(`Can't remove the product (id:${action}) as it's not in Basket!`)
			}
		return {
				...state,
				basket:newBasket
		};

	case "SET_USER":
		return{
				...state,
				user:action.user
		};
	default:
		return state;
	}
};

export default reducer;
