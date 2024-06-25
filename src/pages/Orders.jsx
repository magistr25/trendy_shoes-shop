import React from "react";
import { Card } from "../components/Card";
import "../index.scss";
import axios from "axios";
import {Link} from "react-router-dom";
import "../index.scss"

export const Orders = ({ onChangeSearchInput, searchValue }) => {
    const [orders, setOrders] = React.useState([]);

    React.useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get('https://6676e5ff145714a1bd731f73.mockapi.io/orders');
                const data = response.data;

                // Обработка данных для извлечения нужной информации
                const processedOrders = data.map(order => {
                    // Фильтруем и собираем товары
                    const items = Object.keys(order)
                        .filter(key => !isNaN(key)) // Фильтруем только числовые ключи
                        .map(key => order[key]); // Преобразуем ключи в массив объектов

                    // Возвращаем объект
                    return {
                        id: order.id,
                        items: items
                    };
                });

                setOrders(processedOrders);
            } catch (error) {
                console.error('Ошибка при получении заказов:', error);
            }
        };

        fetchOrders();
    }, []);

    return (
        <div className="orders content p-40">
            <div className="d-flex align-center justify-between mb-40">
                <h1>Мои заказы</h1>
            </div>
            <div>
                {orders.map(order => (
                    <div key={order.id} className="mb-20">
                        <h2 className="mb-20">Заказ №{order.id}</h2>
                        <h3 style={{color: 'rgb(23, 132, 173)'}}>В обработке</h3>

                        <div className="d-flex flex-wrap">
                            {order.items.map(item => (
                                <Card
                                    key={item.id}
                                    title={item.title}
                                    price={item.price}
                                    imageUrl={item.imageUrl}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <Link to={"/"}>
                <button className="blueButton">
                    <img src={`${process.env.PUBLIC_URL}/img/arrow.svg`} alt="Arrow"/>
                    Вернуться назад
                </button>
            </Link>
        </div>
    );
};
