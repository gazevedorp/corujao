import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 20px;
    z-index: 10;

    @media(max-width: 600px) {
        display: ${props => !props.show && "none"};
    }
`;

export const Title = styled.p`
    font-size: 16px;
    font-weight: bold;
    padding-bottom: 5px;

    color: #FF6B00;
`;

export const ContainerMore = styled.div`
    width: 180px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 10px 5px 20px;
    border-top: 3px solid #2F7420;
`

export const TextMore = styled.p`
    font-weight: bold;

    color: #FF6B00;
`

export const LabelCheck = styled.p`
   color: #FF6B00;
   padding: 5px 0px 5px 0px;

   input {
        margin-right: 10px;
    }

    @media(max-width: 600px) {
        padding: 0px;
    }
`

export const TextCheck = styled.input`
   color: #FF6B00;
`


