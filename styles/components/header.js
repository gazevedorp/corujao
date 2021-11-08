import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    z-index: 10;

    background-color: #FF862D;
`;

export const Logo = styled.img`
    width: 300px;
    cursor: pointer;
`;

export const DivOptions = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const CategoriesSelect = styled.select`
    width: 100px;
    border: 0px;
    font-size: 18px;
    cursor: pointer;
    outline: none;

    color: #ffffff;
    background-color: transparent;

    option{
        color: #000000;
    }
`;

export const CartImage = styled.img`
    cursor: pointer;

    width: 30px;
    margin: 0px 50px 0px 50px;
`;

export const DivLogin = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const DivLoginImage = styled.img`
    width: 20px;
`;

export const DivLoginTitle = styled.p`
    margin-left: 10px;

    font-size: 16px;
    font-weight: 300;
    color: #ffffff;
`;