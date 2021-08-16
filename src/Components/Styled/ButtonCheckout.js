import styled from 'styled-components';

export const ButtonCheckout = styled.button`
    background-color: #299B01;
    display: block;
    width: 250px;
    height: 65px;
    color: #fff;
    font-size: 21px;
    font-family: inherit;
    border-color: transparent;
    margin: 0 auto;
    transition-property: color, background-color, border-color;
    transition-duration: .3s;
    &:hover {
        background-color: #fff;
        color: #299B01;
        border-color: #299B01;
    }
    &:disabled {
        color: #bbb;
        background-color: #ccc;
        border-color: #aaa;
    }
`;