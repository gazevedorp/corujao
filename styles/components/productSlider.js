import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    padding: 30px 0px 30px 0px;
    z-index: 0;
    outline: none;
`;


export const ProductCard = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ProductImage = styled.img`
    margin-left: auto;
    margin-right: auto;
    width: 180px;
`;

export const ProductTitle = styled.p`
    font-style: 14px;
    margin: 10px 0px 10px 0px;
    text-align: center;
`;

export const ProductPrice = styled.p`
    font-style: 14px;
    text-align: center;
    color: #FF862D;
`;