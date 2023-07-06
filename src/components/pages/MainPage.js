import React from 'react';
import Nav from "../molecules/Nav";
import axios from 'axios';
import {apiGET} from "../../api/axiosInstance";
import {useEffect, useState} from "react";




const MainPage = () => {

    const testFunc = () =>{
        console.log(apiGET("/armories/characters/coolguy/profiles"));
    }
    return (
        <div>
            <Nav></Nav>
            <h1>메인페이지입니다</h1>
            <p>main page</p>
            <button onClick={testFunc}>클릭</button>
        </div>
    );
};

export default MainPage;