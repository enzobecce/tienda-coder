import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBarComponent/index';
import { ItemListContainer } from './components/ItemListContainer/index';
import { ItemDetail } from './components/ItemDetailContainer'

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemDetail />
      <ItemListContainer />
    </div>
  );
}

export default App;
