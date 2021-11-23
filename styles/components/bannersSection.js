import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Cards = styled.div`
    width: 95vw;
    padding: 20px 0px 20px 0px;

    display: flex;

    justify-content: space-between;

    border-bottom: 5px solid #2F7420;

    @media(max-width: 800px) {
        flex-wrap: wrap;
    }
`;

export const Card = styled.div`
    width: 25%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    @media(max-width: 800px) {
        width: 50%;
    }
`;

export const CardImage = styled.img`
    width: 65px;
`;

export const CardText = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
`;

export const CardTitle = styled.p`
    font-weight: bold;
    color: #DF4E3D;
`;

export const CardDescription = styled.p`
    font-size: 14px;
    color: #FF6B00;
`;