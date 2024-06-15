import React, {useEffect, useState} from 'react';
import {Card} from "./components/Card";
import {Header} from "./components/Header";
import {Draver} from "./components/Draver";



function App() {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [cartOpened, setCartOpened] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        fetch("https://666c2f5a49dbc5d7145d048a.mockapi.io/items")
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);
    const onAddToCart = (obj) => {
        setCartItems(prev => {
            const isItemInCart = prev.some(item => item.id === obj.id);

            if (isItemInCart) {
                // Удаляем элемент из корзины
                return prev.filter(item => item.id !== obj.id);
            } else {
                // Добавляем элемент в корзину
                return [...prev, obj];
            }
        });
    };

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    }


        return (
        <div className="wrapper clear">
            {cartOpened && <Draver items = {cartItems} onCloseCart={() => setCartOpened(false)} />}
            <Header onClickCart={() => setCartOpened(true)} />
            <div className="d-flex justify-between align-center p-40 ">
                <img className="br-20" src={`${process.env.PUBLIC_URL}img/banner.png`}
                     alt="" width={1000} height={500}/>
            </div>
            <div className="content p-40">
                <div className="d-flex justify-between align-center mb-40">
                    <h1>{searchValue? `Поиск по запросу: "${searchValue}"` : "Все кроссовки"}</h1>
                    <div className="search-block d-flex">
                        <img src={`${process.env.PUBLIC_URL}img/search.svg`} alt="Search" width={18} height={18}/>
                        <input onChange={onChangeSearchInput} value={searchValue} placeholder={"Поиск..."} />
                        {searchValue && (
                            <img onClick={()=>setSearchValue("")} className="clear cu-p" width={21} height={21}
                            src={`${process.env.PUBLIC_URL}img/btn-remove.svg`}
                            alt="Btn-remove" />
                        )}
                    </div>
                </div>

                <div className="d-flex flex-wrap justify-start">
                    {items.map((item) => {
                        return <Card key={item.id} {...item} onPlus={(obj)=>{onAddToCart(obj)}}/>
                    })}
                </div>
            </div>
        </div>
    );
}

export default App;
