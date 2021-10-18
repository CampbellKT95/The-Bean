import React, {useState} from "react";
import { menuData } from "../data/menuData";
import "../styles/order.css";

//

//will need to use React Router to set up this page for when the order btn is clicked ... for now, just add it to bottom of page for testing purposes


const Order = () => {

    const [orderList, setOrderList] = useState([]);

    return <>
        <h1>Order Section</h1>
    </>
}

export default Order;