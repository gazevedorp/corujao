import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    z-index: 10;
`;

export const DivColumns = styled.div`
    width: 100vw;
    display: flex;
    padding: 20px 0px 20px 30px;
    flex-direction: row;
    justify-content: space-between;

    @media(max-width: 800px) {
        flex-wrap: wrap;
    }

    @media(max-width: 600px) {
        flex-direction: column;
    }
`;

export const DivColumn = styled.div`
    width: 25%;
    display: flex;
    flex-direction: column;

    @media(max-width: 800px) {
        width: 50%;
        margin-bottom: 30px;
    }

    @media(max-width: 600px) {
        width: 90%;
    }

`;

export const TitleColumn = styled.p`
    font-weight: bold;
    margin-left: ${props => props.marginLeft}px;

    color: #FF862D;

    @media(max-width: 800px) {
        margin-left: 0px;
    }
`;

export const Text = styled.p`
    font-weight: 500;
    margin-top: 15px;
    cursor: pointer;

    color: #FF862D;
`;

export const TextColumn = styled.p`
    font-weight: 500;
    margin-left: 10px;
    cursor: pointer;

    color: #FF862D;
`;

export const TextColumnBold = styled.p`
    font-weight: bold;
    margin-left: 10px;
    
    color: #FF862D;
`;

export const DivTextWithIcon = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 15px;
`;

export const IconColumn = styled.img`
    width: 25px;
`;

export const ImageColumn = styled.img`
    width: 150px;
    margin-top: 15px;

    @media(max-width: 600px) {
        margin-top: 30px;
    }
`;

export const DivCards = styled.div`
    width: 100vw;
    padding: 20px 30px 20px 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media(max-width: 800px) {
        display: none;
    }
`;

export const ImageCard = styled.img`
    height: 25px;
`;

export const DivTerms = styled.div`
    width: 100vw;
    padding: 0px 30px 0px 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    color: #FF862D;

    @media(max-width: 600px) {
        flex-direction: column;
    }
`;

export const TextTerms = styled.p`
    width: 600px;
    font-size: 14px;

    @media(max-width: 600px) {
        width: 90%;
        text-align: center;
    }
`;

export const ImageTerms = styled.img`
    width: 125px;

    @media(max-width: 600px) {
        margin-top: 20px;
    }
`;