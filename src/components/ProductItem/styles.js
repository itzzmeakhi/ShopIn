import styled from 'styled-components';

export const ItemCard = styled.div`
    color: #000;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    height: 500px;
    border: 1px solid #bbb;
    border-radius: 5px;
    padding: 0px 30px;
    box-sizing: border-box;
    h4 {
        color: #125D98;
        font-weight: bolder;
    }
`;

export const StrikedPrice = styled.span`
    text-decoration: line-through;
    color: #888;
`;

export const ImageContainer = styled.div`
    width: 200px;
    height: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
        max-width: 100%;
        max-height: 100%;
    }
`;

export const SpecsContainer = styled.div`
    align-self: flex-start;
    h4 {
        min-height: 35px;
        max-height: 35px;
    }
    * {
        margin-bottom: 15px;
    }
`;

export const DiscountContainer = styled.span`
    border-radius: 5px;
    background-color: #125D98;
    padding: 1px 10px;
    font-size: 90%;
    clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
    color: #fff;
`;

export const RatingContainer = styled.div`
    color: #666;
    span {
        color: #f0932b;
    }
`;

export const HighlightsContainer = styled.div`
    align-self: flex-start;
    min-height: 25%;
    max-height: 25%;
    color: #666;
    font-size: 70%;
    p {
        line-height: 20px;
    }
`;

export const Button = styled.button`
    width: 90%;
    padding: 10px 0px;
    font-size: 95%;
    color: #125D98;
    border: 1px solid #125D98;
    border-radius: 5px;
    cursor: pointer;
    &:hover:not([disabled]),
    &:focus:not([disabled]) {
        color: #fff;
        background-color: #125D98;
        border: transparent;
    }
    &:disabled {
        color: #eb4d4b;
        border: 1px solid #eb4d4b;
        cursor: not-allowed;
    }
`;