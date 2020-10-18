import React from 'react'

function CustomerRecord() {
    return (
        <>
            <form>
                <input type="text" placeholder="Nombre"/>
                <input type="text" placeholder="DNI"/>
                <button>Actualizar</button>
            </form>
        </>
    )
}
export {CustomerRecord}