import React from 'react';
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <Link to="/">
                <button>홈</button>
            </Link>
            <Link to="/test">
                <button>테스트페이지</button>
            </Link>
        </div>
    );
};

export default Nav;