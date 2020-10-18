import React from 'react'
import {ListDishes} from "../../Compoments"
import {NavLink} from "react-router-dom"

function ListDishesView() {
    return (
    <div>
        <NavLink to="/">Regresar</NavLink>
        <ListDishes/>
    </div>
    )
}
export {ListDishesView}