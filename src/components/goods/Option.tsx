import React, {useState} from 'react';
import Arrow from "./Arrow";

import {IGoodOption} from "../../interfaces/GoodOptions";

import './styles/option.css';

interface ITextListProps {
    list?: string[],
    type: string
}

const TextList = ({list, type}: ITextListProps) => {
    if(!list || !list[0]) return null;

    const classNames = 'm-0 p-0 text_list ' + type;

    return (
        <ul className={classNames}>
            {
                list.map((item) => {
                    return (
                        <li key={new Date().getTime()}>{item}</li>
                    )
                })
            }
        </ul>
    )
}


interface ICompOptionProps {
    data: IGoodOption
}

const Option = ({data}:ICompOptionProps) => {
    const [isOpen, setView] = useState<boolean>(false);

    const toggleView = () => setView(!isOpen);

    return (
        <section className={'option'}>
            <div className={'option-header flex items-center'}>
                <h3 className={'option-header-title font-bold m-0'}>{data.title}</h3>
                <button onClick={toggleView}>
                    <Arrow isOpen={isOpen} />
                </button>
            </div>

            {
                isOpen && <div className={'option-body'}>
                    <h5 className={'option-body-subtitle font-bold m-0'}>{data.subTitle}</h5>
                    <div className={'grid grid-cols-2 gap-2'}>
                        {
                            data.texts[0] && data.texts.map(text => {
                                return <p key={new Date().getTime()}
                                          className={'option-body-text'}
                                >{text}</p>
                            })
                        }

                        <TextList list={data.listLeft} type={'left'} />
                        <TextList list={data.listRight} type={'right'} />
                    </div>
                </div>
            }
        </section>
    )
}

export default Option;