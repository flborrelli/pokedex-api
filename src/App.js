import React, { useState, useEffect, useMemo} from 'react';
import './App.css';
import NavBar from './components/NavBar';
import PokemonList from './components/PokemonList';
import axios from 'axios';

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getAPIData()
  }, []);


  const rootAPI_URL = 'https://pokeapi.co/api/v2/pokemon';

  const getAPIData = () => {
    axios.get(rootAPI_URL)
    .then(responseFromAPI => {
      const pokemonArray = responseFromAPI.data.results;
      console.log(pokemonArray)
      setPokemons(pokemonArray.map(e => e.name))
    })
    .catch(error => console.log('An error occured:', error))
  }

  return (
    <div>
      <NavBar />
      <PokemonList getPokemons={pokemons}/>
      {/* {pokemons.map(e => e)} */}
    </div>
  );
}

export default App;
