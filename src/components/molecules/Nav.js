import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Nav = () => {
    return (
        <Nav1>
            <MenuDiv>
                    <NavA href="/dps">DPS 측정</NavA>
            </MenuDiv>
            <MenuDiv>
                <NavA href="/acc">악세 검색</NavA>
            </MenuDiv>
            <MenuDiv>
                    <NavA href="/dps">랭킹 검색</NavA>
            </MenuDiv>
        </Nav1>
    );
};

export default Nav;
//페이지 이동하는 nav. dps측정 / 악세 검색 / 랭킹 검색 의 우선 세가지 페이지 존재
const Nav1 = styled.nav`
  grid-row: 2;
  grid-column: 1/-1;
  display:grid;
  grid-template-columns: repeat(6,1fr);
  grid-template-rows: 1fr;
  border: 1px #1d1d1d solid;
  justify-content: center;
  align-items: center;
  border-top: none;
`;


//페이지 이동하는 nav 내부의 각 메뉴를 표현할 div
const MenuDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60%;
  border-right: 1px #1d1d1d solid;
`;

const NavA = styled.a`
  text-decoration: none;
  color: #1d1d1d;
  &:hover {
    transition: font-size 0.1s ease-in-out;
    font-size:14px;
  }
`;