import React from "react";
import { Card } from "../components/Card";

export const Favorites = ({
                              favoriteItems,
                              cartItems,
                              onRemoveFavorite,
                              onAddToFavorite,
                              onAddToCart,
                              isItemFavorite,
                              isItemAdded
                          }) => {
    return (
        <div className="content p-40">
            <div className="d-flex align-center justify-between mb-40">
                <h1>Мои закладки</h1>
            </div>
            <div className="d-flex flex-wrap justify-start">
                {favoriteItems.map((favoriteItem) => (
                    <Card
                        key={favoriteItem.id}
                        {...favoriteItem}
                        onRemoveFavorite={onRemoveFavorite}
                        onAddToFavorite={onAddToFavorite}
                        onPlus={onAddToCart}
                        isFavorite={isItemFavorite(favoriteItem.id)}
                        isAdded={isItemAdded(favoriteItem.id)}
                    />
                ))}
            </div>
        </div>
    );
};
