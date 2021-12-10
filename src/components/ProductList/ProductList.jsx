import React from 'react';
import styled from 'styled-components';

import ProductItem from '../ProductItem/ProductItem';

import products from './../../data.json';

const Products = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 30px;
    column-gap: 30px
`;

const ProductList = () => {
    console.log("=> products", products)
    return (
        <Products>
            {products.map(item => <ProductItem item={item} />)}
        </Products>
    );
}

export default ProductList;