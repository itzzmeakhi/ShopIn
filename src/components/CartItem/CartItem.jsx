import React, { useState } from 'react';

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
        getGrossDiscount } from './../../utils/helpers';

const CartItem = ({ item, updateQty }) => {
    const { name, thumbnails, qty, current_price, original_price, discounted } = item;
    const [quantity, setQuantity] = useState(qty || 1);

    const incrementQty = () => {
        const qty = quantity + 1;
        setQuantity(qty);
        updateQty({qty: qty, id: item.id});
    };
    const decrementQty = () => {
        const qty = quantity - 1;
        setQuantity(qty);
        updateQty({qty: qty, id: item.id});
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
                        disabled={quantity <= 1}
                        type="button"
                        color="#eb4d4b"
                        onClick={() => decrementQty()}>
                        -
                    </QtyBtn>
                    <span>{quantity}</span>
                    <QtyBtn 
                        disabled={quantity >= 10}
                        type="button"
                        color="#16a085"
                        onClick={() => incrementQty()}>
                        +
                    </QtyBtn>
                </QuantityContainer>
                <Price>{`₹ ${transformToPrice(current_price)} x ${quantity} = ${transformToPrice(current_price*quantity)}`}</Price>
                {discounted && 
                    (current_price < original_price) && 
                    (<Savings>
                        {`You saved a total of ${getGrossDiscount(original_price, current_price, quantity)} on this product.`}
                    </Savings>)
                }
                <RemoveCart>Remove from Cart</RemoveCart>
            </DescContainer>
        </Item>
    ); 
}

export default CartItem;