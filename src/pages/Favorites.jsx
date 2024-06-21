import React from "react";
import {Card} from "../components/Card";
import {Link} from "react-router-dom";
import "../index.scss"

export const Favorites = ({
                              favoriteItems,
                              onRemoveFavorite,
                              onAddToFavorite,
                              onAddToCart,
                              onRemoveToCart,
                              isItemFavorite,
                              isItemAdded,
                              onChangeSearchInput,
                              searchValue

                          }) => {

    return (
        <div className="content p-40">
            <div className="d-flex align-center justify-between p-40">
                <h1>Мои закладки</h1>
                <div className="search-block">
                    <img src={`${process.env.PUBLIC_URL}/img/search.svg`} alt="Search"/>
                    <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..."/>
                </div>
            </div>
            <div className="d-flex flex-wrap justify-start">
                {favoriteItems.length > 0
                    ? favoriteItems.map((favoriteItem) => (
                        <Card
                            key={favoriteItem.id}
                            {...favoriteItem}
                            onRemoveFavorite={onRemoveFavorite}
                            onAddToFavorite={onAddToFavorite}
                            onPlus={onAddToCart}

                            onRemoveToCart={onRemoveToCart}
                            isFavorite={isItemFavorite(favoriteItem.itemId)}
                            isAdded={isItemAdded(favoriteItem.id)}
                        />))
                    : (<div className="favorites"><h2 className="d-flex align-center justify-between p-40">У вас ещё нет товаров в
                        закладках... 😢</h2>
                        <Link to={"/"}>
                            <button className="blueButton">
                            <img src={`${process.env.PUBLIC_URL}/img/arrow.svg`} alt="Arrow"/>
                                Вернуться назад
                            </button>
                        </Link>
                    </div>)

                }
            </div>
        </div>
    );
};
