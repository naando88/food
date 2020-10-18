import React from 'react'
import "./ItemDishes.css"
import {NavLink} from "react-router-dom"

function ItemDishes({image,name,description,price,type,id}) {
    return (
        <div className="tarjeta-dishes">
            <div className="Tarjeta-img">
                <img src={image}/>
            </div>
            <div className="Tarjeta-detalle">
                <h2>{name}</h2>
                <p>Descripcion: {description}</p>                
            </div>
            <div className="Tarjeta-costo">
                <p>Costo:S/.{price} </p>
            </div>
            <div className="Tarjeta-index">
                <p>Tipo:{type} </p>
                <p>N° de seleccion:{id} </p>
                <NavLink  to={`/ListaPlatos/${id}`} >Detalle</NavLink>
            </div>            
        </div>
    )
}
export {ItemDishes} 