import { cartActionTypes } from './types';
import { newCartItems, updateCart } from './utils';

const INITIAL_STATE = {
    cartItems: [{ id: "42f392a2-2d23-4588-932f-a1a3367d9d58", qty: 2}]
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case cartActionTypes.ADD_ITEM_TO_CART: {
            return {
                ...state,
                cartItems: newCartItems(state.cartItems, action.payload)
            }
        }
        case cartActionTypes.UPDATE_QTY: {
            return {
                ...state,
                cartItems: updateCart(state.cartItems, action.payload)
            }
        }
        default:
            return state;
    }
}

export default cartReducer;