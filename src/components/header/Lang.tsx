import React from 'react';

import './styles/lang.css';

const Lang = () => {
    return (
        <div className={'lang'}>
            <div className={'lang-uz'}>
                <img src={'/images/uz.svg'} alt={'Uzbekistan'} />
            </div>
            <button className={'lang-btn'}>
                <img src={'/images/lang-arrow.svg'} alt={'Arrow'} />
            </button>
        </div>
    )
}

export default Lang;