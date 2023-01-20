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
        <Link to={`/categoria/electronics`}>
        <MenuItem onClick={handleClose}>Electronics</MenuItem>
        </Link>
        <Link to={`/categoria/jewelery`}>
        <MenuItem onClick={handleClose}>Jewelery</MenuItem>
        </Link>
        <Link to={`/categoria/men's clothing`}>
        <MenuItem onClick={handleClose}>Men's clothing</MenuItem>
        </Link>
        <Link to={`/categoria/women's clothing`}>
        <MenuItem onClick={handleClose}>Women's clothing</MenuItem>
        </Link>
      </Menu>
    </div>
  );
}//! Agregar Links a Categorias