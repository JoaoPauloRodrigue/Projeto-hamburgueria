import { createGlobalStyle } from "styled-components";

export const GlogalStyled = createGlobalStyle`
* {
    font-family: Inter, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    cursor: pointer;
    list-style: none;
}
:root {
    --color-primary: #27AE60;
    --color-primary-50: #93D7AF;
    --color-secondary:#EB5757;

    --color-grey-100:  #333333;
    --color-grey-50:#828282;
    --color-grey-30: #BDBDBD;
    --color-grey-20:#E0E0E0;
    --color-0: #F5F5F5;
    --color-white: #ffffff;

    --color-negative:#E60000;
    --color-warning: #FFCD07;
    --color-sucess: #168821;
    --color-information: #155BCB;
} 
`;
