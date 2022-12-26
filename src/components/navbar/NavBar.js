//Modulos
//Estilos
import "./NavBar.css";
import logo from "../assets/logoDream.png";
import CardWidget from "../cardWidget/CardWidget";
//Componentes
//Core

const NavBar = () => {

    return <header className="NavBar">
        <nav className="menu-container">
            {/* burger menu */}
            <input type="checkbox" aria-label="Toggle menu" />
            <span className="burger"></span>
            <span className="burger"></span>
            <span className="burger"></span>
            {/* logo */}
            <a href="#logo" className="menu-logo">
                <img src={logo} alt="LogoWeb"/>
            </a>
            {/* menu items */}
            <div className="menu">
                <ul>
                </ul>
                <ul>
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#products">Products</a>
                    </li>
                    <li>
                        <a href="#constact">Contact</a>
                    </li>
                </ul>
            </div>
            <CardWidget cantidad="5"/>
        </nav>

    </header>
}



export default NavBar;