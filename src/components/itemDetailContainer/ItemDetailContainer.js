//Modulos
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../services/firebaseConfig";
import { collection, getDocs} from "firebase/firestore"
//Estilos
import "./ItemDetailContainer.css";

//Componentes
import ItemDetail from "../itemDetail/ItemDetail";
//Core

const ItemDetailContainer = () => {

    const [renderizar, setRenderizar] = useState([])
    const { productoId } = useParams()
    
    useEffect(() => {
        const collectionRef = collection(db, "productsList")
        getDocs(collectionRef)
        .then((response) => {
            const productById = response.docs.filter(category => category.data().id === parseInt(productoId))
            setRenderizar( productById.map( product => <ItemDetail key={product.data().id} id= {"idprod" + product.data().id} data={product.data()} />))
            })
    },[productoId])


    return (
        <div className="ItemDetailContainer">
                {renderizar}
        </div>
    )
}



export default ItemDetailContainer;