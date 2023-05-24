import React from 'react';

interface IProps {
    isOpen: boolean
}

const Arrow = ({isOpen}:IProps) => {
    if(!isOpen) {
        return (
            <img src={'./images/arrow-close.svg'} alt={'Close'} />
        )
    } else {
        return (
            <img src={'./images/arrow-open.svg'} alt={'Open'} />
        )
    }
}

export default Arrow;