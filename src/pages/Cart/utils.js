export const newCartItems = (cartItems, newItem) => {
    const isItemAlreadyInCart = cartItems.findIndex(item => item.id === newItem.id);
    let updatedCartItems = [];
    if(isItemAlreadyInCart === -1) {
        updatedCartItems = [...cartItems, {...newItem, qty: newItem.qty}];
    } else {
        updatedCartItems = [...cartItems];
        updatedCartItems[isItemAlreadyInCart].qty = newItem.qty;
    }
    return updatedCartItems;
}

export const updateCart = (cartItems, item) => {
    const itemIdx = cartItems.findIndex(cartItem => cartItem.id === item.id);
    let updatedCartItems = [...cartItems];
    updatedCartItems[itemIdx].qty = item.qty;
    return updatedCartItems;
}