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

    return (
        <MainDiv>
            <Nav></Nav>
            <h1>메인페이지입니다</h1>
            <p>main page</p>
            <button onClick={testFunc}>클릭</button>
        </MainDiv>
    );
};

export default MainPage;

const MainDiv = styled.div`
    //background-color: #c3ff72;
`;