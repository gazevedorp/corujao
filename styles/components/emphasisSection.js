import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    margin-bottom: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Cards = styled.div`
    width: 95vw;
    padding: 20px 10px 50px 10px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    border-bottom: 5px solid #2F7420;
`;

export const CardContainer = styled.div`
    width: 230px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    box-shadow: 2px 2px 5px 0px grey;
`;

export const Card = styled.div`
    width: 100%;
    padding: 20px 50px 10px 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const CardImage = styled.img`
    width: 75px;
`;

export const CardText = styled.div`
    padding: 10px;
    width: 100px;
    display: flex;
    flex-direction: column;
`;

export const CardTitle = styled.p`
`;

export const CardStars = styled.img`
    width: 100px;
`;

export const CardFooterContainer = styled.img`
    width: 220px;
    padding: 5px 5px 10px 5px;
`;