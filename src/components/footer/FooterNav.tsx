import React from 'react';
import RoutesApp from "../../routes/RoutesApp";
import {Link} from "react-router-dom";

import './styles/footer-nav.css';

const FooterNav = () => {
    return (
        <nav className={'footer_nav'}>
            <ul className={'p-0 m-0'}>
                {
                    RoutesApp.getNavList().map((route) => {
                        return (
                            <li key={route.path}>
                                <Link to={route.path} className={'footer_nav-link'}>
                                    {route.title}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default FooterNav