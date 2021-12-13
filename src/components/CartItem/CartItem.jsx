import React from 'react';

import { 
        Item, 
        ImageContainer, 
        DescContainer, 
        QuantityContainer, 
        QtyBtn,
        Price,
        Savings,
        RemoveCart 
    } from './styles';
import { 
        transformToPrice,
        getGrossDiscount } from '../../utils/helpers';

const CartItem = ({ item, updateQty, qty }) => {
    console.log("=> cartItem rendered")
    const { name, thumbnails, current_price, original_price, discounted } = item;

    const incrementQty = () => {
        updateQty({qty: qty+1, id: item.id});
    };
    const decrementQty = () => {
        updateQty({qty: qty-1, id: item.id});
    };
    return (
        <Item>

            <ImageContainer>
                <img src={thumbnails[0]} alt={name} />
            </ImageContainer>

            <DescContainer>
                <p>{name}</p>
                <QuantityContainer>
                    <QtyBtn
                        disabled={qty <= 1}
                        type="button"
                        color="#eb4d4b"
                        onClick={() => decrementQty()}>
                        -
                    </QtyBtn>
                    <span>{qty}</span>
                    <QtyBtn 
                        disabled={qty >= 10}
                        type="button"
                        color="#16a085"
                        onClick={() => incrementQty()}>
                        +
                    </QtyBtn>
                </QuantityContainer>
                <Price>{`₹ ${transformToPrice(current_price)} x ${qty} = ${transformToPrice(current_price*qty)}`}</Price>
                {discounted && 
                    (current_price < original_price) && 
                    (<Savings>
                        {`You saved a total of ${getGrossDiscount(original_price, current_price, qty)} on this product.`}
                    </Savings>)
                }
                <RemoveCart>Remove from Cart</RemoveCart>
            </DescContainer>

        </Item>
    ); 
}

export default CartItem;