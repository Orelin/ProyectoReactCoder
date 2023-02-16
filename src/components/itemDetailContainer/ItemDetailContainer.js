//Modulos
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//Estilos
import "./ItemDetailContainer.css";

//Componentes
import ItemDetail from "../itemDetail/ItemDetail";
//Core

const ItemDetailContainer = () => {

    const [renderizar, setRenderizar] = useState([])
    const { productoId } = useParams()


    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${productoId}`)
        .then(res=>res.json())
        .then(product=> setRenderizar( <ItemDetail key={product.id} id= {"idprod" + product.id} data={product}/> ))
    },[productoId])



    

    return (
        <div className="ItemDetailContainer">
                {renderizar}
        </div>
    )
}



export default ItemDetailContainer;