import styled from 'styled-components';

export const HeaderButton = styled.button`
    width: 20px;
    height: 30px;
    border: 0px;
    cursor: pointer;
    background-color: transparent;

    div {
        width: 20px;
        height: 2px;
        background-color: #ffffff;
        margin: 6px 0;
        outline: none;
    }

    @media(min-width: 800px) {
        display: none;
    }
`