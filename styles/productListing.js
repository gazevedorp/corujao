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

export const Title = styled.p`
    position: absolute;
    left: 30px;
    font-size: 30px;
    font-weight: bolder;

    color: #ffffff;

    @media(max-width: 600px) {
        font-size: 24px;
    }
`;

export const ContainerOrder = styled.div`
    width: 100vw;
    padding: 20px 20px 0px 20px;
    display: flex;
    justify-content: right;
    align-items: center;
    border-radius: 30px;
    
    @media(max-width: 600px) {
        justify-content: center;
        flex-direction: column;
    }
`;

export const ProductsContent = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;

    @media(max-width: 600px) {
        flex-direction: column;
    }
`;

export const FilterContainer = styled.div`
    width: 25%;

    @media(max-width: 600px) {
        width: 100%;
    }
`;

export const ProductsContainer = styled.div`
    width: 75%;
    
    @media(max-width: 600px) {
        width: 100%;
    }
`;

export const FilterOrder = styled.select`
    width: 150px;
    padding: 5px;
    outline:none;
    font-weight: bold;

    background-color: #ffffff;
    color: #DF4E3D;
    border: 1px solid #FF6B00;
    border-radius: 10px;
`;

export const ContainerPagination = styled.div`
    width: 100vw;
    padding: 0px 20px 0px 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const ButtonPagination = styled.button`
    width: 100px;
    padding: 10px;
    margin-left: ${props => !props.opacity ? 10 : 0}px;
    border-radius: 20px;
    opacity: ${props => props.opacity ? 0.5 : 1};
    
    background-color: #2F7420;
    color: #ffffff;
`;

export const ButtonFilter = styled.button`
    cursor: pointer;
    color: #FF6B00;
    text-decoration: underline;
    background-color: #ffffff;
    border: 0px;
    font-size: 16px;
    margin-top: 20px;
    font-weight: bold;

    @media(min-width: 600px) {
        display: none;
    }
`