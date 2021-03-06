import './App.css';
import { Route, Switch } from 'react-router-dom';
import landingPage from './components/landing page/landingPage';
import Home from './components/home/Home';
import CreatePokemon from './components/createPokemon/CreatePokemon'
import PokemonDetail from './components/pokemonDetail/pokemonDetail';
import NavBar from './components/navBar/navBar';

function App() {
  return (
    <div className="App">
      <Switch> //matchea la primera ruta que coincida con el path solicitado
        <Route exact path='/' component={landingPage} />
        <Route path='/home' component={Home} />
        <Route path='/pokemons' component={CreatePokemon}/>
        <Route path='/pokemon/:id' component={PokemonDetail}/>
      </Switch>
    </div>
  );
}

export default App;
