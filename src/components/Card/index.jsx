import React, {useEffect, useState} from 'react';
import ContentLoader from "react-content-loader"
import styles from './Card.module.scss';

export const Card = ({
                         id,
                         sizes,
                         size,
                         itemId,
                         title,
                         imageUrl,
                         price,
                         onPlus,
                         onAddToFavorite,
                         onRemoveFavorite,
                         isFavorite,
                         isLoading,

                     }) => {

    const [added, setAdded] = useState(false);
    const [favorite, setFavorite] = useState(isFavorite);
    const [activeIndex, setActiveIndex] = useState(null);
     const [selectedSize, setSelectedSize] = useState(null);

    useEffect(() => {
        setAdded(false);
    }, []);

    useEffect(() => {
        setFavorite(isFavorite);
    }, [isFavorite]);


    const onClickPlus = async () => {
        try {
            if (selectedSize) {
                await onPlus({ itemId, title, imageUrl, price, size: selectedSize.size });
                setAdded(true);
                setTimeout(() => {
                    alert("Товар добавлен в корзину");
                    setAdded(false);
                    setActiveIndex(null)


                }, 100);

            } else {
                alert("Пожалуйста, укажите размер");
            }

        } catch (error) {
            console.error('Ошибка при добавлении товара в корзину:', error);
            alert("Произошла ошибка при добавлении товара");
        }

    };


    const onClickFavorite = async () => {
        if (favorite) {
            await onRemoveFavorite({itemId});
            setFavorite(false);
        } else {
            await onAddToFavorite({id, itemId, title, imageUrl, price, sizes});
            setFavorite(true);

        }
    };
    const handleClick = (index) => {
        setActiveIndex(index);
        setSelectedSize(sizes[index]);
    };
    const imgPlus = added ? `${process.env.PUBLIC_URL}/img/btn-checked.svg` : `${process.env.PUBLIC_URL}/img/btn-plus.svg`;
    const favoriteHeart = favorite ? `${process.env.PUBLIC_URL}/img/liked.svg` : `${process.env.PUBLIC_URL}/img/unliked.svg`;


    return (
        <div className={styles.card}>
            {isLoading ? (<ContentLoader
                    speed={2}
                    width={170}
                    height={250}
                    viewBox="0 0 170 265"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                >
                    <rect x="10" y="1" rx="10" ry="10" width="155" height="155"/>
                    <rect x="10" y="167" rx="5" ry="5" width="155" height="15"/>
                    <rect x="10" y="187" rx="5" ry="5" width="100" height="15"/>
                    <rect x="10" y="234" rx="5" ry="5" width="85" height="25"/>
                    <rect x="124" y="230" rx="10" ry="10" width="40" height="32"/>
                </ContentLoader>)
                : (<>
                        {onAddToFavorite && <div className="favorite" onClick={onClickFavorite}>
                            <img src= {favoriteHeart} alt="liked"/>
                        </div>}

                        <img width={133} height={122} src={`${process.env.PUBLIC_URL}${imageUrl}`} alt="shoes"/>

                        {onPlus && sizes.map((size, index) => (
                            <div
                                key={size.size}
                                className={`${styles.sizes} ${!size.available ? styles.disabled : ''} ${index === activeIndex ? styles.active : ''}`}
                                onClick={() => handleClick(index)}
                                size={size.size}
                            >
                                {size.size}
                            </div>
                        ))}

                        <h5>{title}</h5>
                        {size && <div>Размер: {size}</div>}
                        <div className="d-flex justify-between align-center">
                            <div className="d-flex flex-column">
                                <span>Цена: </span>
                                <b>{price} руб.</b>
                            </div>
                            {onPlus && <img
                                className={styles.plus}
                                onClick={onClickPlus}
                                src={imgPlus}
                                alt="+"
                            />}
                        </div>
                    </>
                )}
        </div>
    );
};
