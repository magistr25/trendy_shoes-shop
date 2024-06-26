import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Card} from '../components/Card';
import '../index.scss';
import ContentLoader from "react-content-loader";

export const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
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
                setIsLoading(false); // Устанавливаем состояние загрузки в false после получения данных

            } catch (error) {
                console.error('Ошибка при получении заказов:', error);
                setIsLoading(false); // В случае ошибки также завершаем загрузку
            }
        };

        fetchOrders();
    }, []);

    return (
        <div className="orders content p-40">
            <div className="d-flex align-center justify-between mb-40">
                <h1>Мои заказы</h1>
            </div>
            {isLoading ? (
                <>
                    <p>Загрузка...</p>
                    <ContentLoader
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
                    </ContentLoader>
                </>
            ) : (
                <div>
                    {orders.length > 0 ? (
                        orders.map(order => (
                            <div key={order.id} className="mb-20">
                                <h2 className="mb-20">Заказ №{order.id}</h2>
                                <h3 style={{color: 'rgb(23, 132, 173)'}}>В обработке</h3>

                                <div className="d-flex flex-wrap">
                                    {order.items.map(item => (
                                        <Card
                                            key={item.id}
                                            title={item.title}
                                            price={item.price}
                                            size={item.size}
                                            imageUrl={item.imageUrl}
                                        />
                                    ))}
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="favorites">
                            <h2 className="d-flex align-center justify-between p-40">У вас ещё нет заказов... 😢</h2>
                        </div>
                    )}
                </div>
            )}
            <Link to="/trendy_shoes-shop/">
                <button className="blueButton d-block mt-20">
                    <img src={`${process.env.PUBLIC_URL}/img/arrow.svg`} alt="Arrow"/>
                    Вернуться назад
                </button>
            </Link>
        </div>
    );
};
