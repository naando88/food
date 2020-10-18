import axios from "axios";

const URL = "https://5f7f8f88d6aabe00166f073c.mockapi.io/Dishes";

const DishesGet = async () => {
  try {
    let {data}  = await axios.get(URL);
    return data;
  } catch (error) {
    return error;
  }
};

const idDishesGet=async (id)=>{
  try {
    let {data}=await axios.get(`${URL}/${id}`);
    return data;
  } catch (error) {
    return error;
  }
}

const idDishesPost = async (obj) => {
  try{
    let headers = {
      'Content-Type':'application/json'
    }
    let {data} = await axios.post(URL,obj,{headers})
    return data;
  }catch(error){
    return error;
  }
}

const idDishesPut = async (obj) => {
  try{
    let headers = {
      'Content-Type':'application/json'
    }
    let {data} = await axios.put(`${URL}/${obj.id}`,obj,{headers})
    return data;
  }catch(error){
    return error;
  }
}

const idDishesDelete = async (id) => {
  try {
    let {data} = await axios.delete(`${URL}/${id}`);
    return data;
  } catch (error) {
    return error;
  }
}

export { DishesGet,idDishesGet,idDishesPost,idDishesPut,idDishesDelete };
