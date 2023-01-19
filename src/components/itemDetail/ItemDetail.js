//Modulos
import { Link } from "react-router-dom";

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

//Core

const ItemDetail = (props) => {

    const {category, description, price, title, id, image} = props.data;




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
            </CardContent>

            <CardActions>
                <Link to={`/producto/${id}`}>
                <Button variant="text">Ver detalles</Button>
                <p>${price}</p>
                </Link>
            </CardActions>
            
            <ItemCount stock= {10} />

            </Card>
        </div>
    )
}



export default ItemDetail;