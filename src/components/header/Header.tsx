import React from 'react';

import Search from './Search';
import HeaderBlockTop from "./HeaderBlockTop";

import './styles/header.css';

const Header = () => {
    return (
        <header className={'header app-container'}>
            <div className={'header-block'}>
                <HeaderBlockTop />
            </div>
            <div className={'header-block'}>
                <Search />
            </div>
        </header>
    )
}

export default Header;