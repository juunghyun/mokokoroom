import React from 'react';
import Nav from "../molecules/Nav";
import axios from 'axios';
import {useEffect, useState} from "react";




const MainPage = () => {

    const apiTest = () =>{
        let xmlHttpRequest = new XMLHttpRequest();
        xmlHttpRequest.open("GET", `${process.env.REACT_APP_IP_ADDRESS}/armories/characters/coolguy/profiles`, true);
        xmlHttpRequest.setRequestHeader('accept', 'application/json');
        xmlHttpRequest.setRequestHeader('authorization', `bearer ${process.env.REACT_APP_KEY}`);
        xmlHttpRequest.onreadystatechange = () => { };
        xmlHttpRequest.send();
    }
     return (
        <div>
            <Nav></Nav>
            <h1>메인페이지입니다</h1>
            <p>main page</p>
            <button onClick={apiTest}>클릭</button>
        </div>
    );
};

export default MainPage;