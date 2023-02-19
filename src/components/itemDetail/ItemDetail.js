//Modulos
import { useState } from "react";

//Estilos
import "./ItemDetail.css";
import Button from '@mui/material/Button'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
//Componentes
import ItemCount from "../itemCount/ItemCount";
import {  useCartContext } from "../../context/cartContext.js";

//Core

const ItemDetail = (props) => {

    const { id, category, description, price, title, img} = props.data;
    const [ cantidad, setcantidad] = useState(0);
    const { addItemStore } = useCartContext();


    const getTotal = (total) => { //ItemCount cart  -> cantidad
    setcantidad(total)
    }

    const onAdd = () => {
        if (cantidad > 0) {
            const product = {
                id,
                category,
                price,
                title,
                cantidad,
                img
            }
            addItemStore(product)
        }
    }



    return (
        <div className="ItemDetail">
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                sx={{ height: 500 }}
                image={img}
                title={title}/>

            <CardContent>
                <Typography gutterBottom variant="h5" component="div">{title}</Typography>
                <Typography gutterBottom variant="h6" component="div">{category}</Typography>
                <Typography variant="body2" color="text.secondary">{description}</Typography>
                <Typography variant="h6" color="text.secondary">1x ${price}</Typography>
                <Typography variant="h6" color="text.secondary">5x ${price*5}</Typography>
            </CardContent>
            <ItemCount stock= {5} getTotal={getTotal} />

            <CardActions className="CardActions">
                <Typography variant="h6" color="text.secondary">Total Actual $ {price*cantidad}</Typography>
                <Button className= "ButtonBuy" variant="contained" size="large" onClick={onAdd} color="success"> Buy Now </Button>   
            </CardActions>
            </Card>
        </div>
    )
}



export default ItemDetail;