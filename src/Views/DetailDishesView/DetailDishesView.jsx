import React, {useState ,useEffect} from 'react'
import {idDishesGet,idDishesPost,idDishesPut,idDishesDelete } from "../../Service"
import {NavLink} from "react-router-dom"
import "./DetailDishesView.css"

function DetailDishesView(props) {
    const ID=props.match.params.id;
    const [idDishes, setIdDishes]= useState({
        dishes_id:ID,
        dishes_image: '',
        dishes_type: '',
        dishes_name: '',
        dishes_description: '',
        dishes_price: 0,
    });
    
    const idService=async ()=>{
        let dishesID = await idDishesGet(ID);
        setIdDishes(dishesID);
    };

    useEffect(()=>{
        idService()
        console.log("segundo obj",idDishes);
    },[]);
    const choice = (e) => {
        setIdDishes({
            ...idDishes,
          [e.target.name]: e.target.value,
        })
        
        console.log("segu obj",idDishes);
      };

      const addIdDishes = (e) => {
        e.preventDefault();
        // editarPlato(value);
        // return history.push('/platos');
      };

      const upDataIdDishes = (e) => {
        e.preventDefault();
        // editarPlato(value);
        // return history.push('/platos');
      };

      const deleteIdDishes = (e) => {
        // e.preventDefault();
        // editarPlato(value);
        // return history.push('/platos');
      };

    return (
        <>
            <div>
                <NavLink to="/listaPlatos">Regresar</NavLink>
            </div> 
            <form id="formulario" >
            <div className="box-detalle">
                <div className="box-image">
                    <label>numero de collecion:</label>
                    <input type="number" name="dishes_id" onChange={(e) => {choice(e)}} value= {idDishes.dishes_id} />
                    <label>link de la imagen:</label>                    
                    <input type="text" name="dishes_image" onChange={(e) => {choice(e)}} value={idDishes.dishes_image}/>
                </div>
                <div className="box-tarjeta">
                    <label>Tipo de entrada:</label>
                    <input type="text" name="dishes_type" onChange={(e) => {choice(e)}} value={idDishes.dishes_type}/> 
                    <div className="box-description">
                        <label>Nombre del plato: </label>
                        <input type="text" name="dishes_name" onChange={(e) => {choice(e)}} value= {idDishes.dishes_name}/>
                        <label>Descripcion: </label>
                        <input type="text" name="dishes_description" onChange={(e) => {choice(e)}} value={idDishes.dishes_description}/>
                        <label>Costo: S/.</label>
                        <input type="text" name="dishes_price" onChange={(e) => {choice(e)}} value= {idDishes.dishes_price} />
                    </div>
                    <div className="box-btn-item">
                        <button>Crear</button>
                        <button>Actualizar</button>
                        <button>Eliminar</button>
                    </div>
                </div>  
            </div>          
            </form> 
        </>
    )
}
export {DetailDishesView} 