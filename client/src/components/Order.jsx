import React, {useEffect} from "react";
import { menuData } from "../data/menuData";
import "../styles/order.css";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";


const Order = ({orderList, setOrderList, bill, setBill}) => {


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
            <motion.div className="back-link-position" whileHover={{
                        scale: 1.2
                    }}>
                <Link to="/" className="back-link"><h1 className="back-title">Back</h1></Link>
            </motion.div>
            <div className="current-order">
                <h4 className="current-order-title">Your Cart: ${bill}</h4>
                <div className="current-order-container">
                    <button className="order-clear" onClick={clearOrder}>Clear</button>
                    <Link to="/stripecontainer"><button className="purchase-btn">Purchase</button></Link>
                </div>
                
                {orderList.map((item) => {
                    return <p className="current-order-item">{item}</p>
                })}
            </div>
        </section>
    </>
}

export default Order;