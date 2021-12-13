import styled from 'styled-components';

export const Item = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px solid #bbb;
    border-radius: 5px;
    margin: 20px 0px;
    padding: 20px;
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
`;

export const QuantityContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const QtyBtn = styled.button`
    width: 12%;
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

export const Price = styled.div`
`;

export const Savings = styled.div`
`;

export const RemoveCart = styled.a`
`;