import React from 'react';

import { 
        StrikedPrice, 
        DiscountContainer, 
        ItemCard, 
        ImageContainer, 
        SpecsContainer, 
        RatingContainer, 
        HighlightsContainer, 
        Button} from './styles';
import { transformToPrice, getDiscountPercent } from './../../utils/helpers';

const ProductItem = ({ item }) => {
    const { 
            name, 
            thumbnails, 
            current_price, 
            original_price, 
            discounted,
            rating,
            highlights,
            in_stock 
        } = item;

    const priceData = () => {
        if(discounted) {
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
                <img src={thumbnails[0]} alt={`${name}`} />
            </ImageContainer>
            <SpecsContainer>
                <h4>{name}</h4>
                {priceData()}
                <RatingContainer>
                    {rating ? <><span>{rating} &#9733;</span> Rating</>: 'No Ratings'}
                </RatingContainer>
            </SpecsContainer>
            <HighlightsContainer>
                {highlights.filter((_,index) => index < 4).map(highlight => <p>{highlight}</p>)}
            </HighlightsContainer>
            <Button
                type="button"
                disabled={!in_stock}>
                {in_stock ? 'Add to Cart' : 'Out of Stock'}
            </Button>
        </ItemCard>
    );
}

export default ProductItem;