
export const transformToPrice = (price) => {
    return Number(price).toLocaleString('en-IN');
}

export const getDiscountPercent = (orignalPrice, discountPrice) => {
    const price = Number(orignalPrice);
    const disPrice = Number(discountPrice);
    return `${parseInt(((price - disPrice)/price)*100)}%`;
}