import React from "react";
import "../styles/menu.css"

const Menu = () => {

    //have image on one side, menu items on another? And flip sides each section? (will need to do media query)

    //add background color pattern for this section

    //add a thicker black border around text

    return (
        <section className="menu">
            <div>
                <img src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80" alt="coffee-table" className="coffee-menu-img"/> 
                <article className="menu-container">
                    <h2 className="menu-title">Coffee</h2>
                    <p className="menu-item">The Original </p>
                    <p className="menu-item">Latte</p>
                    <p className="menu-item">Espresso</p>
                    <p className="menu-item">Americano</p>
                </article>
            </div>
            <div>
                <img src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="breakfast-img" className="breakfast-menu-img" />
                <article className="menu-container">
                    <h2 className="menu-title">Breakfast</h2>
                    <p className="menu-item">Cheddar Egg On Bagel</p>
                    <p className="menu-item">Ham & Cheese Croissant</p>
                    <p className="menu-item">Omelette</p>
                    <p className="menu-item">Oatmeal</p>
                </article>

            </div>
            <div>
                <img src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=780&q=80" alt="baked-goods-img" className="baked-menu-img" />
                <article className="menu-container">
                    <h2 className="menu-title">Baked Goods</h2>
                    <p className="menu-item">Assorted Donuts</p>
                    <p className="menu-item">New York Bagels</p>
                    <p className="menu-item">Ciabatta Bread</p>
                    <p className="menu-item">Cheddar & Garlic Bread</p>
                </article>
            </div>
        </section>
    )
}

export default Menu;