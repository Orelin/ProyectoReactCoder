//Modulos
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";

//Estilos
import "./ItemList.css";
//Componentes
import Item from "../item/Item";
//Core

const ItemList = () => {

    const [renderizar, setRenderizar] = useState([])
    const {categoriaId} = useParams();
    
    useEffect(() => {
        
        if(categoriaId!=null) {
        fetch(`https://fakestoreapi.com/products/category/${categoriaId}`)
        .then(res=>res.json())
        .then(json=> setRenderizar( json.map( product => <Item key={product.id} id= {"idprod" + product.id} data={product} />)))
    }else {
        fetch('https://fakestoreapi.com/products/?limit=18')
        .then(res=>res.json())
        .then(json=> setRenderizar( json.map( product => <Item key={product.id} id= {"idprod" + product.id} data={product} />)))
    }},[categoriaId])
    
    return (
        <div className="ItemList">
            <h2>{categoriaId}</h2>
            <div className="ItemListArticles">{renderizar}</div>
        </div>
    )
}



export default ItemList;