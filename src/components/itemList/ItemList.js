//Modulos
import { useState, useEffect } from "react"

//Estilos
import "./ItemList.css";
//Componentes
import Item from "../item/Item";
//Core

const ItemList = () => {

    const [renderizar, setRenderizar] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/?limit=5')
        .then(res=>res.json())
        .then(json=> setRenderizar( json.map( product => <Item key={product.id} id= {"idprod" + product.id} data={product} />)))
    },[])



    return (
        <div className="ItemList">
            <p>Item List</p>
            {renderizar}
        </div>
    )
}



export default ItemList;