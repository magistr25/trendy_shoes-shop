import React from 'react';

export const Draver = ({ onRemoveItem, onCloseCart, numberOfOrder, items = [], cartItems, totalPrice, nalog, onOrder, orderPlaced }) => {
    console.log(cartItems)
    return (
        <div className="overlay">
            <div className="drawer">
                <h2 className="d-flex justify-between mb-30">Корзина
                    <img onClick={onCloseCart} className="removeBtn cu-p" src={`${process.env.PUBLIC_URL}/img/btn-remove.svg`} alt="close" />
                </h2>

                {items.length === 0 && !orderPlaced ? (
                    <div className="cartEmpty d-flex align-center justify-center flex-column flex">
                        <img
                            className="mb-20"
                            width={120}
                            height={120}
                            src={`${process.env.PUBLIC_URL}/img/empty-cart.jpg`}
                            alt="Empty-cart"
                        />
                        <h2>Корзина пустая</h2>
                        <p className="opacity-6">Добавьте хотя бы одну пару обуви, чтобы сделать заказ</p>
                        <button onClick={onCloseCart} className="blueButton">
                            <img src={`${process.env.PUBLIC_URL}/img/arrow.svg`} alt="Arrow" />
                            Вернуться назад
                        </button>
                    </div>
                ) : orderPlaced ?(
                    <div className="cartEmpty d-flex align-center justify-center flex-column flex">
                        <img
                            className="mb-20"
                            width={120}
                            height={120}
                            src={`${process.env.PUBLIC_URL}/img/order-placed.png`}
                            alt="Order-placed"
                        />
                        <h2>Заказ оформлен!</h2>
                        <p className="opacity-6">Ваш заказ #{numberOfOrder} скоро будет передан курьерской доставке</p>
                        <button onClick={onCloseCart} className="blueButton">
                            <img src={`${process.env.PUBLIC_URL}/img/arrow.svg`} alt="Arrow" />
                            Вернуться назад
                        </button>
                    </div>
                ) : (
                    <div className="d-flex flex-column flex">
                        <div className="items">
                            {items.map((obj) => (
                                <div key={obj.itemId} className="cartItem d-flex align-center mb-20">
                                    <div
                                        className="cartItemImg"
                                        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}${obj.imageUrl})` }}
                                    />
                                    <div className="mr-20 flex">
                                        <p className="mb-5">{obj.title}</p>
                                        <b>{obj.price} руб.</b>
                                    </div>
                                    <img
                                        onClick={() => onRemoveItem(obj.id, obj.cartId)}
                                        className="removeBtn"
                                        src={`${process.env.PUBLIC_URL}/img/btn-remove.svg`}
                                        alt="remove"
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="cartTotalBlock">
                            <ul>
                                <li className="d-flex">
                                    <span>Налог 5%:</span>
                                    <div />
                                    <b>{nalog} руб.</b>
                                </li>
                                <li className="d-flex">
                                    <span>Итого:</span>
                                    <div />
                                    <b>{totalPrice} руб.</b>
                                </li>
                            </ul>
                            <button onClick={()=>onOrder(cartItems)} className="blueButton">
                                Оформить заказ
                                <img src={`${process.env.PUBLIC_URL}/img/arrow.svg`} alt="Arrow" />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
