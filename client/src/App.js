import "./app.css";

import React, {useState} from "react";
import Navbar from "./components/navbar/Navbar";
import Menu from "./components/menu/Menu";
import Reviews from "./components/reviews/expReviews";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Order from "./components/order/Order";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import StripeContainer from "./components/StripeContainer";


function App() {

    const [orderList, setOrderList] = useState([]);
    const [bill, setBill] = useState(0)

  return (
    <Router >
      <div>
        <Switch>
        
          <Route exact path="/">
            <Navbar />
            <Menu />
            <Reviews />
            <About />
            <Contact />
          </Route>
          <Route path="/order">
            <Order orderList={orderList} setOrderList={setOrderList} bill={bill} setBill={setBill}/>
          </Route>
          <Route path="/stripecontainer">
            <StripeContainer orderList={orderList} bill={bill} />
          </Route>

        </Switch>
      </div>
    </Router >

  );
}

export default App;
