import React from 'react';
import ActivePhotoBorder from "./ActivePhotoBorder";
import Rating from "./Rating";
import IconConnection from "../goods/IconConnection";

import {IProduct} from "../../interfaces/Product";

import './styles/product.css';
import ButtonLike from "../goods/ButtonLike";

interface IProps {
    product: IProduct,
    type?: string
}

const ProductInfoWatched = ({product}: IProps) => {
    return (
        <div className={'product-info product-info-watched'}>
            <h3 className={'product-info-sum font-bold m-0'}>{product.sum}</h3>
            <Rating product={product} />
            <h3 className={'product-info-title'}>{product.title}</h3>
            <div className={'product-info-buy'}>
                <button className={'product-info-buy-btn'}>В магазин</button>

                <span className={'product-info-buy-controls'}>
                    <ButtonLike />
                    <button className={'btn-connection'}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.83333 12.1667H5.5V8.83333H3.83333V12.1667ZM2.16667 12.1667V8.16667C2.16667 7.90145 2.27202 7.6471 2.45956 7.45956C2.6471 7.27202 2.90145 7.16667 3.16667 7.16667H5.5V4.83333C5.5 4.56812 5.60536 4.31376 5.79289 4.12623C5.98043 3.93869 6.23478 3.83333 6.5 3.83333H8.83333V1.5C8.83333 1.36868 8.8592 1.23864 8.90945 1.11732C8.95971 0.995991 9.03337 0.885752 9.12623 0.792893C9.31376 0.605357 9.56812 0.5 9.83333 0.5H12.8333C12.9647 0.5 13.0947 0.525866 13.216 0.57612C13.3373 0.626375 13.4476 0.700035 13.5404 0.792893C13.6333 0.885752 13.707 0.995991 13.7572 1.11732C13.8075 1.23864 13.8333 1.36868 13.8333 1.5V12.1667H2.16667ZM10.5 2.16667V12.1667H12.1667V2.16667H10.5ZM7.16667 12.1667H8.83333V5.5H7.16667V12.1667ZM1.33333 13.8333H14.6667C14.8877 13.8333 15.0996 13.9211 15.2559 14.0774C15.4122 14.2337 15.5 14.4457 15.5 14.6667C15.5 14.8877 15.4122 15.0996 15.2559 15.2559C15.0996 15.4122 14.8877 15.5 14.6667 15.5H1.33333C1.11232 15.5 0.900358 15.4122 0.744078 15.2559C0.587797 15.0996 0.5 14.8877 0.5 14.6667C0.5 14.4457 0.587797 14.2337 0.744078 14.0774C0.900358 13.9211 1.11232 13.8333 1.33333 13.8333Z" fill="black"/>
                        </svg>
                    </button>
                </span>
            </div>
        </div>
    )
}

const Product = ({product, type}:IProps) => {
    const productType:string = type ? type : 'default';

    return (
        <div className={'product'}>
            {
                productType !== 'watched' && <div className={'slider-arrows'}>
                    <button className={'slider-arrow slider-arrow--left'}>
                        <img src={'/images/slider-arrow-left.svg'} alt={'Arrow left'} />
                    </button>
                    <button className={'slider-arrow slider-arrow--right'}>
                        <img src={'/images/slider-arrow-right.svg'} alt={'Arrow right'} />
                    </button>
                </div>
            }

            <div className={'product-container_img'}>
                {
                    productType !== 'watched' && <button className={'btn-close'}>
                        <img src={'/images/btn-close.svg'} alt={'Close'} />
                    </button>
                }

                <div className={'img-wrap'}>
                    <img className={'img'}
                         src={'/images/product.png'}  alt={'Product photo'}
                    />
                </div>
                {
                    productType !== 'watched' && <span>
                        <div className={'count_img text-center'}>{product.activePhoto}/3</div>
                        <ActivePhotoBorder activePhoto={product.activePhoto} />
                    </span>
                }
            </div>

            {
                productType === 'watched' ? <ProductInfoWatched product={product} /> :
                    <div className={'product-info'}>
                        <h3 className={'product-info-title'}>{product.title}</h3>
                        <Rating product={product} />
                        <h3 className={'product-info-sum font-bold m-0'}>{product.sum}</h3>
                        <p className={'product-info-offers'}>
                            {product.offers} предложений
                        </p>
                        <div className={'product-info-buy'}>
                            <button className={'product-info-buy-btn'}>В магазин</button>
                        </div>
                    </div>
            }
        </div>
    )
}

export default Product;