//Modulos
import { useState } from "react";
import Button from '@mui/material/Button'

//Estilos
import "./ItemCount.css";
//Componentes
//Core

const ItemCount = (props) => {

    const [cart, setCart] = useState(0)

    //*Agregar o quitar productos
    const  onAdd = () => {
        props.stock <= cart ? console.log("No hay stock") : setCart(cart + 1)
    }

    const onRemove = () => {
        cart === 0 ? console.log("Cart vacio") : setCart(cart - 1)
    }

    const addCart = () => {
        console.log(`Agregando al carrito`)
    }

    return (
        <div className="ItemCount">
            <Button variant="contained" size="small" onClick={onRemove} color="error"> - </Button> 
            <Button variant="contained" size="small" onClick={onAdd} color="success"> + {cart} </Button>    
            <Button variant="contained" size="small" onClick={addCart} color="success"> Comprar </Button>       
        </div>
    )
}



export default ItemCount;