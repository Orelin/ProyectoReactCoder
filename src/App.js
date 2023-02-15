//Modulos
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Estilos
import './App.css';
//Componentes
import NavBar from './components/navbar/NavBar';
import Home from './components/home/Home';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import AboutUs from './components/aboutUs/AboutUs';
import Footer from './components/footer/Footer';
//import CartListContainer from './components/cartListContainer/CartListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import CartListContainer from './components/cartListContainer/CartListContainer';
//Core

function App() {



  return (
    <div>
      <BrowserRouter>
        <NavBar/>

        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/productos' element={<ItemListContainer/>}/>
          <Route exact path='/producto/:productoId' element={<ItemDetailContainer/>}/>
          <Route exact path='/categoria/:categoriaId' element={<ItemListContainer/>}/>
          <Route exact path='/cart/' element={<CartListContainer/>}/>
          <Route exact path='/contacto' element={<AboutUs/>}/>
        </Routes>

        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App;
