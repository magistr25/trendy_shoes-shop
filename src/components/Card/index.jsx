import React from 'react';
import styles from './Card.module.scss';

export const Card = ({title, imageUrl, price}) => {
    const [isAdded, setIsAdded] = React.useState(false);
    const onClickPlus = () => {
         setIsAdded(!isAdded);
    }
    const imgPlus = isAdded ? `${process.env.PUBLIC_URL}img/btn-checked.svg` :`${process.env.PUBLIC_URL}img/btn-plus.svg`
    return (
        <div className={styles.card}>
            <div className="favorite">
                <img src={`${process.env.PUBLIC_URL}/img/unliked.svg`} alt="Unliked"/>
            </div>
            <img width={133} height={122} src= {imageUrl} alt="shoes"/>
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
                <div className={"d-flex flex-column"}>
                    <span>Цена: </span>
                    <b>{price} </b>
                </div>

                <img  className={styles.plus} onClick={onClickPlus} src={imgPlus} alt={"+"}/>


            </div>
        </div>
    )
}
