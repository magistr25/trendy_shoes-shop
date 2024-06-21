import React from 'react';
import { Card } from '../components/Card';
import "../index.scss"


export const Home = ({ items, searchValue, onChangeSearchInput, onAddToFavorite, onRemoveFavorite, onAddToCart, isItemAdded, isItemFavorite }) => {
    const filteredItems = items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()));

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
                {filteredItems.map((item) => (
                    <Card
                        key={item.itemId}
                        {...item}
                        onPlus={onAddToCart}
                        onAddToFavorite={onAddToFavorite}
                        onRemoveFavorite={onRemoveFavorite}
                        isAdded={isItemAdded(item.itemId)}
                        isFavorite={isItemFavorite(item.itemId)}
                    />
                ))}
            </div>
        </div>
    );
};
