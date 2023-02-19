//Modulos
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";

//Estilos
import "./ItemList.css";
//Componentes
import Item from "../item/Item";
//Core

//firestore db
import { db } from "../services/firebaseConfig";
import { collection, getDocs} from "firebase/firestore"

const ItemList = () => {
    const [renderizar, setRenderizar] = useState([])
    const {categoriaId} = useParams();
    console.log(categoriaId);


    
    useEffect(() => {
        const collectionRef = collection(db, "productsList")
        if(categoriaId!=null){
            getDocs(collectionRef)
                .then((response) => {
                    setRenderizar( response.docs.map( product => <Item key={product.data().id} id= {"idprod" + product.data().id} data={product.data()} />))
                })
        }else{
            getDocs(collectionRef)
                .then((response) => {
                    setRenderizar( response.docs.map( product => <Item key={product.data().id} id= {"idprod" + product.data().id} data={product.data()} />))
            })
        }
    },[categoriaId])
        
    return (
        <div className="ItemList">
            <h2>{categoriaId}</h2>
            <div className="ItemListArticles">{renderizar}</div>
        </div>
    )
}



export default ItemList;