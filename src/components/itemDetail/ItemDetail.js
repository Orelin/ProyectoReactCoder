//Modulos
import { useState } from "react";

//Estilos
import "./ItemDetail.css";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
//Componentes
import ItemCount from "../itemCount/ItemCount";

//Core

const ItemDetail = (props) => {

    const {category, description, price, title, image} = props.data;
    const [ cantidad, setcantidad] = useState(0)

    const getTotal = (total) => {
        setcantidad(total)
    }
    

    return (
        <div className="ItemDetail">
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                sx={{ height: 500 }}
                image={image}
                title={title}/>

            <CardContent>
                <Typography gutterBottom variant="h5" component="div">{title}</Typography>
                <Typography gutterBottom variant="h6" component="div">{category}</Typography>
                <Typography variant="body2" color="text.secondary">{description}</Typography>
                <Typography variant="h6" color="text.secondary">1x ${price}</Typography>
                <Typography variant="h6" color="text.secondary">5x ${price*5}</Typography>
            </CardContent>

            <CardActions>
                <Typography variant="h6" color="text.secondary">Total Actual ${price*cantidad}</Typography>
            </CardActions>
            
            <ItemCount stock= {5} price={price} getTotal={getTotal} />

            </Card>
        </div>
    )
}



export default ItemDetail;