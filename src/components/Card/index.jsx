import React, { useEffect, useState } from 'react';
import styles from './Card.module.scss';

export const Card = ({ id, itemId, title, imageUrl, price, onPlus, onAddToFavorite, onRemoveFavorite, isAdded, isFavorite }) => {
    const [added, setAdded] = useState(isAdded);
    const [favorite, setFavorite] = useState(isFavorite);

    useEffect(() => {
        setAdded(isAdded);
    }, [isAdded]);

    useEffect(() => {
        setFavorite(isFavorite);
    }, [isFavorite]);

    const onClickPlus = async () => {
        if (!added) {
            await onPlus({ itemId, title, imageUrl, price });
            setAdded(true);
        }
    };

    const onClickFavorite = async () => {
        if (favorite) {
            await onRemoveFavorite({itemId});
            setFavorite(false);
        } else {
            await onAddToFavorite({id, itemId, title, imageUrl, price });
            setFavorite(true);

        }
    };

    const imgPlus = isAdded ? `${process.env.PUBLIC_URL}/img/btn-checked.svg` : `${process.env.PUBLIC_URL}/img/btn-plus.svg`;
    const favoriteHeart = favorite ? `${process.env.PUBLIC_URL}/img/liked.svg` : `${process.env.PUBLIC_URL}/img/unliked.svg`;

    return (
        <div className={styles.card}>
            <div className="favorite" onClick={onClickFavorite}>
                <img src={favoriteHeart} alt="liked" />
            </div>
            <img width={133} height={122} src={imageUrl} alt="shoes" />
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена: </span>
                    <b>{price} руб.</b>
                </div>
                <img
                    className={styles.plus}
                    onClick={onClickPlus}
                    src={imgPlus}
                    alt="+"
                />
            </div>
        </div>
    );
};
