import React, {useCallback} from 'react';
import axios from 'axios';
import {apiGET} from "../../api/axiosInstance";
import { animated, useSpring, useSprings } from "@react-spring/web"
import {useEffect, useState} from "react";
import SearchNav from "../molecules/SearchNav";
import Nav from "../molecules/Nav";
import ScrollDownNav from "../molecules/ScrollDownNav";
import styled from 'styled-components';
import "../atoms/font.css";
import {json} from "react-router-dom";



const MainPage = () => {

    const [contents, setContents] = useState("");

    /*
    		날짜: 2023/07/19 3:26 PM
    		작성자: 이정현
    		작성내용: 객체 배열로 받음. [ {},{},{},...{}] 형식, 최대 템 레벨 기준으로 정렬. 이름 기준도 주석처리해놓음.
    */
    const getRankAPI = useCallback(async () => {
        const data = await apiGET("/characters/%EC%B9%B4%EC%95%84%EC%95%88/siblings");
        const sortedData = data.data;

        // 이름 순으로 정렬할 때의 소트과정
        // sortedContents.sort((a,b) => {
        //     return a.CharacterName.localeCompare(b.CharacterName);
        // })

        //최대 템 레벨 기준으로 정렬
        sortedData.sort((a,b) => {
            return (parseInt(b.ItemMaxLevel.replace(",", "")) - parseInt(a.ItemMaxLevel.replace(",", "")));
        })
        setContents(sortedData);
        console.log("api는 작동댔습니다.");
    },[setContents]);

    useEffect(() => { getRankAPI(); },[getRankAPI] );

    return (
        <MainDiv>

            {/*최상단 모코코룸 - 캐릭터명 검색을 감싸는 Nav*/}
            <SearchNav></SearchNav>
            {/*스크롤 시 나오는 Nav 메뉴*/}
            <ScrollDownNav> </ScrollDownNav>

            {/*최상단 바로 아래 메뉴 Nav*/}
            <Nav></Nav>

            {/*메인 배너를 위한 컴포넌트*/}
            <MainBannerDiv>
                <BannerText>
                    <span class="first-line">DPS Simulator</span>
                    <br/>
                    <span class="second-line">시뮬레이터</span>
                </BannerText>
            </MainBannerDiv>

            {/*진행중인 이벤트가 들어갈 grid div*/}
            <EventDiv>
            </EventDiv>


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
  grid-template-rows: 90px 90px 360px 360px auto 80px;
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

const EventDiv= styled.div`
  grid-row:4;
  grid-column: 1/-1;
  display: grid;
  justify-content: center;
  align-items: center;
  border:1px #1d1d1d solid;
  border-top:none;
  padding : 5rem;
`;

const BannerText = styled.div`
  text-align: center;
`;

//페이지 최하단 copyright 작성을 위한 div 스타일
const CopyrightDiv = styled.div`
  grid-row: -2;
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





