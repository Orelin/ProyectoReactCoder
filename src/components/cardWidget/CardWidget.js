 //Modulos
//Estilos
import "./CardWidget.css";
//Componentes
//Core

const CardWidget = (props) => {

    //!Usar CartContext para mostrar cantidad carrito


    return (
        <div className= "cardCart">
            <span className="material-symbols-rounded">shopping_cart</span>
            {props.cantidad === "0" ? "" : <p>{props.cantidad}</p>}
        </div>
    )
}



export default CardWidget;