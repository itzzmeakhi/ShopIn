import React, { useState } from 'react';

import styled from 'styled-components';
import CartItem from './../../pages/Cart/containers/CartItem';

const CartContainer = styled.div`
    color: #000;
    ul {
        width: 60%;
        list-style-type: none;
        margin: 0 auto;
    }
`;

const EmptyCart = styled.div`
`;



const Cart = ({ cart }) => {
    const { cartItems } = cart;
    return (
        <CartContainer>
            <h4>My Cart</h4>
            {cartItems.length === 0 && <EmptyCart> No items in the cart </EmptyCart>}
            {cartItems.length !== 0 && (
                <ul>
                    {cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)}
                </ul>
            )}
        </CartContainer>
    );
}

export default Cart;