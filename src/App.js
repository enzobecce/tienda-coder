import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBarComponent/index';
import { ItemList } from './components/ItemListComponent/index';

function App() {
  const product = {
    id: 1,
    price: 10,
    description: "lorem",
    stock: 0,
  };
  return (
    <div className="App">
      <NavBar />
      <ItemList product= {product} />
    </div>
  );
}

export default App;
