import React from 'react'
import {NavLink} from "react-router-dom"
import {CustomerRecord} from "../../Compoments" 

function CustomerRecordView() {
    return (
      <>
        <NavLink to="/">Regresar</NavLink>
        <CustomerRecord/>
       
      </>
    )
}
export {CustomerRecordView}