import React from 'react';
import axios from 'axios';
import {apiGET} from "../../api/axiosInstance";
import { animated, useSpring, useSprings } from "@react-spring/web"
import {useEffect, useState} from "react";
import styled from 'styled-components';




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
            const scrollThreshold = 500; // 스크롤을 내린 후 Nav가 border-radius가 적용되는 위치
            setIsScrolled(scrollPosition > scrollThreshold);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll); //Clean up
        };
    }, []);

    return (
        <div>test</div>
    )
};

export default TestPage;