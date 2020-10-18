import React from 'react'
import {NavLink} from "react-router-dom"
import {Login} from "../../Compoments"

function LoginView() {
    return (
        <>
            <NavLink to="/">Regresar</NavLink>
            <Login/>
        </>
    )
}
export {LoginView}