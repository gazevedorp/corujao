import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.text};
        font: 400 16px Roboto, sans-serif;
    }
    .slick{
      margin: 0;
      padding: 0
    }

    .slick-prev {
      position: absolute;
      left: 25px !important;
      z-index: 1;
      background-color: #2F7420;
      border-radius: 30px;
      width: 30px;
      height: 30px;
    }
    .slick-next {
      position: absolute;
      right: 25px !important;
      z-index: 1;
      background-color: #2F7420;
      border-radius: 30px;
      width: 30px;
      height: 30px;
    }
    .menu {
        height: 110vh;
        padding: 10px 0px 0px 0px;
        z-index: 10;

        background-color: #ffffff;
    }
    .menu-item {
        padding: 24px 0px 10px 10px;
        font-size: 14px;

        display: flex;
        flex-direction: row;
        align-items: center;

        color: #000000;
        background-color: #ffffff;
        border-bottom: 1px solid gray;
    }
`