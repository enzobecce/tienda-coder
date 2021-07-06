import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBarComponent/index';
import { ItemListContainer } from './components/ItemListContainer/index';
import { ItemDetail } from './components/ItemDetailContainer'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={ItemListContainer} />
        <Route exact path="/category/:id" component={ItemListContainer} />
        <Route exact path="/item/:id" component={ItemDetail} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
