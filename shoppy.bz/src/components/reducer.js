export const initialState = {
    cart: [],
    user: null
};

//Selector cartTotal
export const getcartTotal = (cart) =>
    cart?.reduce((amount, item) => item.price + amount, 0);

const reducer=(state, action) => {
    console.log(action);
    switch(action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.item],
            };
        
        case 'EMPTY_CART':
            return {
                ...state, 
                cart: []
            };

        case 'REMOVE_FROM_CART':
            const index = state.cart.findIndex(
                (cartItem) => cartItem.id === action.id
            );
            let newcart = [...state.cart];

            if (index >= 0) {
                newcart.splice(index, 1);

            // eslint-disable-next-line no-lone-blocks
            } /*else {
                console.warn(
                    'Cant remove the product (id: ${action.id}) as its not in the cart'
                )
            }*/
            
            return {
                ...state,
                cart: newcart
            };
        
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };

        default:
            return state;
    }
};

export default reducer;