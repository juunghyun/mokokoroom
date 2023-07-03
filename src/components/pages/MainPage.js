import React from 'react';
import Nav from "../molecules/Nav";
import axios from 'axios';
import {useEffect, useState} from "react";




const MainPage = () => {

    const apiTest = () =>{
        let xmlHttpRequest = new XMLHttpRequest();
        xmlHttpRequest.open("GET", "https://developer-lostark.game.onstove.com/armories/characters/coolguy/profiles", true);
        xmlHttpRequest.setRequestHeader('accept', 'application/json');
        xmlHttpRequest.setRequestHeader('authorization', 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAyNzM5NTUifQ.WXq0_uhMoveot0cRLZ9BR3qsY--tkHqb0xOiHWoG6SjtJtJi7UDnjhHq1mcXh8kStjHi4_WKDZvLISlmbSKd1ekSrFe9efqQoipTzak4E3saD0XVrJfPjef5tnSDLooLWfmJ6qJuZ_r0xR-6-bzsvo3kEqCFI3nqNhuZ0kQR192hXLFH7Y2UicmECu2mSJkskjsGWIvJ41QOVey4drFTPX1jeRINoBTb_vXblSzuqGPUmxdAZnZNth7gDz1dKWwEQFqO_LdqyFBozEkpZvxEWM0lFMZtCo_EelLqdvZJPsduiqSDeguOm_O87WeAD6H3pFW2Mz0K2gN8xHDmc6CSUw');
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