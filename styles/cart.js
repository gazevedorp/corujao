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

export const HeaderCart = styled.div`
    width: 100vw;
    padding: 20px 30px 0px 40px;
    display: flex;
    justify-content: space-between;
`;

export const HeaderCartButton = styled.button`
    width: 150px;
    padding: 0px 20px 0px 20px;
    margin: 10px 0px 20px 0px;
    border-radius: 20px;
    cursor: pointer;
    background-color: #2F7420;
    color: #ffffff;
`;

export const HeaderCartText = styled.p`
    padding: 10px 0px 10px 0px;

    color: #FF862D;
`;

export const ItemImageText = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
`;

export const Item = styled.div`
    width: 95vw;
    padding: 20px 0px 20px 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    border-top: 3px solid #2F7420;
`;

export const ItemImage = styled.img`
    width: 200px;
`;

export const ItemDivText = styled.div`
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

export const ItemTitle = styled.p`
    font-size: 24px;
    font-weight: bold;

    color: #FF862D;
`;

export const ItemSubtitle = styled.p`
    color: #FF862D;
    margin-top: 10px;
`;

export const DivQty = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
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

export const Price = styled.p`
    font-size: 30px;
    font-weight: bold;

    padding: 15px 0px 15px 0px;

    color: #FF862D;
`;

export const DivDetails = styled.div`
    width: 95vw;
    padding: 30px 0px 30px 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    border-top: 3px solid #2F7420;
    border-bottom: 3px solid #2F7420;
`;

export const DeliveryData = styled.div`
`;

export const DivDelivery = styled.div`
    width: 400px;
    min-height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
`;

export const DeliveryDetails = styled.img`
    width: 400px;
    padding-top: 10px;
`;

export const DeliveryDescription = styled.p`
    color: #FF862D;
    width: 300px;
`;

export const DivTotalPrice = styled.div`
    width: 350px;
    min-height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

export const DeliveryTitle = styled.p`
    font-size: 18px;
    font-weight: bold;

    color: #FF862D;
`;

export const CartButtons = styled.div`
    width: 95vw;
    padding: 10px 0px 50px 0px;
    display: flex;
    justify-content: space-between;

    border-bottom: 3px solid #2F7420;
`;

export const CartButton = styled.button`
    width: 200px;
    padding: 5px 20px 5px 20px;
    margin: 10px 0px 20px 0px;
    border-radius: 20px;
    cursor: pointer;
    
    background-color: #2F7420;
    color: #ffffff;
`;

export const TextValue = styled.p`
    font-size: 18px;

    color: #FF862D;
`;

export const TextDescription = styled.p`
    font-size: 14px;
    text-align: right;

    color: #FF862D;
`;

export const DivValues = styled.div`
    padding: 10px 0px 10px 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    border-top: 3px solid #2F7420;
`;
