import styled from 'styled-components';

export const Item = styled.div`
    width: 80%;
    min-height: 180px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px solid #bbb;
    font-size: 80%;
    border-radius: 5px;
    margin: 20px 0px;
    box-sizing: border-box;
    padding: 10px 20px;
`;

export const ImageContainer = styled.div`
    height: 130px;
    width: 130px;
    img {
        max-height: 100%;
        max-width: 100%;
    }
`;

export const DescContainer = styled.div`
    min-height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 20px;
`;

export const BrandName = styled.p`
    color: #125D98;
`;

export const QuantityContainer = styled.div`
    width: 30%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const QtyBtn = styled.button`
    width: 30%;
    height: 70%;
    cursor: pointer;
    font-size: 90%;
    border: 1px solid ${props => props.color};
    color: ${props => props.color};
    border-radius: 2px;
    &:hover,
    &:focus {
        background-color: ${props => props.color};
        color: #fff;
    }
    &:disabled {
        opacity: 0.4;
        cursor: not-allowed;
    }
`;

export const Savings = styled.div`
    font-size: 90%;
    color: #e67e22;
`;

export const RemoveCart = styled.a`
    text-decoration: underline;
    color: #000;
    font-size: 80%;
    cursor: pointer;
    &:hover {
        color: #125D98;
    }
`;