import Navbar from "./components/Navbar";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import PokemonList from "./components/PokemonList";
import Pokemon from "./components/Pokemon";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={PokemonList} />
        <Route exact path="/pokemon/:pokemon" component={Pokemon} />
      </Switch>
    </Router>
  );
}

export default App;
