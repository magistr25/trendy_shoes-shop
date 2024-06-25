import React, {useEffect, useState} from 'react';
import {Route, Routes} from "react-router-dom";
import {Header} from "./components/Header";
import {Draver} from "./components/Draver";
import axios from "axios";
import {Home} from "./pages/Home";
import {Favorites} from "./pages/Favorites";
import {Orders} from "./pages/Orders";

function App() {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [cartOpened, setCartOpened] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [favoriteItems, setFavoriteItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [orderPlaced, setOrderPlaced] = useState(false); // Состояние для отображения сообщения "Ваш заказ оформлен!"
    const [numberOfOrder, setNumberOfOrder] = useState('');
    useEffect(() => {
        const fetchData = async () => {

            try {
                setIsLoading(true);
                const [itemsResponse, cartResponse, favoritesResponse] = await Promise.all([
                    axios.get("https://666c2f5a49dbc5d7145d048a.mockapi.io/items"),
                    axios.get("https://666c2f5a49dbc5d7145d048a.mockapi.io/cart"),
                    axios.get("https://6676e5ff145714a1bd731f73.mockapi.io/favorites")
                ]);
                setItems(itemsResponse.data);
                setCartItems(cartResponse.data);
                setFavoriteItems(favoritesResponse.data);
            } catch (error) {
                console.error('Ошибка при загрузке данных:', error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    const onAddToCart = async (obj) => {
        try {
            const itemId = obj.itemId
            const response = await axios.post("https://666c2f5a49dbc5d7145d048a.mockapi.io/cart", {...obj, itemId});
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

            const response = await axios.post('https://6676e5ff145714a1bd731f73.mockapi.io/favorites', obj);
            setFavoriteItems(prev => [...prev, response.data]);

        } catch (error) {
            console.error('Ошибка при добавлении товара в избранное:', error);
        }
    };

    const onRemoveFavorite = async (id) => {
        // далее до блока try/catch код, который связан с особенностями работы mockAPI (т.к. mockAPI переприсваивает id элементам)
        let newId
        const idTest = (obj) => {
            for (const item of favoriteItems) {
                if (item.itemId === obj.itemId) {
                    newId = item.id
                }
            }
        }
        idTest(id)

        try {

            await axios.delete(`https://6676e5ff145714a1bd731f73.mockapi.io/favorites/${newId}`);
            setFavoriteItems(prev => prev.filter(item => item.id !== newId));
        } catch (error) {
            console.error(`Ошибка при удалении товара с itemId ${id} из избранного:`, error);
        }
    };

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    };

    const isItemAdded = (itemId) => cartItems.some(item => item.itemId === itemId);
    const isItemFavorite = (itemId) => favoriteItems.some(item => item.itemId === itemId);

    const itogPrice = () => {
        return cartItems.reduce((sum, item) => sum + item.price, 0);
    }

    const nalog = (itogPrice() * 0.05).toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    ;
    const totalPrice = itogPrice().toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    ;

    const onCloseCart = () => {
        setCartOpened(false);
        setOrderPlaced(false);
        setNumberOfOrder('')
    }
    const onOrder = async (items) => {
        try {
            const response = await axios.post('https://6676e5ff145714a1bd731f73.mockapi.io/orders', items);
            if (response.data && response.data.id) {
                const id = response.data.id;
                setOrderPlaced(true); // Устанавливаем состояние "заказ оформлен"
                setCartItems([]); // Очищаем корзину
                for (const item of items) {
                    await axios.delete(`https://666c2f5a49dbc5d7145d048a.mockapi.io/cart/${item.id}`)
                }
                setNumberOfOrder(id); // Устанавливаем номер заказа (последние 4 символа)
            } else {
                console.error('Ошибка: Не удалось получить дату создания заказа.');
            }
        } catch (error) {
            console.error('Ошибка при формировании заказа:', error);
        }
    }


    return (
        <div className="d-flex justify-between align-center p-40">
            <div className="wrapper clear">
                {cartOpened && (
                    <Draver
                        items={cartItems}
                        onRemoveItem={onRemoveItem}
                        onCloseCart={onCloseCart}
                        totalPrice={totalPrice}
                        nalog={nalog}
                        onOrder={onOrder} // Передаем метод onOrder
                        orderPlaced={orderPlaced} // Передаем состояние orderPlaced
                        cartItems={cartItems}
                        numberOfOrder={numberOfOrder}
                    />
                )}
                <Header onClickCart={() => setCartOpened(true)} totalPrice={totalPrice}/>

                <Routes>
                    <Route
                        path='/'
                        element={<Home
                            items={items}
                            cartItems={cartItems}
                            setCartItems={setCartItems}
                            searchValue={searchValue}
                            onChangeSearchInput={onChangeSearchInput}
                            onAddToFavorite={onAddToFavorite}
                            onRemoveFavorite={onRemoveFavorite}
                            onAddToCart={onAddToCart}
                            onRemoveToCart={onRemoveItem}
                            setSearchValue={setSearchValue}
                            isItemAdded={isItemAdded}
                            isItemFavorite={isItemFavorite}
                            isLoading={isLoading}
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
                            onChangeSearchInput={onChangeSearchInput}
                            setSearchValue={setSearchValue}
                        />}
                    />
                    <Route
                        path='/orders'
                        element={<Orders/>}
                    />
                </Routes>
            </div>
        </div>
    );
}

export default App;
