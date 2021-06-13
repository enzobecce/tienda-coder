import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBarComponent/index';
import { ItemList } from './components/ItemListComponent/index';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemList />
    </div>
  );
}

export default App;
