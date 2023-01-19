 //Modulos
//Estilos
import "./CardWidget.css";
//Componentes
//Core

const CardWidget = (props) => {


    return (
        <div className= "cardCart">
            <span className="material-symbols-rounded">shopping_cart</span>
            <p>{props.cantidad}</p>
        </div>
    )
}



export default CardWidget;