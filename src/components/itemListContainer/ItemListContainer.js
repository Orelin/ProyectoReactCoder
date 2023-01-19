//Modulos
//Estilos
import "./ItemListContainer.css";
//Componentes
import ItemList from "../itemList/ItemList";
//Core

const ItemListContainer = (props) => {




    return (
        <div className="ItemListContainer">
        <p>Item Container</p>
        <ItemList/>
        </div>
    )
}



export default ItemListContainer;