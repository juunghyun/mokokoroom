import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
const Nav = () => {
    return (
        <TopNav>
                <LogoDiv className="in_nav_left_logo">
                    <Link to="/">
                        <LogoImg src="/favicon-96x96.png" alt="nav 로고"/>
                    </Link>
                </LogoDiv>

            {/*메뉴 항목이 늘어나면 NavList 내부 NavUl에 추가*/}
                <NavList>
                    <NavUl>
                        <NavA href="/test">테스트</NavA>
                    </NavUl>
                </NavList>
        </TopNav>
    );
};

export default Nav;

const TopNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;
`;

const LogoDiv = styled.div`
  width: 96px;
`;

const LogoImg = styled.img`
  width: 100%;
  border-radius: 30px;
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
`;

const NavUl = styled.li`
  list-style-type: none;
  margin-right: 10px;
`;

const NavA = styled.a`
  font-size: 25px;
  text-decoration: none;
  color: #1d1d1d;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  &:hover {
    position: relative;
    border-bottom: 1.6px solid #ffffff;
  }

  
`;