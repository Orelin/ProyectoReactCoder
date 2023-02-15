import "./CartItem.css";

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Card } from "@mui/material";
import Button from '@mui/material/Button'
import {  useCartContext, items } from "../../context/cartContext.js";


const CartItem = (data) => {

    //! Mostrar items del carrito y gasto total
    const { removeItemStore } = useCartContext();
    const { title, image } = data;

    const removeItem = () => {
        removeItemStore()
    }

    return (
        <div className="CartItem">
                <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                sx={{ height: 500 }}
                image={image}
                title={title}/>

            <CardContent>
                <Typography gutterBottom variant="h5" component="div">{title}</Typography>
                <Typography variant="h6" color="text.secondary">1x ${"price"}</Typography>
            </CardContent>

            <Button className= "ButtonBuy" variant="contained" onClick={removeItem} size="large" color="error"> Remove </Button> 
            </Card>
            
        </div>
    )
}



export default CartItem;