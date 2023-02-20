//Modulos
//Estilos
import './Footer.css';

//Componentes
//Core

const Footer = () => {
    return (
        <div className="Footer">
            <footer className="footer">
                <video
                    className="footer_video"
                    muted=""
                    loop=""
                    autoPlay
                    src="//cdn.shopify.com/s/files/1/0526/6905/5172/t/5/assets/footer.mp4?v=29581141968431347981633714450"
                    type="video/mp4"
                ></video>
                <div className="container">
                    <div className="footer_inner">
                        <div className="c-footer">
                            <div className="layout">
                                <div className="layout_item w-50">
                                    <div className="newsletter">
                                        <h3 className="newsletter_title">
                                            The perfect coffee for every moment of the day.
                                        </h3>
                                        <form action="">
                                            <input
                                                type="text"
                                                placeholder="Email Address"
                                            />
                                            <button>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    width="24"
                                                    height="24"
                                                >
                                                    <path
                                                        fill="none"
                                                        d="M0 0h24v24H0z"
                                                    />
                                                    <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
                                                </svg>
                                            </button>
                                        </form>
                                    </div>
                                </div>

                                <div className="layout_item w-25">
                                    <nav className="c-nav-tool">
                                        <h4 className="c-nav-tool_title">Menu</h4>
                                        <ul className="c-nav-tool_list">
                                            <li>
                                                <a
                                                    href="/productos"
                                                    className="c-link"
                                                >
                                                    All Products
                                                </a>
                                            </li>


                                            <li>
                                                <a
                                                    href="/categoria/Bebidascalientes"
                                                    className="c-link"
                                                >
                                                    Drinks
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/categoria/Snacks" className="c-link">
                                                    Snaks
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="/pages/about-us"
                                                    className="c-link"
                                                >
                                                    About Us
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>

                                <div className="layout_item w-25">
                                    <nav className="c-nav-tool">
                                        <h4 className="c-nav-tool_title">
                                            Support
                                        </h4>
                                        <ul className="c-nav-tool_list">
                                            <li className="c-nav-tool_item">
                                                <a
                                                    href="/pages/shipping-returns"
                                                    className="c-link"
                                                >
                                                    Shipping &amp; Returns
                                                </a>
                                            </li>

                                            <li className="c-nav-tool_item">
                                                <a
                                                    href="/pages/help"
                                                    className="c-link"
                                                >
                                                    Help &amp; FAQ
                                                </a>
                                            </li>

                                            <li className="c-nav-tool_item">
                                                <a
                                                    href="/pages/contact"
                                                    className="c-link"
                                                >
                                                    Contact
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer_copyright">
                        <p>&copy; 2023 The Dream Cafe</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
