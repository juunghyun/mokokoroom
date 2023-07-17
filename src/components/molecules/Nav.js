import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Nav = () => {
    return (
        <Nav1>
            <MenuDiv>
                <div>DPS 측정</div>
            </MenuDiv>
            <MenuDiv>
                <div>악세 검색</div>
            </MenuDiv>
            <MenuDiv>
                <div>랭킹 검색</div>
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
  border-top: none;
`;


//페이지 이동하는 nav 내부의 각 메뉴를 표현할 div
const MenuDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
    border-right:1px #1d1d1d solid;
`;