import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    padding: 30px;

    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const CardLeft = styled.div`
    width: 50vw;
    padding: 0px 5px 0px 5px;
    cursor: pointer;
`;

export const CardRight = styled.div`
    width: 50vw;
    padding-bottom: 3px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
`;

export const CardLeftImage = styled.img`
    width: 100%;
`;

export const CardRightImage = styled.img`
    width: 100%;
`;