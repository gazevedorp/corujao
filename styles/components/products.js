import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    padding: 30px 0px 30px 0px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    z-index: 0;
    outline: none;

    @media(max-width: 800px) {
        flex-wrap: wrap;
    }
`;


export const ProductCard = styled.div`
    width: 25%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media(max-width: 800px) {
        width: 50%;
    }
`;

export const ProductImage = styled.img`
    margin-left: auto;
    margin-right: auto;
    width: 180px;

    @media(max-width: 600px) {
        width: 150px;
    }
`;

export const ProductTitle = styled.p`
    height: 50px;
    font-style: 14px;
    margin-top: 10px;
    text-align: center;
`;

export const ProductPrice = styled.p`
    font-style: 14px;
    margin-bottom: 10px;
    text-align: center;
    color: #FF862D;
`;

export const ProductButton = styled.button`
    padding: 10px 30px 10px 30px;
    cursor: pointer;
    
    background-color: #2F7420; 
    color: #ffffff;
`;
