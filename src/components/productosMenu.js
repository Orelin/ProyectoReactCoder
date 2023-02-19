import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

export default function BasicMenu() {


  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onMouseOver={handleClick}
      >
        Productos
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Link to={`/categoria/Bebidascalientes`}>
        <MenuItem onClick={handleClose}>Bebidas calientes</MenuItem>
        </Link>
        <Link to={`/categoria/Bebidasfrias`}>
        <MenuItem onClick={handleClose}>Bebidas frías</MenuItem>
        </Link>
        <Link to={`/categoria/Snacks`}>
        <MenuItem onClick={handleClose}>Snacks</MenuItem>
        </Link>
      </Menu>
    </div>
  );
}//! Agregar Links a Categorias