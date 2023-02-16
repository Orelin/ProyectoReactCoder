import "./CartItem.css";

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Card } from "@mui/material";
import Button from '@mui/material/Button'
import {  useCartContext } from "../../context/cartContext.js";


const CartItem = (data) => {

    //! Mostrar items del carrito y gasto total
    const { removeItemStore } = useCartContext();
    const { title, image, price, cantidad, id } = data.data;

    const removeItem = () => {
        removeItemStore(id)
    }

    return (
        <div className="CartItem">
            <Card sx={{ maxWidth: 345 }} className="CartItemCard">
                <CardMedia
                className= "CartItemImg"
                sx={{ backgroundSize: "contain" }}
                image={image}
                title={title}
                />

                <CardContent className= "CartItemInfo">
                    <Typography gutterBottom variant="h5" component="div">{title}</Typography>
                    <Typography variant="h6" color="text.secondary"> $ {cantidad*price} </Typography>
                </CardContent>

            <Button className= "ButtonDelete" variant="text" onClick={removeItem} size="medium" color="error"> Remove product </Button> 
            </Card>
        </div>
    )
}



export default CartItem;