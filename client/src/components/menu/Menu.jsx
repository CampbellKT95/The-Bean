import "./styles.css";
import React, { useEffect } from "react";
import {menuData} from "../../data/menuData";
import "aos/dist/aos.css";
import Aos from "aos";

const Menu = () => {

    useEffect(() => {
        Aos.init({duration: 1000});
    }, [])

    return (
        <section className="menu-exp-container">
            <div className="exp-menu">
                <div className="food-container">
                    <h2 className="exp-menu-title">Coffee</h2>
                    
                    {menuData[0].map((item) => {
                            return (<div className="exp-container">
                                <h3 className="exp-menu-item">{item.name}</h3>
                                <div className="exp-desc-price">
                                    <p className="exp-item-description">{item.description}</p>
                                    <p className="exp-price">{item.price}</p>
                                </div>
                            </div>
                            )})}
                </div>
                <div className="food-container">
                        <h2 className="exp-menu-title">Breakfast</h2>

                        {menuData[1].map((item) => {
                            return (<div className="exp-container">
                            <h3 className="exp-menu-item">{item.name}</h3>
                                <div className="exp-desc-price">
                                    <p className="exp-item-description">{item.description}</p>
                                    <p className="exp-price">{item.price}</p>
                                </div>
                            </div>
                            )
                        })}                    
                </div>
                <div className="food-container">
                    <h2 className="exp-menu-title">Baked Goods</h2>

                    {menuData[2].map((item) => {
                            return (<div className="exp-container">
                            <h3 className="exp-menu-item">{item.name}</h3>
                            <div className="exp-desc-price">
                                <p className="exp-item-description">{item.description}</p>
                                <p className="exp-price">{item.price}</p>
                            </div>
                        </div>
                        )
                    })}
                    
                </div>
            </div>
            {/* <div className="exp-img">
                <div>
                    <img src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80" alt="coffee-table" className=""  data-aos="fade-right" /> 
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="breakfast-img" className=""  data-aos="fade-left"/>
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=780&q=80" alt="baked-goods-img" className=""  data-aos="fade-right"/>
                </div>
            </div> */}
        </section>




        // <section className="menu" id="Menu">
        //     <div className="menu-grid-setup">
                // <img src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80" alt="coffee-table" className="coffee-menu-img"  data-aos="fade-right" /> 
        //         <article data-aos="fade-left" className="menu-container coffee-menu">

        //             <h2 className="menu-title">Coffee</h2>
                    
        //             {menuData[0].map((item) => {
        //                 return <p className="menu-item">{item.name}</p>
        //             })}
                
        //         </article>
        //     </div>
        //     <div className="menu-grid-setup">
                // <img src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="breakfast-img" className="breakfast-menu-img"  data-aos="fade-left"/>


        //             <article data-aos="fade-right" className="menu-container breakfast-menu">
                        // <h2 className="menu-title">Breakfast</h2>

                        // {menuData[1].map((item) => {
                        //     return <p className="menu-item">{item.name}</p>
                        // })}

        //             </article>

        //     </div>
        //     <div className="menu-grid-setup">
                // <img src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=780&q=80" alt="baked-goods-img" className="baked-menu-img"  data-aos="fade-right"/>
        //         <article data-aos="fade-left" className="menu-container baked-menu">
                    // <h2 className="menu-title">Baked Goods</h2>

                    // {menuData[2].map((item) => {
                    //     return <p className="menu-item">{item.name}</p>
                    // })}

        //         </article>
        //     </div>
        // </section>
    )
}

export default Menu;