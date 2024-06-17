import React from 'react';
import styles from './Card.module.scss';
import axios from "axios";


export const Card = ({id, title, imageUrl, price, onPlus, onAddToCart}) => {
    const [isAdded, setIsAdded] = React.useState(false);
    const [isFavorite, setIsFavorite] = React.useState(false);


    const onClickPlus = () => {
        const card = { id, title, imageUrl, price };
        onPlus(card);
    };


    const onClickFavorite = () => {

       setIsFavorite(!isFavorite);
    }


    const imgPlus = isAdded ? `${process.env.PUBLIC_URL}img/btn-checked.svg` :`${process.env.PUBLIC_URL}img/btn-plus.svg`
    const favoriteHeart = isFavorite ? `${process.env.PUBLIC_URL}img/liked.svg` :`${process.env.PUBLIC_URL}img/unliked.svg`
    return (
        <div className={styles.card} >
            <div className="favorite" onClick={onClickFavorite}>
               <img src={favoriteHeart} alt="liked"/>
            </div>
            <img width={133} height={122} src={imageUrl} alt="shoes"/>
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
                <div className={"d-flex flex-column"}>
                    <span>Цена: </span>
                    <b>{price} </b>
                </div>

                <img  className={styles.plus}
                      onClick={onClickPlus}
                      src={imgPlus} alt={"+"}/>


            </div>
        </div>
    )
}
