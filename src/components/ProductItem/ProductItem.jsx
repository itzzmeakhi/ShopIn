import React from 'react';
import styled from 'styled-components';

import { transformToPrice, getDiscountPercent } from './../../utils/helpers';

const ItemCard = styled.div`
    color: #000;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    height: 450px;
    border: 1px solid #bbb;
    border-radius: 5px;
    padding: 0px 30px;
    box-sizing: border-box;
    h4 {
        color: #125D98;
        font-weight: bolder;
    }
`;

const StrikedPrice = styled.span`
    text-decoration: line-through;
    color: #888;
`;

const ImageContainer = styled.div`
    width: 200px;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
        max-width: 100%;
        max-height: 100%;
    }
`;

const SpecsContainer = styled.div`
    * {
        margin-bottom: 15px;
    }
`;

const DiscountContainer = styled.span`
    border-radius: 5px;
    background-color: #125D98;
    padding: 1px 10px;
    font-size: 90%;
    clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
    color: #fff;
`;

const ProductItem = ({ item }) => {
    const { name, thumbnails, current_price, original_price } = item;

    const priceData = () => {
        if(current_price && (Number(current_price) < Number(original_price))) {
            return (
                <p>
                    ₹ <StrikedPrice>{
                        transformToPrice(original_price)}
                    </StrikedPrice> 
                    &nbsp; <span>
                        {transformToPrice(current_price)}
                    </span>
                    &nbsp; <DiscountContainer>
                        {getDiscountPercent(original_price, current_price)} off
                    </DiscountContainer>
                </p>
            );
        }
        return (
            <p>₹ {transformToPrice(current_price)}</p>
        );
    }
    return (
        <ItemCard>
            <ImageContainer>
                <img src={thumbnails[0]} alt={`${name} Image`} />
            </ImageContainer>
            <SpecsContainer>
                <h4>{name}</h4>
                {priceData()}
            </SpecsContainer>
        </ItemCard>
    );
}

export default ProductItem;