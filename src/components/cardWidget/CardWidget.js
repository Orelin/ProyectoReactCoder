 //Modulos
import { useCartContext } from "../../context/cartContext";
//Estilos
import "./CardWidget.css";
//Componentes
//Core

const CardWidget = () => {

    //!Usar CartContext para mostrar cantidad carrito
    const { itemsNumber } = useCartContext();

    return (
        <div className= "cardCart">
            <span className="material-symbols-rounded">shopping_cart</span>
            {itemsNumber === "0" ? "" : <p>{itemsNumber}</p>}
        </div>
    )
}



export default CardWidget;