import React from "react";

import './styles/active_photo_border.css';

interface IProps {
    activePhoto: number
}

const ActivePhotoBorder = ({activePhoto}:IProps) => {
    const blocks:number[] = [1, 2, 3];

    console.log('activePhoto', activePhoto);

    const render = (block:number) => {
        let classNames = 'block'

        if(block === activePhoto)  {
            classNames += ' active';

            if(activePhoto === 2) classNames += ' center';
        }

        return classNames;
    }

    return (
        <div className={'active_photo_border w-100'}>
            <div className={'grid grid-cols-3 gap-0'}>
                {
                    blocks.map((block) => {
                        return (
                            <span key={block}
                                className={render(block)}
                            ></span>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ActivePhotoBorder;