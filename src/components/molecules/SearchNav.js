import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
const SearchNav = () => {
    return (
        <SearchNav1>
            <LogoDiv>MOKOKOROOM</LogoDiv>
            <SearchDiv>
                <SearchBoxDiv>
                    <SearchIconImg>
                        <SearchOutlinedIcon></SearchOutlinedIcon>
                    </SearchIconImg>
                    <SearchText
                        type ="text"
                        value ="캐릭터명을 입력하세요!"
                    >
                    </SearchText>
                </SearchBoxDiv>
            </SearchDiv>
        </SearchNav1>
    );
};

export default SearchNav;

// 최상단 MokokoRoom과 캐릭터명 입력을 감싸는 nav
const SearchNav1 = styled.nav`
  display: grid;
  grid-column: 1/-1;
  grid-row: 1/2;
  grid-template-columns: repeat(6,1fr);
  grid-template-rows: 1fr;
  border: 1px #1d1d1d solid;
`;

//모코코룸 글자가 들어가는 div 스타일. 클릭 시 홈으로 이동하는 기능
const LogoDiv = styled.div`
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
  grid-template-columns: 1fr 4fr;
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
`;
