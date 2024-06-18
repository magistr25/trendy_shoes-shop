import React from "react";
import {Card} from "../components/Card";
import {Link} from "react-router-dom";

export const Favorites = ({
                              favoriteItems,
                              onRemoveFavorite,
                              onAddToFavorite,
                              onAddToCart,
                              isItemFavorite,
                              isItemAdded
                          }) => {
    return (
        <div className="content p-40">
            <div className="d-flex align-center justify-between p-40">
                <h1>Мои закладки</h1>
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
                            isFavorite={isItemFavorite(favoriteItem.id)}
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
