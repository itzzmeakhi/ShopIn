import React from 'react';

import styled from 'styled-components';
import CartItem from './../../pages/Cart/containers/CartItem';
import { IoIosCloseCircle } from 'react-icons/io';

const CartContainer = styled.div`
    color: #000;
    background-color: #fff;
    width: 30%;
    position: absolute;
    top: 0;
    right: 0;
    height: 100vh;
    padding: 40px 10px;
    box-sizing: border-box;
    border: 1px solid #bbb;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

const CartItems = styled.div`
    max-height: 90%;
    overflow: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const CartHead = styled.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const EmptyCart = styled.div`
`;

const CheckoutButton = styled.button`
    width: 80%;
    height: 30px;
    background-color: #125D98;
    border: transparent;
    border-radius: 5px;
    color: #fff;
`;

const Cart = ({ cart }) => {
    const { cartItems } = cart;
    return (
        <CartContainer>
            <CartHead>
                <h3> My Cart </h3>
                <IoIosCloseCircle />
            </CartHead>
            <CartItems>
                {cartItems.length === 0 && <EmptyCart> No items in the cart </EmptyCart>}
                {cartItems.length !== 0 && cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} qty={cartItem.qty} />)}
            </CartItems>
            <CheckoutButton>
                Checkout
            </CheckoutButton>
        </CartContainer>
    );
}

export default Cart;