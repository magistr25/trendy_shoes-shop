import React from 'react';

export const Draver = () => {
    return (
        <div style={{display: "none"}} className="overlay">
            <div className="drawer">
                <h2 className="d-flex justify-between mb-30">Корзина
                    <img className="removeBtn cu-p" src={`${process.env.PUBLIC_URL}/img/btn-remove.svg`} alt="shoes"/>
                </h2>
                <div className="items">
                    <div className="cartItem d-flex align-center mb-20">
                        <div className="cartItemImg" style={{
                            backgroundImage: `url(${process.env.PUBLIC_URL}/img/shoes/1.jpg)`

                        }}></div>
                        <div className="mr-20 flex">
                            <p className="mb-5">Мужские кроссовки <br/> Nike Blazer Mid Suede</p>
                            <b>12 999 руб. </b>
                        </div>
                        <img className="removeBtn" src="/img/btn-remove.svg" alt="shoes"/>
                    </div>
                    <div className="cartItem d-flex align-center mb-20">
                        <div className="cartItemImg" style={{
                            backgroundImage: `url(${process.env.PUBLIC_URL}/img/shoes/1.jpg)`
                        }

                        }></div>
                        <div className="mr-20 flex">
                            <p className="mb-5">Мужские кроссовки <br/> Nike Blazer Mid Suede</p>
                            <b>12 999 руб. </b>
                        </div>
                        <img className="removeBtn" src={`${process.env.PUBLIC_URL}/img/btn-remove.svg`}
                             alt="shoes"/>
                    </div>

                </div>
                <div className="cartTotalBlock">
                    <ul>
                        <li className="d-flex">
                            <span>Итого:</span>
                            <div/>
                            <b>21 498 руб. </b>
                        </li>
                        <li className="d-flex">
                            <span>Налог 5%:</span>
                            <div/>
                            <b>1074 руб.</b>
                        </li>
                    </ul>
                    <button className="blueButton">Оформить заказ<img
                        src={`${process.env.PUBLIC_URL}/img/arrow.svg`} alt="Arrow"/></button>
                </div>
            </div>
        </div>
    )
}
