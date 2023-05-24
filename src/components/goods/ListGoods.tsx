import React from 'react';
import Product from "../producs/Product";

import './styles/list-goods.css';

import {IProduct} from "../../interfaces/Product";

interface IProps {
    productType?: string
}

const ListGoods = ({productType}:IProps) => {
    const goods:IProduct[] = [
        {
            id: 1,
            title: 'Название товара в две линии',
            rating: 4.9,
            comments: 20,
            sum: '133 650 сум',
            offers: 25,
            activePhoto: 1
        },
        {
            id: 2,
            title: 'Название товара в две линии',
            rating: 4.9,
            comments: 20,
            sum: '133 650 сум',
            offers: 25,
            activePhoto: 2
        }
    ];
    const type:string|undefined = productType;

    return (
        <div className={'list_goods'}>
            <div className={'grid grid-cols-2 gap-2'}>
                {
                    goods.map((product) => {
                        return (
                            <Product key={product.id} product={product} type={type} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ListGoods;