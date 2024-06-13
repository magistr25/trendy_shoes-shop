import React from 'react';
import {Card} from "./components/Card";
import {Header} from "./components/Header";
import {Draver} from "./components/Draver";


function App() {
    return (
        <div className="wrapper clear">

            <Draver />
            <Header />

            <div className="d-flex justify-between align-center p-40 ">
                <img className="br-20" src={`${process.env.PUBLIC_URL}img/banner.png`}
                     alt="" width={1000} height={500}/>
            </div>
            <div className="content p-40">
                <div className="d-flex justify-between align-center mb-40">
                    <h1>Все кроссовки</h1>
                    <div className="search-block d-flex">
                        <img src={`${process.env.PUBLIC_URL}img/search.svg`} alt="search" width={18} height={18}/>
                        <input placeholder={"Поиск..."}/>
                    </div>
                </div>

                <div className="d-flex">
                    <Card />
                    <Card />

                </div>
            </div>
        </div>
    );
}

export default App;
