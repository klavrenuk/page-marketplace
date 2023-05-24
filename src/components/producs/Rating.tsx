import React from 'react';
import {IProduct} from "../../interfaces/Product";

import './styles/rating.css';

interface IProps {
    product: IProduct
}

const Rating = ({product}: IProps) => {
    return (
        <div className={'rating'}>
            <div className={'rating-container'}>
                <span className={'rating-star'}>
                    <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M7 0C7.22417 0 7.42838 0.121374 7.52494 0.311979L9.23173 3.68173L13.161 4.16969C13.3832 4.19729 13.5689 4.34276 13.6382 4.54363C13.7075 4.74448 13.648 4.96496 13.4854 5.11039L10.6111 7.68095L11.3326 11.3523C11.3735 11.5599 11.284 11.7712 11.1026 11.8954C10.9212 12.0195 10.6803 12.0344 10.4833 11.9337L7 10.1526L3.51671 11.9337C3.31969 12.0344 3.07874 12.0195 2.89738 11.8954C2.71601 11.7712 2.62652 11.5599 2.66733 11.3523L3.38894 7.68095L0.514551 5.11039C0.351963 4.96496 0.292545 4.74448 0.361819 4.54363C0.431094 4.34276 0.61673 4.19729 0.838984 4.16969L4.76824 3.68173L6.47506 0.311979C6.57162 0.121374 6.77583 0 7 0Z"
                              fill="#FFC800"/>
                    </svg>
                </span>
                <span className={'mark'}>{product.rating}</span>
                <span className={'comments'}>/ {product.comments} отзывов</span>
            </div>
        </div>
    )
}

export default Rating;