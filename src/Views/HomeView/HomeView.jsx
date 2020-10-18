import React from 'react'
import "./HomeView.css"
import {BrowserRouter as Router, Route,NavLink, Switch} from "react-router-dom"
import {Ticket,Comments} from "../../Compoments"

function HomeView() {
    return (
    <div>
        <div>
            <NavLink to="/Login">Login</NavLink>
        </div>
        <div className="box-bienvenida">
            <NavLink to="/RegistroCliente" className="box-bienvenida">Bienvenido, actualice sus datos aqui</NavLink>
        </div>
        <div className="box-btn-acceso" >
            <NavLink to="/listaPlatos">Lista de platos</NavLink>
            <NavLink to="/seguimiento">Seguimiento</NavLink>
        </div>
        <Router>
           <div className="container-menu">
            <div className="box-btn-acceso" >
                <NavLink to="/recibo">Recibo</NavLink>
                <NavLink to="/comentarioPeticiones">Comentario/Peticiones</NavLink>
            </div>
            <div className="box-acceso">
                <Switch>
                    <Route  exct path="/recibo" component={Ticket}/>
                    <Route  exct path="/comentarioPeticiones" component={Comments}/>
                </Switch>
            </div>
           </div>
        </Router>
     </div>
    )
}
export {HomeView}
