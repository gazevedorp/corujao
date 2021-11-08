import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 30px;
    z-index: 10;

    background-color: #FF862D;
`;

export const Image = styled.img`
    width: 300px;
`

export const DivInput = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const Input = styled.input`
    width: 250px;
    border-radius: 30px;
    margin: 0px 20px 0px 0px;
    padding: 10px 20px 10px 20px;
    border: 0px;
    font-size: 14px;
    outline: none;

    background-color: #ffffff;
`

export const Button = styled.button`
    border-radius: 30px;
    padding: 10px 20px 10px 20px;
    border: 0px;
    font-size: 14px; 
    font-weight: bold;
    cursor: pointer;

    color: #FF862D;
    background-color: #ffffff;
`