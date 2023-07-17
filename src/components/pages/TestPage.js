import React from 'react';
import axios from 'axios';
import {apiGET} from "../../api/axiosInstance";
import { animated, useSpring, useSprings } from "@react-spring/web"
import {useEffect, useState} from "react";
import SearchNav from "../molecules/SearchNav";
import styled from 'styled-components';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';



const TestPage = () => {
    const testFunc = () =>{
        console.log(apiGET("/armories/characters/coolguy/profiles"));
    }

    const [isScrolled, setIsScrolled] = useState(false);
    /*
    		날짜: 2023/07/17 10:20 AM
    		작성자: 이정현
    		작성내용: scrollPosition이 window의 y축 스크롤값을 받아온 후 제한 스크롤에 따라서 드롭다운 메뉴가 펼치지기 위해 isScroll을 설정하는 함수
    */
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const scrollThreshold = 150; // 스크롤을 내린 후 Nav가 border-radius가 적용되는 위치
            setIsScrolled(scrollPosition > scrollThreshold);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll); //Clean up
        };
    }, []);

    return (
        <MainDiv>

            {/*최상단 모코코룸 - 캐릭터명 검색을 감싸는 Nav*/}
            <SearchNav></SearchNav>

            <ScrollDownNav isScrolled={isScrolled}>
                <MenuDiv>
                    <div>DPS 측정</div>
                </MenuDiv>
                <MenuDiv>
                    <div>악세 검색</div>
                </MenuDiv>
                <MenuDiv>
                    <div>랭킹 검색</div>
                </MenuDiv>
            </ScrollDownNav>

            <Nav>
                <MenuDiv>
                    <div>DPS 측정</div>
                </MenuDiv>
                <MenuDiv>
                    <div>악세 검색</div>
                </MenuDiv>
                <MenuDiv>
                    <div>랭킹 검색</div>
                </MenuDiv>
            </Nav>

            {/*사이트 최하단 Copyright 적는 부분*/}
            <CopyrightDiv>
                <CopyrightText>1234</CopyrightText>
            </CopyrightDiv>

        </MainDiv>
    );
};

export default TestPage;

//전체 레이아웃을 감싸는 body
const MainDiv = styled.div`
  padding: 5rem;
  display: grid;
  height: 200vh;
  width: 90vw;
  grid-template-columns: repeat(6,1fr);
  grid-template-rows: 90px 90px auto 80px;
`;












//페이지 이동하는 nav. dps측정 / 악세 검색 / 랭킹 검색 의 우선 세가지 페이지 존재
const Nav = styled.nav`
  grid-row: 2;
  grid-column: 1/-1;
  display:grid;
  grid-template-columns: repeat(6,1fr);
  grid-template-rows: 1fr;
  border: 1px #1d1d1d solid;
  border-top: none;
`;

//페이지 이동하는 nav 내부의 각 메뉴를 표현할 div
const MenuDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
    border-right:1px #1d1d1d solid;
`;

//페이지 최하단 copyright 작성을 위한 div 스타일
const CopyrightDiv = styled.div`
  grid-row: 4;
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

//scroll시 드롭다운되는 nav 스타일
const ScrollDownNav = styled.nav`
  position:fixed;
  display: grid;
  background-color: #1d1d1d;
  color: #ffffff;
  width: 90vw;
  height:90px;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(6,1fr);
  transition: transform 0.5s ease-in-out;
  transform: translateY(${props => (props.isScrolled ? '10%' : '-600%')});
  border:1px #1d1d1d solid;
  border-radius:20px;
`;



