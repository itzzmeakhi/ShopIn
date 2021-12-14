import React from 'react';
import styled from 'styled-components';

import Cart from './../../pages/Cart/containers/Cart';

const Nav = styled.div`
    width: 100%;
    background-color: #125D98;
    box-sizing: border-box;
    padding: 5px 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    header {
        font-family: 'Corinthia', cursive;
        font-size: 40px;
    }
`;

const NavList = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
    li {
        margin: 0 10px;
    }
`;

const Navbar = ({ setShowCart }) => {
    return (
        <Nav>
            <header>ShopIn</header>
            <nav>
                <NavList>
                    <li onClick={() => setShowCart()}>Login</li>
                    <li>Cart</li>
                    <li>My Account</li>
                </NavList>
            </nav>
        </Nav>
    );
}

export default Navbar;