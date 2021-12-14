export const transformToPrice = (price) => {
    return Number(price).toLocaleString('en-IN');
};

export const getDiscountPercent = (orignalPrice, discountPrice) => {
    const price = Number(orignalPrice);
    const disPrice = Number(discountPrice);
    return `${parseInt(((price - disPrice)/price)*100)}%`;
};

export const getGrossDiscount = (originalPrice, discountPrice, qty) => {
    const price = Number(originalPrice);
    const disPrice = Number(discountPrice);
    return `${transformToPrice((price - disPrice)*qty)}`;
};