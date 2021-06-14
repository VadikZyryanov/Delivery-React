import React from 'react';
import styled from 'styled-components';
import logoImg from '../image/logo.svg';
import sign from '../image/sign.svg';

const NavBarStyled = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    height: 80px;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background-color: #299B01;
    color: white;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
`;

const H1 = styled.h1`
    font-size: 24px;
    margin-left: 15px;
`;

const ImgLogo = styled.img`
    width: 50px;
`;

const Button = styled.button`
    background-color: #299B01;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    border: none;
    cursor: pointer;
`;

const Span = styled.span`
    margin-top: 3px;
    font size: 16px
    line height: 19px
`;

export const NavBar = () => (
    <NavBarStyled>
        <Logo>
            <ImgLogo src={logoImg} alt="logo"/>
            <H1>MrDonald's</H1>
        </Logo>
        <Button>
            <img src={sign} alt="sign" />
            <Span>войти</Span>
        </Button>
    </NavBarStyled>
);