import React from 'react';
import Logo from '../general/Logo';
import HeaderMenu from "./HeaderMenu";
import Favorite from "./Favorite";
import Notifications from "./Notifications";
import Lang from './Lang';

import './styles/header_block_top.css';

const HeaderBlockTop = () => {
    return (
        <div className={'header_block_top'}>
            <div className={'grid grid-cols-5 items-center'}>
                <div className={'col-span-3'}>
                    <div className={'flex'}>
                        <Logo  />
                        <HeaderMenu />
                    </div>
                </div>

                <div className={'flex justify-between'}>
                    <Lang />
                </div>
                <div className={'flex justify-end header_block_top-control items-center'}>
                    <Favorite />
                    <Notifications />
                </div>
            </div>
        </div>
    )
}

export default HeaderBlockTop;