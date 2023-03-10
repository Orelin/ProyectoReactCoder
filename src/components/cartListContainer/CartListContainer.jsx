//Modulos
import {  useCartContext } from "../../context/cartContext.js";
import { useState, useEffect } from "react";
import CartItem from "../cartItem/CartItem.jsx";
//Estilos
import "./CartListContainer.css";

//Componentes
//Core

const CartListContainer = () => {

    const { items } = useCartContext();
    const [renderizar, setRenderizar] = useState([])
    useEffect(() => {
        setRenderizar( items.map( product => <CartItem key={product.id} id= {"idprod" + product.id} data={product} />))
    },[items])


    return (
        <div className="CartListContainer">
            {renderizar}
            <div className="InfoBuyCart">
                InfoBuyCart
            </div>
        </div>
    )
}



export default CartListContainer;