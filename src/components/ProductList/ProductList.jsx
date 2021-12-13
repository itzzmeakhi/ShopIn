import React from 'react';
import styled from 'styled-components';

import ProductItem from '../../pages/Products/containers/ProductItem';

const Products = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 30px;
    column-gap: 30px
`;

const ProductList = ({ productItems }) => {
    const { products } = productItems;
    console.log("=> products", products)
    return (
        <Products>
            {products.map(item => <ProductItem item={item} key={item.id} />)}
        </Products>
    );
}

export default ProductList;