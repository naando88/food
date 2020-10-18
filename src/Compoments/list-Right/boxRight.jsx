import React, { useState, useEffect } from 'react'
import "./boxRight.css"
import {DishesGet} from "../../Service"
import { ItemDishes } from '../ItemDishes';

function BoxRight() {
    const listType = [
        "ENTRADAS",
        "ENSALADAS",
        "SOPAS Y CREMAS",
        "PASTAS Y ARROCES",
        "PESCADOS Y MARISCOS",
        "AVES Y CARNES",
        "POSTRES",
        "BEBIDAS"
    ]; 
    const [dishes, setDishes] = useState([""]);
    let cont=0;
    const [type, setType] = useState(listType[cont]);

    const listService = async () => {
        let listDishesService = await DishesGet();
        setDishes(listDishesService);
        
   
    };

    useEffect(() => {
        listService();
    }, []);
    return (
        <div>
            <div>
            {
                <h2>{type}</h2>
            }
            </div> 
            <div className="caja-list">
                 {
                    dishes.map(
                        ({ dishes_image, dishes_name, dishes_description, dishes_price, dishes_type }, dishes_id) => (
                            <ItemDishes
                            key={dishes_id}
                            image={dishes_image}
                            name={dishes_name}
                            description={dishes_description}
                            price={dishes_price}
                            type={dishes_type}
                            id={dishes_id+1}
                            />
                        )
                    )
                }   

            </div>
            <div className="direcciones">
            <a href="2" className="atras" >
                &#10094;
            </a>
            <a href="3" className="Adelante" >
                &#10095;
            </a>
            </div>
         </div>
    )
}
export {BoxRight}