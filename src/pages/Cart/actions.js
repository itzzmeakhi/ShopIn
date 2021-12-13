import { cartActionTypes } from './types';

export const addItemToCart = item => {
    return {
        type: cartActionTypes.ADD_ITEM_TO_CART,
        payload: item
    }
}

export const updateQty = item => {
    return {
        type: cartActionTypes.UPDATE_QTY,
        payload: item
    }
}