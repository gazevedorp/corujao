import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background-color: #fffbf4;
`;

export const TitleRelateds = styled.p`
    padding: 30px 0px 0px 20px;
    font-weight: bold;
    font-size: 16px;
    color: #2F7420;
`;

export const ContainerBanner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

export const Banner = styled.img`
    width: 100%;
    height: 80px;
    object-fit: cover;
    z-index: 0;
`;

export const Path = styled.p`
    color: #FF862D;
    padding: 20px;
    font-weight: bold;
`;

export const DescriptionContainer = styled.div`
    margin: 0px 20px 0px 20px;
    padding: 10px 0px 10px 0px;
    display: flex;
    flex-direction: column;

    
    border-top: 3px solid #2F7420;
`;

export const Title = styled.p`
    font-size: 24px;
    font-weight: bold;

    color: #FF862D;
`;

export const Subtitle = styled.p`
    color: #FF862D;
    margin-top: 10px;
    font-weight: bold;
`;

export const Description = styled.p`
    padding: 10px 0px 10px 0px;

    color: #FF862D;
`;

export const TecnicalDescription = styled.p`
    color: #FF862D;
    background-color: ${props => props.backgroundColor ? "#ffefd2" : "transparent"};
`;

export const ContainerDetails = styled.div`
   padding: 0px 20px 20px 20px;
   display: flex;
   flex-direction: row;
   justify-content: flex-start;
`;

export const ContainerImages = styled.div`
   display: flex;
   flex-direction: row;
`;

export const Miniatures = styled.div`
   display: flex;
   flex-direction: column;
`;

export const ImageMiniatures = styled.img`
   width: 75px;
   padding: 5px;
`;

export const Image = styled.img`
    width: auto;
    height: 350px;
   padding: 5px;
`;

export const Details = styled.div`
   display: flex;
   flex-direction: column;
   padding: 0px 10px 0px 30px;
`;

export const Stars = styled.img`
    width: 100px;
`;

export const Button = styled.button`
    width: 150px;
    padding: 5px 20px 5px 20px;
    margin: 10px 0px 20px 0px;
    border-radius: 20px;
    
    background-color: #2F7420;
    color: #ffffff;
`;

export const Price = styled.p`
    font-size: 30px;
    font-weight: bold;

    padding: 15px 0px 15px 0px;

    color: #FF862D;
`;

export const ImagePayment = styled.img`
margin-top: 15px;
`;

export const DivHor = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    border-top: ${ props => props.borderTop && "3px solid #2F7420"};
`;

export const Quantity = styled.p`
    font-size: 32px;
    color: #FF6B00;
    cursor: pointer;

    margin-left: ${props => props.margin ? 10 : 0}px;
`;

export const Number = styled.p`
    font-size: 16px;
    text-align: center;
    width: 50px;
    padding: 5px;
    margin: 0px 10px 0px 10px;
    border-radius: 20px;

    border: 1px solid #2F7420;
    color: #2F7420;
`;

export const Input = styled.input`
    border: 1px solid #2F7420;
    margin: 0px 10px 0px 5px;
    border-radius: 20px;
    padding: 5px;
`;

export const ButtonCep = styled.button`
    padding: 5px 20px 5px 20px;
    margin: 10px 0px 10px 0px;
    border-radius: 20px;
    
    background-color: #2F7420;
    color: #ffffff;
`;
