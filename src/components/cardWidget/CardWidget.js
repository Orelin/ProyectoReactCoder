
import "./CardWidget.css";

import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { useCartContext } from "../../context/cartContext";


const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px'
    },
}));



const CardWidget = () => {

    //!Usar CartContext para mostrar cantidad carrito
    const { itemsNumber } = useCartContext();

    return (
        <IconButton aria-label="cart">
            <StyledBadge badgeContent={itemsNumber === "0" ? "" : <p>{itemsNumber}</p>} color="secondary">
                <ShoppingCartIcon />
            </StyledBadge>
        </IconButton>
    );
}



export default CardWidget;