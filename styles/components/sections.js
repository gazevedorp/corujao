import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    padding: 30px;

    display: flex;
    flex-direction: row;
    justify-content: center;

    @media(max-width: 800px) {
        padding: 10px;
    }

`;

export const CardLeft = styled.div`
    width: 50vw;
    padding: 0px 5px 0px 5px;
    cursor: pointer;

    @media(max-width: 800px) {
        width: 47vw;
    }
`;

export const CardRight = styled.div`
    width: 50vw;
    padding-bottom: 3px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;

    @media(max-width: 800px) {
        width: 44vw;
    }
`;

export const CardLeftImage = styled.img`
    width: 100%;
`;

export const CardRightImage = styled.img`
    width: 100%;
`;