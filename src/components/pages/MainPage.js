import React from 'react';
import axios from 'axios';
import {apiGET} from "../../api/axiosInstance";
import { animated, useSpring, useSprings } from "@react-spring/web"
import {useEffect, useState} from "react";
import SearchNav from "../molecules/SearchNav";
import Nav from "../molecules/Nav";
import ScrollDownNav from "../molecules/ScrollDownNav";
import styled from 'styled-components';
import "../atoms/font.css";



const MainPage = () => {
    const mainFunc = () =>{
        console.log(apiGET("/armories/characters/coolguy/profiles"));
    }




    return (
        <MainDiv>

            {/*최상단 모코코룸 - 캐릭터명 검색을 감싸는 Nav*/}
            <SearchNav></SearchNav>
            {/*스크롤 시 나오는 Nav 메뉴*/}
            <ScrollDownNav> </ScrollDownNav>

            {/*최상단 바로 아래 메뉴 Nav*/}
            <Nav></Nav>

            <MainBannerDiv>
                <BannerText>
                    <span class="first-line">DPS Simulator</span>
                    <br/>
                    <span class="second-line">시뮬레이터</span>
                </BannerText>
            </MainBannerDiv>
            {/*사이트 최하단 Copyright 적는 부분*/}
            <CopyrightDiv>
                <CopyrightText>Copyright @2023 mokokoroom / contact : forcomfe81@gmail.com</CopyrightText>
            </CopyrightDiv>

        </MainDiv>
    );
};

export default MainPage;

//전체 레이아웃을 감싸는 body
const MainDiv = styled.div`
  padding: 5rem;
  display: grid;
  height: 200vh;
  //width: 100vw;
  grid-template-columns: repeat(6,1fr);
  grid-template-rows: 90px 90px 360px auto 80px;
`;

const MainBannerDiv = styled.div`
  grid-row:3;
  grid-column: 1/-1;
  display: flex;
  justify-content: center;
  align-items: center;
  border:1px #1d1d1d solid;
  border-top:none;
`;

const BannerText = styled.div`
  text-align: center;
`;

//페이지 최하단 copyright 작성을 위한 div 스타일
const CopyrightDiv = styled.div`
  grid-row: 5;
  grid-column: 1/-1;
  display: flex;
  justify-content: center;
  align-items: center;
  border:1px #1d1d1d solid;
`;

//최하단 copyright 텍스트 스타일
const CopyrightText = styled.div`
    font-size: 20px;
`;





