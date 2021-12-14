import "./styles.css";
import React, {useState, useEffect} from "react";
import { menuData } from "../../data/menuData";
import {Link} from "react-router-dom";

const Order = ({orderList, setOrderList, bill, setBill}) => {

    const [orderQuantity, setOrderQuantity] = useState({
        "original": 0,
        "latte": 0,
        "espresso": 0,
        "americano": 0,
        "cheddarEgg": 0,
        "hamCheese": 0,
        "omlette": 0,
        "oatmeal": 0,
        "donuts": 0,
        "bagels": 0,
        "ciabatta": 0,
        "cheddarGarlic": 0
    })

    const handleClick = (e) => {
        let clickedItem = e.currentTarget.id

        for (let i = 0; i < menuData.length; i++) {
            for (let j = 0; j < menuData[i].length; j++) {
                if (menuData[i][j].id == clickedItem) {

                    let orderedItem = menuData[i][j].name
                    let orderedPrice = menuData[i][j].price

                    let orderedNumber = menuData[i][j].state

                    setOrderList((orderList) => {
                        return [...orderList, orderedItem]
                    })

                    setBill(bill + orderedPrice)

                    setOrderQuantity({...orderQuantity, [orderedNumber]: orderQuantity.orderedNumber++});
                }
            }
        }
    }

    useEffect(() => {
        console.log(orderList, orderQuantity)
    }, [orderQuantity]);

    const removeOrderedItem = (e) => {
        const revisedList = orderList.filter((item) => { return item !== e.target.innerText
        });
        setOrderList(revisedList);
    }

    const clearOrder = () => {
        setOrderList([]);
        setBill(0);
    }

    const [modal, setModal] = useState(false);


    return <>
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
                    return <p className="current-order-item" id={item.id}
                        onClick={removeOrderedItem}>{item} {orderQuantity[item.state]}</p>
                })}

            </div>
        </section>
    </>
}

export default Order;