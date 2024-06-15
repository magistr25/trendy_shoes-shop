import React from 'react';

export const Draver = ({ onCloseCart, items=[]}) => {
    return (
        <div className="overlay">
            <div className="drawer">
                <h2 className="d-flex justify-between mb-30">Корзина
                    <img onClick={onCloseCart} className="removeBtn cu-p" src={`${process.env.PUBLIC_URL}/img/btn-remove.svg`} alt="close" />
                </h2>
                <div className="items">
                    {items.map((obj) => (
                        <div key={obj.id} className="cartItem d-flex align-center mb-20">
                            <div className="cartItemImg" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}${obj.imageUrl})` }}></div>
                            <div className="mr-20 flex">
                                <p className="mb-5">{obj.title}</p>
                                <b>{obj.price} руб.</b>
                            </div>
                            <img className="removeBtn" src="/img/btn-remove.svg" alt="remove" />
                        </div>
                    ))}
                </div>
                <div className="cartTotalBlock">
                    <ul>
                        <li className="d-flex">
                            <span>Итого:</span>
                            <div />
                            <b>21 498 руб. </b>
                        </li>
                        <li className="d-flex">
                            <span>Налог 5%:</span>
                            <div />
                            <b>1074 руб.</b>
                        </li>
                    </ul>
                    <button className="blueButton">Оформить заказ
                        <img src={`${process.env.PUBLIC_URL}/img/arrow.svg`} alt="Arrow" />
                    </button>
                </div>
            </div>
        </div>
    );
}
