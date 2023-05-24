import React from 'react';
import Options from "./Options";
import ListGoods from "./ListGoods";
import IconConnection from "./IconConnection";

import './styles/goods.css';

const Goods = () => {
    return (
        <section className={'goods'}>
            <h2 className={'goods-title font-bold'}>
                Сравниваем<br />
                мобильные<br />
                телефоны
                <span className={'goods-title-count'}>3</span>
            </h2>
            <div className={'goods-control grid grid-cols-2 gap-2 content-around items-center'}>
                <button className={'goods-control-btn goods-control-btn--only text-left'}>только отличия</button>

                <div className={'icons'}>
                    <button className={'goods-control-btn goods-control-btn--plus'}>
                        <img src={'./images/icon-plus.svg'} alt={'Plus'} />
                    </button>
                    <button className={'goods-control-btn goods-control-btn--icon'}>
                        <IconConnection />
                    </button>
                </div>
            </div>

            <ListGoods />
            <Options />

            <div className={'goods-watched'}>
                <h2 className={'goods-watched-title font-bold'}>Просмотренные товары</h2>
                <ListGoods productType={'watched'} />
                <button className={'show-more font-bold'}>
                    <span>Показать еще</span>
                    <i className={'show-more-icon'}>
                        <img src={'./images/arrow-down.svg'} />
                    </i>
                </button>
            </div>
        </section>
    )
}

export default Goods;