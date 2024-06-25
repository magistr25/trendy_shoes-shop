import React from 'react';
import { Card } from '../components/Card';
import "../index.scss"


export const Home = ({ items, cartItems, setCartItems, searchValue, onChangeSearchInput, onAddToFavorite, onRemoveFavorite, onAddToCart, onRemoveToCart, isItemAdded, isItemFavorite, isLoading}) => {
    const renderItems = () => {
        const filteredItems = isLoading
            ? [...Array(10)].map((_, index) => ({ id: index }))
            : items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()));

        return filteredItems.map((item, index) => (
            <Card
                key={isLoading ? index : item.itemId}
                {...item}
                sizes={item.sizes}
                onPlus={onAddToCart}
                cartItems={cartItems}
                setCartItems={setCartItems}
                onRemoveToCart={onRemoveToCart}
                onAddToFavorite={onAddToFavorite}
                onRemoveFavorite={onRemoveFavorite}
                isAdded={isItemAdded(item.itemId)}
                isFavorite={isItemFavorite(item.itemId)}
                isLoading={isLoading}
            />
        ));
    }



    return (
        <div className= "content p-40 ">
            <div className="d-flex justify-between align-center ">
                <img className="br-20" src={`${process.env.PUBLIC_URL}img/banner.png`}
                     alt="" width={1000} height={500}/>
            </div>
            <div className="d-flex  justify-between align-center p-40">
                <h1 className="ml-20"> {searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
                <div className="search-block">
                    <img src={`${process.env.PUBLIC_URL}/img/search.svg`} alt="Search"/>
                    <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..."/>
                </div>
            </div>
            <div className="d-flex flex-wrap space-between">
                {renderItems()}
            </div>
        </div>
    );
};
