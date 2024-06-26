import React from 'react';
import {Link} from "react-router-dom";

export const Header = ({onClickCart, onClickHeart, totalPrice, count, setCount, cartItems}) => {
    React.useEffect(() => {
        setCount(cartItems.length);
    }, [cartItems, setCount]);
    return (
        <header className="d-flex justify-between align-center p-40">
            <Link to={"/trendy_shoes-shop/"}>
                <div className="d-flex align-center ">
                    <img width={75} height={50} src={`${process.env.PUBLIC_URL}/img/logo2.png`} alt="logo"/>
                    <div>
                        <h3 className="text-uppercase">TRENDY SHOES</h3>
                        <p>Будь в тренде!</p>
                    </div>
                </div>
            </Link>

            <ul className="d-flex">
                <li className="mr-30  cu-p" onClick={onClickCart}>

                    <img src={`${process.env.PUBLIC_URL}/img/cart.svg`} alt="cart logo" width={18} height={18}/>
                    <span>{totalPrice} pyб. </span>
                    {count > 0 && <div className="count">{count}</div>}
                </li>
                <li className="mr-20  cu-p" onClick={onClickHeart}>
                    <Link to={"/favorites"}><img src={`${process.env.PUBLIC_URL}/img/heart.svg`} alt="heart" width={18}
                                                 height={18}/></Link>

                </li>
                <Link to={"/orders"}>
                    <li>
                        <img src={`${process.env.PUBLIC_URL}/img/user.svg`} alt="user logo" width={18} height={18} />
                    </li>
                </Link>
            </ul>
        </header>
    )
}
