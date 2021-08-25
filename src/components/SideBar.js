import React from 'react';
import styled from 'styled-components';
import homeImg from '../image/home.svg'
import statsImg from '../image/stats.svg'
import calendarImg from '../image/calendar.svg'

const SideBarWrapp = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    width: 400px;
    height: 100vh;
`;

const SideBarUl = styled.ul`
    margin: 50px auto 0 auto;
`;

const SideBarList = styled.li`
    display: flex;
    margin-top: 40px;
    font-size: 23px;
    cursor: pointer;
    transition-duration: .3s;
    &:hover {
        transform: scale(1.1);
        color: #f89410;
    }
`;

const SideBarHeader = styled.h1`
    text-align: center;
    margin-top: 60px;
    font-size: 40px;
`;

const SideBarIcon = styled.img`
    width: 30px;
    margin-right: 5px;
`;

export const SideBar = () => {
    return(
        <>
            <SideBarWrapp>
                <SideBarHeader>React ToDo List</SideBarHeader>
                <SideBarUl>
                    <SideBarList>
                        <SideBarIcon src={homeImg} alt='Главная'></SideBarIcon>
                        <p>Главная</p>
                    </SideBarList>
                    <SideBarList>
                    <SideBarIcon src={statsImg} alt='Статистика'></SideBarIcon>
                    <p>Статистика</p>
                    </SideBarList>
                    <SideBarList>
                    <SideBarIcon src={calendarImg} alt='Календарь'></SideBarIcon>
                    <p>Календарь</p> 
                    </SideBarList>
                </SideBarUl>
            </SideBarWrapp>
        </>
    )
}