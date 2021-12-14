import { cartActionTypes } from './types';
import { 
        newCartItems, 
        updateCart,
        removeItem } from './utils';

import data from './../../data.json';

const INITIAL_STATE = {
    cartItems: [...data.filter((_,idx) => idx < 4).map(item => {return {...item, qty: 2}})]
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
        case cartActionTypes.REMOVE_ITEM: {
            return {
                ...state,
                cartItems: removeItem(state.cartItems, action.payload)
            }
        }
        default:
            return state;
    }
}

export default cartReducer;