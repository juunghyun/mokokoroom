import React from 'react';
import Nav from "../molecules/Nav";
import axios from 'axios';
import {apiGET} from "../../api/axiosInstance";
import { animated, useSpring, useSprings } from "@react-spring/web"
import {useEffect, useState} from "react";
import styled from 'styled-components';




const MainPage = () => {
    const testFunc = () =>{
        console.log(apiGET("/armories/characters/coolguy/profiles"));
    }

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const scrollThreshold = 500; // 스크롤을 내린 후 Nav가 border-radius가 적용되는 위치
            setIsScrolled(scrollPosition > scrollThreshold);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll); //Clean up
        };
    }, []);

    return (
        <MainDiv>
            <Nav></Nav>
            <ScrollDownDiv isScrolled={isScrolled}><Nav></Nav></ScrollDownDiv>
            <h1>메인페이지입니다</h1>
            <p>main page</p>
            <button onClick={testFunc}>클릭</button>
        </MainDiv>
    );
};

export default MainPage;
const ScrollDownDiv = styled.div`
  position: fixed;
  width: 98%;
  border-radius: 20px;
  padding-right: 10px;
  overflow: hidden;
  transition: transform 0.5s ease-in-out;
  transform: translateY(${props => (props.isScrolled ? '10%' : '-200%')});
`;

const MainDiv = styled.div`
  margin: 0;
  max-width: 100%;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  min-height: 1000vh;
`;