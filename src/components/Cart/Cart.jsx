import React from 'react';

import styled from 'styled-components';
import CartItem from './../../pages/Cart/containers/CartItem';

const CartContainer = styled.div`
    color: #000;
    margin-top: 40px;
    ul {
        list-style-type: none;
    }
`;

const EmptyCart = styled.div`
`;

const Cart = ({ cart }) => {
    const { cartItems } = cart;
    return (
        <CartContainer>
            {cartItems.length === 0 && <EmptyCart> No items in the cart </EmptyCart>}
            {cartItems.length !== 0 && (
                <ul>
                    {cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} qty={cartItem.qty} />)}
                </ul>
            )}
        </CartContainer>
    );
}

export default Cart;