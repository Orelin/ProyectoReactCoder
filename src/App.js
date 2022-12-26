import './App.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';


function App() {
  return (<div>
    <NavBar/>
    <ItemListContainer greeting="Hola!"/>
    </div>
  )
}

export default App;
