import React from 'react';

export const Header = () => {
    return (
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
    )
}
