import React, { useState, useEffect, useMemo} from 'react';
import './App.css';
import NavBar from './components/NavBar';
import PokemonList from './components/PokemonList';
import axios from 'axios';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonInfos, setPokemonInfos] = useState({
    id: '',
    avatar: ''
  })


  useEffect(() => {
    getAPIData()
  }, []);


  const getAPIData = () => {
    const rootAPI_URL = 'https://pokeapi.co/api/v2/pokemon?limit=20';
    axios.get(rootAPI_URL)
    .then(responseFromAPI => {
      const pokemonArray = responseFromAPI.data.results;
      console.log(pokemonArray)
      pokemonArray.map(pokemon => {
        getPokemonInfos(pokemon)
      })
      setPokemons(pokemonArray.map(e => e.name))
    })
    .catch(error => console.log('An error occured while fetching API:', error))
  }

  const getPokemonInfos = (pokemon) => {
    const url = pokemon.url;
    axios.get(url)
    .then(pokemonInfos => {
      console.log(pokemonInfos)
    })
    .catch(error => error => console.log('An error occured while accessing Pokemon Infos:', error))
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
