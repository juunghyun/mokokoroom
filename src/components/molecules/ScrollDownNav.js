import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const ScrollDownNav = (props) => {


    return (
        <ScrollDownNav1 isScrolled={props.isScrolled}>
            <MenuDiv>
                <div>DPS 측정</div>
            </MenuDiv>
            <MenuDiv>
                <div>악세 검색</div>
            </MenuDiv>
            <MenuDiv>
                <div>랭킹 검색</div>
            </MenuDiv>
        </ScrollDownNav1>
    );
};

export default ScrollDownNav;

//scroll시 드롭다운되는 nav 스타일
const ScrollDownNav1 = styled.nav`
  position:fixed;
  display: grid;
  background-color: #1d1d1d;
  color: #ffffff;
  left:5%;
  width: 90vw;
  height:90px;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(6,1fr);
  transition: transform 0.5s ease-in-out;
  transform: translateY(${props => (props.isScrolled ? '-50%' : '-600%')});
  border:1px #1d1d1d solid;
  border-radius:20px;
`;

//페이지 이동하는 nav 내부의 각 메뉴를 표현할 div
const MenuDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
    border-right:1px #1d1d1d solid;
`;