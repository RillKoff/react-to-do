import React from 'react';
import styled from 'styled-components';

const MainHeader = styled.h2`
    margin-left: 400px;
    padding-top: 50px;
    text-align: center;
    font-family: Rubik, sans-serif;
`;

const TasksWrapp = styled.div`
    margin-top: 40px;
    margin-left: 400px;
    display: flex;
    justify-content: space-around;
`;

const TaskWrapp = styled.div`
    background-color: #f4f8f9;
    border-radius: 10px;
    width: 20%;
    padding: 15px;
`;

const ProgressHeader = styled.h3`
    text-align: center;
    font-family: Rubik, sans-serif;
`;

const Task = styled.div`
    margin-top: 20px;
    padding: 10px;
    background-color: #fff;
    border-radius: 5px;
    border: 1px solid #ccc;
`;

const TaskHeader = styled.h3`
font-family: Rubik, sans-serif;
    text-align: center;
    font-size: 24px;
`;

const TaskP = styled.p`
    color: #a7a7a7;
    margin-top: 10px;
`;

const AddButton = styled.button`
    margin-top: 10px;
    width: 100%;
    background-color: #ecf2f2;
    color: #4f9183;
    font-size: 25px;
    border-radius: 5px;
    border: none;
`;

export const MainStyled = () => {
    return(
        <>
            <MainHeader>Проекты</MainHeader> 
                <TasksWrapp>
                    <TaskWrapp> 
                        <ProgressHeader>Нужно сделать</ProgressHeader>
                        <AddButton>+</AddButton>
                        <Task>
                            <TaskHeader>Устроиться на работу</TaskHeader>
                            <TaskP>Хотелось бы как можно скорее, но сейчас универ и все такое</TaskP>
                        </Task>
                    </TaskWrapp>
                    <TaskWrapp>
                        <ProgressHeader>В прогрессе</ProgressHeader>
                        <AddButton>+</AddButton>
                        <Task>
                            <TaskHeader>Выучить React.JS</TaskHeader>
                            <TaskP>Выучить реакт для будущей работы и, мб, фриланса</TaskP>
                        </Task>
                        <Task>
                            <TaskHeader>Закончить универ</TaskHeader>
                            <TaskP>Закончить наконец ебучий универ</TaskP>
                        </Task>
                    </TaskWrapp>
                    <TaskWrapp>
                        <ProgressHeader>Сделано</ProgressHeader>
                        <AddButton>+</AddButton>
                        <Task>
                            <TaskHeader>Взяться за самообучение</TaskHeader>
                            <TaskP>Заставить себя начать заниматься самообучением помимо универа и занятий</TaskP>
                        </Task>
                    </TaskWrapp>
                </TasksWrapp>
        </>
    )
}