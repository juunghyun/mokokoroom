import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import {useState} from "react";

const SearchNav = () => {

    const isLogin = true; //TODO : 로그인 상태 체크 state 구현해야함
    const [isText, setIsText] = useState("캐릭터명을 입력하세요!");

    //검색 박스 입력시 text 구성(클릭)
    const clearText = () => {
        if(isText === "캐릭터명을 입력하세요!") {
            setIsText('');
        }
    };

    //검색 박스 입력시 text 구성(blur)
    const clearText2 = () => {
        if(isText === ""){
            setIsText("캐릭터명을 입력하세요!")
        }
    };

    //검색 text 입력
    const addText = (e) => {
        setIsText(e.target.value);
    };


    return (
        <SearchNavBody>

            {/*로고 버튼 누르면 홈으로*/}
            <LogoDiv>
                <NavA href="/main">MOKOKOROOM</NavA>
            </LogoDiv>

            {/*검색 버튼 검색 기능 제공*/}
            <SearchDiv>
                <SearchBoxDiv>
                    <SearchText
                        type="text"
                        value={isText}
                        onClick={clearText}
                        onBlur={clearText2}
                        onChange={addText}
                    >
                    </SearchText>
                    <SearchIconImg>
                        <SearchOutlinedIcon></SearchOutlinedIcon>
                    </SearchIconImg>
                </SearchBoxDiv>
            </SearchDiv>

            <SearchLoginBox>
                <SearchLoginIconImg>
                    <AccountBoxOutlinedIcon></AccountBoxOutlinedIcon>
                </SearchLoginIconImg>
                <SearchLoginText>
                    { !isLogin ? (
                        <div>로그인 아이디</div>) : <div>Login</div>}
                </SearchLoginText>
            </SearchLoginBox>
            
        </SearchNavBody>
    );
};

export default SearchNav;

// 최상단 MokokoRoom과 캐릭터명 입력을 감싸는 nav
const SearchNavBody = styled.nav`
  display: grid;
  grid-column: 1/-1;
  grid-row: 1/2;
  grid-template-columns: repeat(6,1fr);
  grid-template-rows: 1fr;
  border: 1px #1d1d1d solid;
`;

//모코코룸 글자가 들어가는 div 스타일. 클릭 시 홈으로 이동하는 기능
const LogoDiv = styled.div`
  padding-left:10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size:25px;
`;

//검색 박스를 위한 div. 내부 검색박스 Padding존재
const SearchDiv = styled.div`
  grid-column: 2/ span 1;
  padding: 20px 20px;
`;

//검색 박스 자체. 내부에 이미지와 입력하는 부분을 3:1로 나눔
const SearchBoxDiv = styled.div`
  border: 1px #1d1d1d solid;
  width:100%;
  height:100%;
  display: grid;
  grid-template-columns: 4fr 1fr;
  column-gap: 3px;
`;


//mui로 가져온 이미지. 검색 박스 내부 이미지
const SearchIconImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

//검색 박스 내부 검색칸 Input
const SearchText = styled.input`
  border: none;
  text-align: center;
`;

//
const SearchLoginBox = styled.div`
  border: 1px #1d1d1d solid;
  width:100%;
  height:100%;
  grid-column: 6/7;
  border:none;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr;
  column-gap: 3px;
`;


//
const SearchLoginIconImg = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  width: 100%;
  height: 100%;
`;

//검색 박스 내부 검색칸 Input
const SearchLoginText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 10px;
  border: none;
  text-align: center;
`;

const NavA = styled.a`
  text-decoration: none;
  color: #1d1d1d;
`;