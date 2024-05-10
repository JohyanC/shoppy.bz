export const initialState = {
    basket: [],
};

//Selector basketTotal
export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

//Selector basketInfo
export const getbasketInfo = (basket) =>
    basket?.item;

const reducer=(state, action) => {
    console.log(action);
    switch(action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };

        default:
            return state;
    }
};

export default reducer;