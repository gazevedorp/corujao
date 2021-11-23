import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background-color: #fffbf4;

    @media(max-width: 800px) {
        align-items: center;
    }
`;

export const Banner = styled.img`
    width: 100%;
    height: 80px;
    object-fit: cover;
    z-index: 0;
`;

export const ContainerCheckout = styled.div`
    margin: 0px 0px 0px 30px;
    padding: 30px 0px 30px 0px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;

    border-bottom: 3px solid #2F7420;

    @media(max-width: 800px) {
        flex-direction: column;
        margin: 0px;
    }
`

export const ContainerCard = styled.div`
   width: 33vw;
   padding: 10px;

   @media(max-width: 800px) {
        width: 90vw;
    }
`

export const CheckoutCard = styled.div`
    width: 100%;
    padding: 20px 15px 30px 15px;
    margin: 0px 0px 20px 0px;
    background-color: #FFE9C2;
`

export const CardHeader = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const CardHeaderTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const Title = styled.p`
    margin-left: 10px;
    font-size: 16px;
    font-weight: bold;
    color: #FF6B00;
`

export const EditText = styled.p`
    font-size: 14px;
    text-decoration: underline;
    width: 150px;
    text-align: right;
    color: #FF6B00;
    cursor: pointer;
`

export const Icon = styled.div`
    width: 20px;
    height: 20px;
    font-size: 14px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    color: #FF6B00;
    font-weight: bold;
    background-color: #FFFFFF;
    border: 1px solid #FF6B00;
`

export const Card = styled.div`
    width: 100%;
    margin-top: 10px;
    padding: 10px;
    display: flex;
    align-items: center;
    background-color: #FFFFFF;
    border: 1px solid #FF6B00;
    box-shadow: 2px 2px 5px 0px grey;
`

export const CardTitle = styled.p`
    margin-left: 10px;
    font-size: 14px;
    font-weight: ${props => props.bold ? "bold" : "regular"};
    color: #FF6B00;
`

export const IconCard = styled.img`
    width: 20px;
    height: 15px;
`

export const EditTextCard = styled.p`
    font-size: 14px;
    text-decoration: underline;
    text-align: right;
    min-width: 150px;
    font-weight: 200;
    color: #FF6B00;
    cursor: pointer;

    @media(max-width: 600px) {
        min-width: 0px;
    }
`

export const CardDescription = styled.div`
    margin: 10px 0px 0px 0px;
`

export const CardDescriptionText = styled.p`
    font-size: 14px;
    font-weight: ${props => props.bold ? "bold" : "regular"};
    color: #FF6B00;
`

export const TextName = styled.p`
    margin-top: 10px;
    font-size: 20px;
    font-weight: bold;
    color: #FF6B00;
`

export const Input = styled.textarea`
    margin-top: 5px;
    width: 100%;
    border: 0px;
`

export const TitleResume = styled.p`
    font-size: 16px;
    font-weight: bold;
    color: #FF6B00;
`

export const DivPrice = styled.div`
   width: 100%;
   border-top: 1px solid #FF6B00;
   margin-top: 10px;
`

export const DivPriceText = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const ProductCard = styled.div`
    margin: 20px 0px 10px 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
`

export const ProductImage = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 10px;
`

export const ProductDetails = styled.div`
        margin-left: 10px;
   
`

export const ProductName = styled.p`
   font-weight: bold;
   font-size: 24px;
   color: #FF6B00;
`

export const ProductPrice = styled.p`
    margin-top: 35px;
   font-weight: bold;
   text-align: right;
   font-size: 20px;
   color: #FF6B00;
`



