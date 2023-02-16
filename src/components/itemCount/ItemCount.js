//Modulos
import { useState } from "react";
//Estilos
import "./ItemCount.css";
//Componentes
import Button from '@mui/material/Button'

//Core

const ItemCount = (props) => {

    const [cart, setCart] = useState(0)
    const { stock, getTotal } = props
    

    //*Agregar o quitar productos
    const onAdd = () => {
        if (stock <= cart) {
            setCart(cart)
            getTotal(cart)

        }else {
            setCart(cart + 1)
            getTotal(cart + 1)
        }
    }
    
    const onRemove = () => {
        if(cart < 1){
            alert("Cart vacio")
            getTotal(cart)
        }else{
            setCart(cart - 1) 
            getTotal(cart - 1)
        }      
    }
    
    return (
        <div className="ItemCount">
            <div>
                <Button variant="contained" size="small" onClick={onRemove} color="error"> - </Button> 
                <p> x {cart} </p>
                <Button variant="contained" size="small" onClick={onAdd} color="success"> + </Button>
            </div>  
        </div>
    )
}



export default ItemCount;