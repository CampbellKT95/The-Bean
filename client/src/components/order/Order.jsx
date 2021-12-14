import "./styles.css";
import React, {useState, useEffect} from "react";
import { menuData } from "../../data/menuData";
import {Link} from "react-router-dom";

const Order = ({orderList, setOrderList, bill, setBill}) => {

    const [orderQuantity, setOrderQuantity] = useState({
        "The Original": 0,
        "Latte": 0,
        "Espresso": 0,
        "Americano": 0,
        "Cheddar Egg on Bagel": 0,
        "Ham & Cheese Croissant": 0,
        "Omelette": 0,
        "Oatmeal": 0,
        "Assorted Donuts": 0,
        "New York Bagels": 0,
        "Ciabatta Bread": 0,
        "Cheddar & Garlic Bread": 0
    })

    const handleClick = (e) => {
        let clickedItem = e.currentTarget.id

        for (let i = 0; i < menuData.length; i++) {
            for (let j = 0; j < menuData[i].length; j++) {
                if (menuData[i][j].id == clickedItem) {

                    let orderedItem = menuData[i][j].name
                    let orderedPrice = menuData[i][j].price

                    setOrderList((orderList) => {
                        return [...orderList, orderedItem]
                    })

                    setBill(bill + orderedPrice)

                    setOrderQuantity({...orderQuantity, [orderedItem]: orderQuantity[orderedItem] += 1});
                }
            }
        }
    }

    useEffect(() => {
        console.log(orderList)
    }, [orderList, orderQuantity]);

    const removeOrderedItem = (e) => {
        const revisedList = orderList.filter((item) => { return item !== e.target.innerText});
        setOrderList(revisedList);
        console.log(e.target)
    }

    const clearOrder = () => {
        setOrderList([]);
        setBill(0);
        setOrderQuantity({
           "The Original": 0,
            "Latte": 0,
            "Espresso": 0,
            "Americano": 0,
            "Cheddar Egg on Bagel": 0,
            "Ham & Cheese Croissant": 0,
            "Omelette": 0,
            "Oatmeal": 0,
            "Assorted Donuts": 0,
            "New York Bagels": 0,
            "Ciabatta Bread": 0,
            "Cheddar & Garlic Bread": 0         
        });
    };

    const [modal, setModal] = useState(false);


    return (<>
        <nav className="order-nav">
            <div className="back-link-position">
                <Link to="/" className="back-link"><h1 className="back-title">Back</h1></Link>
            </div>
            <h1 className="order-title">Order Online</h1>
        </nav>

        <section className="order-container">
            <div className="coffee-order-container">
                <h2 className="order-section-title">Coffee</h2>

                {menuData[0].map((item) => {
                    return <p className="coffee-order" id={item.id} key={item.id} onClick={handleClick}>{item.name} ... ${item.price}</p>
                })}
 
            </div>
            
            <div className="breakfast-order-container">
                <h2 className="order-section-title">Breakfast</h2>
                {menuData[1].map((item) => {
                    return <p className="breakfast-order" id={item.id} key={item.id} onClick={handleClick}>{item.name} ... ${item.price}</p>
                })}
            </div>
            
            <div className="baked-goods-order-container">
                <h2 className="order-section-title">Baked goods</h2>
                {menuData[2].map((item) => {
                    return <p className="baked-goods-order" id={item.id} key={item.id} onClick={handleClick}>{item.name} ... ${item.price}</p>
                })}
            </div>
            <div className="current-order">
                <h4 className="current-order-title">Your Cart: ${bill}</h4>
                <div className="current-order-container">
                    <button className="order-clear" onClick={clearOrder}>Clear</button>
                    <Link to="/stripecontainer"><button className="purchase-btn">Purchase</button></Link>
                </div>
                
                {orderList.map((item) => {
                    return <div className="order-name-number">
                        <p className="current-order-item"
                            onClick={removeOrderedItem}>
                            {item}
                        </p>
                        <p>({orderQuantity[item]})</p>
                    </div>
                })}

            </div>
        </section>
    </>)
}

export default Order;