import React from 'react';


function App() {
    return (
        <div className="wrapper clear">
            <div className="overlay">
                <div className="drawer">
                    <h2 className="d-flex justify-between mb-30">Корзина <img className="removeBtn cu-p"
                                                                              src={`${process.env.PUBLIC_URL}/img/btn-remove.svg`}
                                                                              alt="shoes"/>
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

            <header className="d-flex justify-between align-center p-40">
                <div className="d-flex align-center">
                    <img width={75} height={50} src={`${process.env.PUBLIC_URL}/img/logo2.png`} alt="logo"/>
                    <div>
                        <h3 className="text-uppercase">TRENDY SHOES</h3>
                        <p>Будь в тренде!</p>
                    </div>
                </div>

                <ul className="d-flex">
                    <li className="mr-30">
                        <img src={`${process.env.PUBLIC_URL}img/cart.svg`} alt="cart logo" width={18} height={18}/>
                        <span>1205 pyб. </span>
                    </li>
                    <li>
                        <img src={`${process.env.PUBLIC_URL}img/user.svg`} alt="cart logo" width={18} height={18}/>
                    </li>
                </ul>
            </header>
            <div className="d-flex justify-between align-center p-40 ">
                <img className="br-20" src={`${process.env.PUBLIC_URL}img/9eacc91c-d92e-4436-a23f-984f449395f5.png`}
                     alt="" width={1000} height={500}/>
            </div>
            <div className="content p-40">
                <div className="d-flex justify-between align-center mb-40">
                    <h1>Все кроссовки</h1>
                    <div className="search-block d-flex">
                        <img src={`${process.env.PUBLIC_URL}img/search.svg`} alt="search" width={18} height={18}/>
                        <input placeholder={"Поиск..."}/>
                    </div>
                </div>

                <div className="d-flex">
                    <div className="card ">
                        <div className="favorite">
                            <img src={"/img/heart.svg"} alt="Unliked"/>
                        </div>
                        <img width={133} height={122} src={`${process.env.PUBLIC_URL}/img/shoes/1.jpg`} alt="shoes"/>
                        <h5>Мужские кроссовки <br/> Nike Blazer Mid Suede</h5>
                        <div className="d-flex justify-between align-center">
                            <div className={"d-flex flex-column"}>
                                <span>Цена: </span>
                                <b>12 999 руб. </b>
                            </div>
                            <button className={"button"}>
                                <img width={11} height={11} src={`${process.env.PUBLIC_URL}img/plus.svg`} alt={"+"}/>
                            </button>

                        </div>
                    </div>

                    <div className="card ">
                        <img width={133} height={122} src={`${process.env.PUBLIC_URL}/img/shoes/2.jpg`} alt="shoes"/>
                        <h5>Мужские кроссовки <br/> Nike Blazer Mid Suede</h5>
                        <div className="d-flex justify-between align-center">
                            <div className={"d-flex flex-column"}>
                                <span>Цена: </span>
                                <b>12 999 руб. </b>
                            </div>
                            <button className={"button"}>
                                <img width={11} height={11} src={`${process.env.PUBLIC_URL}img/plus.svg`} alt={"+"}/>
                            </button>

                        </div>
                    </div>

                    <div className="card ">
                        <img width={133} height={122} src={`${process.env.PUBLIC_URL}/img/shoes/3.jpg`} alt="shoes"/>
                        <h5>Мужские кроссовки <br/> Nike Blazer Mid Suede</h5>
                        <div className="d-flex justify-between align-center">
                            <div className={"d-flex flex-column"}>
                                <span>Цена: </span>
                                <b>12 999 руб. </b>
                            </div>
                            <button className={"button"}>
                                <img width={11} height={11} src={`${process.env.PUBLIC_URL}img/plus.svg`} alt={"+"}/>
                            </button>

                        </div>
                    </div>

                    <div className="card ">
                        <img width={133} height={122} src={`${process.env.PUBLIC_URL}/img/shoes/4.jpg`} alt="shoes"/>
                        <h5>Мужские кроссовки <br/> Nike Blazer Mid Suede</h5>
                        <div className="d-flex justify-between align-center">
                            <div className={"d-flex flex-column"}>
                                <span>Цена: </span>
                                <b>12 999 руб. </b>
                            </div>
                            <button className={"button"}>
                                <img width={11} height={11} src={`${process.env.PUBLIC_URL}img/plus.svg`} alt={"+"}/>
                            </button>

                        </div>
                    </div>

                    <div className="card ">
                        <img width={133} height={122} src={`${process.env.PUBLIC_URL}/img/shoes/5.jpg`} alt="shoes"/>
                        <h5>Мужские кроссовки <br/> Nike Blazer Mid Suede</h5>
                        <div className="d-flex justify-between align-center">
                            <div className={"d-flex flex-column"}>
                                <span>Цена: </span>
                                <b>12 999 руб. </b>
                            </div>
                            <button className={"button"}>
                                <img width={11} height={11} src={`${process.env.PUBLIC_URL}img/plus.svg`} alt={"+"}/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
