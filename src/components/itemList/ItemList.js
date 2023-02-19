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
    const collectionRef = collection(db, "productsList")

    useEffect(() => {
        if(categoriaId!=null){
            getDocs(collectionRef)
            .then((response) => {
                const productsCategory = response.docs.filter(category => category.data().category === categoriaId )
                setRenderizar( productsCategory.map( product => <Item key={product.data().id} id= {"idprod" + product.data().id} data={product.data()} />))
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
            <div className="ItemListArticles">{renderizar}</div>
        </div>
    )
}



export default ItemList;