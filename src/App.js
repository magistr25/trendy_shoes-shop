import React, {useEffect, useState} from 'react';
import {Card} from "./components/Card";
import {Header} from "./components/Header";
import {Draver} from "./components/Draver";
import axios from "axios";


function App() {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [cartOpened, setCartOpened] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [favoriteItems, setFavoriteItems] = useState([]);
    useEffect(() => {
        axios.get("https://666c2f5a49dbc5d7145d048a.mockapi.io/items")
            .then(res => setItems(res.data));
        axios.get("https://666c2f5a49dbc5d7145d048a.mockapi.io/cart")
            .then(res => setCartItems(res.data));
    }, []);
    const onAddToCart = (obj) => {
        const newItem = { ...obj, cartId: Date.now() };
        axios.post("https://666c2f5a49dbc5d7145d048a.mockapi.io/cart", newItem)


        setCartItems(prev => [...prev, newItem]);
    };
    const onRemoveItem = async (id, cartId) => {
        try {
            await axios.delete(`https://666c2f5a49dbc5d7145d048a.mockapi.io/cart/${id}`);
            const response = await axios.get("https://666c2f5a49dbc5d7145d048a.mockapi.io/cart");
            setCartItems(response.data);
        } catch (error) {
            console.error(`Ошибка при удалении товара с id ${id} из корзины:`, error);
        }
        setCartItems(prev => prev.filter(item => item.cartId !== cartId));

    };
    const onAddToFavorite = async (obj) => {
        try {
            const response = await axios.post('https://666c2f5a49dbc5d7145d048a.mockapi.io/favorites', obj);
            setFavoriteItems(prev => [...prev, response.data]);
        } catch (error) {
            console.error('Ошибка при добавлении товара в избранное:', error);
        }
    };

    const onRemoveFavorite = async (id) => {
        try {
            await axios.delete(`https://666c2f5a49dbc5d7145d048a.mockapi.io/favorites/${id}`);
            setFavoriteItems(prev => prev.filter(item => item.id !== id));
        } catch (error) {
            console.error(`Ошибка при удалении товара с id ${id} из избранного:`, error);
        }
    };

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);

    }

    return (
        <div className="wrapper clear">
            {cartOpened && <Draver items={cartItems} onRemoveItem={onRemoveItem}
                                   onCloseCart={() => setCartOpened(false)}/>}
            <Header onClickCart={() => setCartOpened(true)}/>
            <div className="d-flex justify-between align-center p-40 ">
                <img className="br-20" src={`${process.env.PUBLIC_URL}img/banner.png`}
                     alt="" width={1000} height={500}/>
            </div>
            <div className="content p-40">
                <div className="d-flex justify-between align-center mb-40">
                    <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кроссовки"}</h1>
                    <div className="search-block d-flex">
                        <img src={`${process.env.PUBLIC_URL}img/search.svg`} alt="Search" width={18} height={18}/>
                        <input onChange={onChangeSearchInput} value={searchValue} placeholder={"Поиск..."}/>
                        {searchValue && (
                            <img onClick={() => setSearchValue("")} className="clear cu-p" width={21} height={21}
                                 src={`${process.env.PUBLIC_URL}img/btn-remove.svg`}
                                 alt="Btn-remove"/>
                        )}
                    </div>
                </div>

                <div className="d-flex flex-wrap justify-start">
                    {items
                        .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
                        .map((item) => {
                            return <Card key={item.id} {...item} cartItems={cartItems} onAddToFavorite={onAddToFavorite} onRemoveFavorite={onRemoveFavorite} onPlus={(obj) => {
                                onAddToCart(obj)
                            }}/>
                        })}
                </div>
            </div>
        </div>
    );
}

export default App;
