import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const ScrollDownNav = (props) => {

    const [isScrolled, setIsScrolled] = useState(false);
    /*
    		날짜: 2023/07/17 10:20 AM
    		작성자: 이정현
    		작성내용: scrollPosition이 window의 y축 스크롤값을 받아온 후 제한 스크롤에 따라서 드롭다운 메뉴가 펼치지기 위해 isScroll을 설정하는 함수
    */
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const scrollThreshold = 180; // 스크롤을 내린 후 Nav가 border-radius가 적용되는 위치
            setIsScrolled(scrollPosition > scrollThreshold);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll); //Clean up
        };
    }, []);

    return (
        <ScrollDownNav1 isScrolled={isScrolled}>
            <MenuDiv>
                <NavA href="/dps">DPS 측정</NavA>
            </MenuDiv>
            <MenuDiv>
                <NavA href="/acc">악세 검색</NavA>
            </MenuDiv>
            <MenuDiv>
                <NavA href="/dps">랭킹 검색</NavA>
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

const NavA = styled.a`
  text-decoration: none;
  color: #ffffff;
  &:hover {
    transition: font-size 0.1s ease-in-out;
    font-size:14px;
  }
`;