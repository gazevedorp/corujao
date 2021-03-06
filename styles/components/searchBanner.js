import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Banner = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
    z-index: 0;
`;

export const Title = styled.p`
    margin-top: -50px;
    position: absolute;
    font-size: 30px;
    font-weight: bolder;

    color: #ffffff;
    
    @media(max-width: 800px) {
        text-align: center;
        font-size: 24px;
        margin-top: -70px;
    }
`;

export const InputDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    width: 350px;
    position: absolute;
    margin-top: 50px;
    padding: 2px 15px 2px 15px;

    background-color: #ffffff;
`;

export const Input = styled.input`
    width: 80%;
    padding: 0px;
    outline: none;
    font-size: 14px;
    border: 0px;
`;

export const Icon = styled.img`
    width: 25px;
    cursor: pointer;
`;

