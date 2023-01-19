//Modulos

import * as React from 'react';
import { Link } from "react-router-dom";
//Estilos
import "./Item.css";
import Button from '@mui/material/Button'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

//Componentes

//Core

const Item = (props) => {

    const {category, description, price, title, id, image} = props.data;

    return (

        


        <div className="Item">

            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                sx={{ height: 500 }}
                image={image}
                title={title}/>

            <CardContent>
                <Typography gutterBottom variant="h5" component="div">{title}</Typography>
                <Typography gutterBottom variant="p" component="div">${price}</Typography>
                <Typography gutterBottom variant="h6" component="div">{category}</Typography>
                <Typography variant="body2" color="text.secondary">{description}</Typography>
            </CardContent>

            <CardActions>
                <Link to={`/producto/${id}`}>
                <Button variant="text">Ver detalles</Button>
                </Link>
            </CardActions>

            </Card>
        </div>
    )
}



export default Item;