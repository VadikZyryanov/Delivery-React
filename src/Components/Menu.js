import React from 'react';
import styled from 'styled-components';
import dbMenu from './DBMenu';
import { ListItem } from './ListItem';
import bannerImg from '../image/banner.png';

const MenuStyled = styled.main`
    background-color: #ccc;
    margin-top: 80px;
`;

const SectionMenu = styled.section`
    padding: 30px;
`;

const BannerImg = styled.img`
    height: 250px;
    width: 100%;
`;

export const Menu = () => (
    <MenuStyled>
        <BannerImg src={bannerImg}></BannerImg>
        <SectionMenu>
            <h2>Бургеры</h2>
            <ListItem itemList={dbMenu.burger}></ListItem>
        </SectionMenu>
        <SectionMenu>
            <h2>Закуски / Напитки</h2>
            <ListItem itemList={dbMenu.other}></ListItem>
        </SectionMenu>
    </MenuStyled>
);