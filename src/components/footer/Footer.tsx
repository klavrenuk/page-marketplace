import React from 'react';
import Logo from '../general/Logo';
import FooterNav from "./FooterNav";
import FooterInfo from "./FooterInfo";

import './styles/footer.css';

const Footer = () => {
    return (
        <footer className={'footer'}>
            <div className={'app-container'}>
                <Logo />
                <FooterNav />
            </div>
            <FooterInfo />
        </footer>
    )
}

export default Footer;