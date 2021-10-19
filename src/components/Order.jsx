import React, {useState, useEffect} from "react";
import { menuData } from "../data/menuData";
import "../styles/order.css";

import Navbar from "./Navbar";


const Order = () => {

    const [orderList, setOrderList] = useState([]);
    const [bill, setBill] = useState(0)


    const handleClick = (e) => {
        let clickedItem = e.currentTarget.id

        for (let i = 0; i < menuData.length; i++) {
            for (let j = 0; j < menuData[i].length; j++) {
                if (menuData[i][j].id == clickedItem) {

                    let orderedItem = menuData[i][j].name
                    let orderedPrice = menuData[i][j].price

                    console.log(orderedItem, orderedPrice)
                   
                    setOrderList((orderList) => {
                        return [...orderList, orderedItem]
                    })

                    setBill(bill + orderedPrice)

                }
            }
        }
    }

    useEffect(() => {
        console.log(orderList, bill)
    }, [orderList])

    const clearOrder = () => {
        setOrderList([]);
        setBill(0);
    }

    return <>
        <nav className="order-nav">
            <h1 className="order-title">Order Online</h1>
        </nav>

        <section className="order-container">
            <div className="coffee-order-container">
                <h2>Coffee</h2>
                {menuData[0].map((item) => {
                    return <p className="coffee-order" id={item.id} key={item.id} onClick={handleClick}>{item.name} (${item.price})</p>
                })}
            </div>
            
            <div className="breakfast-order-container">
                <h2>Breakfast</h2>
                {menuData[1].map((item) => {
                    return <p className="breakfast-order" id={item.id} key={item.id} onClick={handleClick}>{item.name} (${item.price})</p>
                })}
            </div>
            
            <div className="baked-goods-order-container">
                <h2>Baked goods</h2>
                {menuData[2].map((item) => {
                    return <p className="baked-goods-order" id={item.id} key={item.id} onClick={handleClick}>{item.name} (${item.price})</p>
                })}
            </div>

            <div className="current-order">
                <h4 className="current-order-title">Your Cart: ${bill}</h4>
                <button className="order-clear" onClick={clearOrder}>Clear</button>

                {orderList.map((item) => {
                    return <p className="current-order-item">{item}</p>
                })}
            </div>
        </section>
        <footer className="order-nav-bottom">
            <h1 className="order-title">Back</h1>
        </footer>
    </>
}

export default Order;