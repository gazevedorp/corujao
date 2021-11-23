import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: #fffbf4;
`;

export const Banner = styled.img`
    width: 100%;
    height: 80px;
    object-fit: cover;
    z-index: 0;
`;


export const Page = styled.div`
    width: 80vw;
    padding: 100px 0px 50px 0px;
`;

export const Title = styled.p`
    color: #FF862D;
    font-size: 26px;
    font-weight: bold;
`;

export const DivInput = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:  space-between;
    align-items: center;
    padding: 30px 0px 30px 0px;

    @media(max-width: 600px) {
        flex-direction: column;
    }
`;

export const Input = styled.input`
    font-size: 14px;
    padding: 10px;
    border: 1px solid #FF862D;
    background-color: transparent;
    border-radius: 20px;
    width: 60%;

    
    @media(max-width: 800px) {
        width: 200px;
        margin: 0px 10px 0px 10px;
    }
    @media(max-width: 600px) {
        width: 300px;
        margin: 20px 0px 20px 0px;
    }
`;

export const Button = styled.button`
    font-size: 14px;
    padding: 10px;
    color: #FF862D;
    border: 1px solid #FF862D;
    background-color: transparent;
    border-radius: 20px;
    width: 30%;
    cursor: pointer;

    @media(max-width: 600px) {
        width: 200px;
    }
`;

export const Description = styled.p`
    color: #FF862D;
    font-size: 16px;
`;

export const ReturnText = styled.p`
    width: 95vw;
    margin-top: 50px;
    padding: 0px 0px 10px 0px;
    color: #FF862D;
    font-size: 18px;
    text-decoration: underline;

    cursor: pointer;
    border-bottom: 3px solid #2F7420;
`;