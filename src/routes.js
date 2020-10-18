import React from 'react'
import {Route} from "react-router-dom"
import {HomeView, LoginView,ListDishesView,CustomerRecordView,TrackingView,DetailDishesView} from "./Views"

export default function Routes() {
    return (
        <>
            <Route exact path="/" component={HomeView}/>
            <Route exact path="/login" component={LoginView}/>
            <Route exact path="/registroCliente" component={CustomerRecordView}/>
            <Route exact path="/ListaPlatos" component={ListDishesView}/>
            <Route exact path="/ListaPlatos/:id" component={DetailDishesView}/>
            <Route exact path="/seguimiento" component={TrackingView}/>
        </>
    )
}
