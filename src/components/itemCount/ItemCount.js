//Modulos
import { useState } from "react";
import Button from '@mui/material/Button'
//Estilos
import "./ItemCount.css";
//Componentes
//Core

const ItemCount = (props) => {

    const [cart, setCart] = useState(0)
    const { stock, getTotal } = props

    //*Agregar o quitar productos
    const  onAdd = () => {
        stock <= cart ? console.log("No hay stock") : setCart(cart + 1)
        getTotal(cart + 1)
    }
    
    const onRemove = () => {
        cart === 0 ? console.log("Cart vacio") : setCart(cart - 1)
        getTotal(cart - 1)

    }

    const addCart = () => {
        console.log(`Agregando al carrito ${cart} valor ${cart}`)
    }
    
    return (
        <div className="ItemCount">
            <div>
                <Button variant="contained" size="small" onClick={onRemove} color="error"> - </Button> 
                <p> x {cart} </p>
                <Button variant="contained" size="small" onClick={onAdd} color="success"> + </Button>
            </div>
            <div>
                <Button className= "ButtonBuy" variant="contained" size="large" onClick={addCart} color="success"> Buy Now </Button>  
            </div>     
        </div>
    )
}



export default ItemCount;