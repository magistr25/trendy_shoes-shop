import React, { useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Draver } from "./components/Draver";
import axios from "axios";
import { Home } from "./pages/Home";
import { Favorites } from "./pages/Favorites";

function App() {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [cartOpened, setCartOpened] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [favoriteItems, setFavoriteItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [itemsResponse, cartResponse, favoritesResponse] = await Promise.all([
                    axios.get("https://666c2f5a49dbc5d7145d048a.mockapi.io/items"),
                    axios.get("https://666c2f5a49dbc5d7145d048a.mockapi.io/cart"),
                    axios.get("https://667005080900b5f872490e2e.mockapi.io/favorites")
                ]);
                setItems(itemsResponse.data);
                setCartItems(cartResponse.data);
                setFavoriteItems(favoritesResponse.data);
            } catch (error) {
                console.error('Ошибка при загрузке данных:', error);
            }
        };
        fetchData();
    }, []);

    const onAddToCart = async (obj) => {
        try {
            const response = await axios.post("https://666c2f5a49dbc5d7145d048a.mockapi.io/cart", obj);
            setCartItems(prev => [...prev, response.data]);
        } catch (error) {
            console.error('Ошибка при добавлении товара в корзину:', error);
        }
    };

    const onRemoveItem = async (id) => {
        try {
            await axios.delete(`https://666c2f5a49dbc5d7145d048a.mockapi.io/cart/${id}`);
            setCartItems(prev => prev.filter(item => item.id !== id));
        } catch (error) {
            console.error(`Ошибка при удалении товара с id ${id} из корзины:`, error);
        }
    };

    const onAddToFavorite = async (obj) => {
        try {
            const response = await axios.post('https://667005080900b5f872490e2e.mockapi.io/favorites', obj);
            setFavoriteItems(prev => [...prev, response.data]);
        } catch (error) {
            console.error('Ошибка при добавлении товара в избранное:', error);
        }
    };

    const onRemoveFavorite = async (id) => {
        try {
            await axios.delete(`https://667005080900b5f872490e2e.mockapi.io/favorites/${id}`);
            setFavoriteItems(prev => prev.filter(item => item.id !== id));
        } catch (error) {
            console.error(`Ошибка при удалении товара с id ${id} из избранного:`, error);
        }
    };

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    };

    const isItemAdded = (id) => cartItems.some(item => item.id === id);
    const isItemFavorite = (id) => favoriteItems.some(item => item.id === id);

    return (
        <div>
            <div className="wrapper clear">
                {cartOpened && (
                    <Draver
                        items={cartItems}
                        onRemoveItem={onRemoveItem}
                        onCloseCart={() => setCartOpened(false)}
                    />
                )}
                <Header onClickCart={() => setCartOpened(true)}/>

                <Routes>
                    <Route
                        path='/'
                        element={<Home
                            items={items}
                            cartItems={cartItems}
                            searchValue={searchValue}
                            onChangeSearchInput={onChangeSearchInput}
                            onAddToFavorite={onAddToFavorite}
                            onRemoveFavorite={onRemoveFavorite}
                            onAddToCart={onAddToCart}
                            setSearchValue={setSearchValue}
                            isItemAdded={isItemAdded}
                            isItemFavorite={isItemFavorite}
                        />}
                    />
                    <Route
                        path='/favorites'
                        element={<Favorites
                            favoriteItems={favoriteItems}
                            cartItems={cartItems}
                            onAddToFavorite={onAddToFavorite}
                            onRemoveFavorite={onRemoveFavorite}
                            onAddToCart={onAddToCart}
                            isItemAdded={isItemAdded}
                            isItemFavorite={isItemFavorite}
                        />}
                    />
                </Routes>
            </div>
        </div>
    );
}

export default App;
