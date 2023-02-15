//Modulos
import { Link } from "react-router-dom";
//Estilos
import "./NavBar.css";
import logo from "../assets/logoDream.png";
import CardWidget from "../cardWidget/CardWidget";
import Button from '@mui/material/Button'


//Componentes
import BasicMenu from "../productosMenu";
//Core

const NavBar = () => {





    return (
        <header className="NavBar">
            <nav className="menu-container">
                <Link to="/" className="menu-logo">
                    <img src={logo} alt="LogoWeb"/>
                </Link>
                {/* menu items */}
                <div className="menu">
                    <ul>
                    </ul>
                    <ul>
                        <li>
                            <Link to="/">
                            <Button variant="text" color="primary">Home</Button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/productos">
                            <BasicMenu/>
                            </Link>
                        </li>
                        <li>
                            <Link to="/contacto">
                            <Button variant="text" color="primary">Contacto</Button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/cart">
                            <Button variant="text" color="primary">Cart!</Button>
                            </Link>
                        </li>
                    </ul>
                </div>
                <CardWidget cantidad="7"/>
            </nav>
        </header>
    )
}



export default NavBar;