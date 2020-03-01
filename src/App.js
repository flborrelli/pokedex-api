import React, { useState, useEffect, useMemo} from 'react';
import './App.css';
import NavBar from './components/NavBar';
import PokemonList from './components/PokemonList';
import axios from 'axios';

function App() {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    getAPIData()
  }, []);

  const getAPIData = async () => {
    try{
      const responseFromAPI = await getAllPokemonData('https://pokeapi.co/api/v2/pokemon?limit=20');
      console.log(responseFromAPI)
    }
    catch(error){
      console.log('An error occured while fetching data from API', error)
    }
  }

  //Fetching API data
  const getAllPokemonData = async (url) => {
    return new Promise((resolve, reject) => {
      axios.get(url)
      .then(data => {
        resolve(data);
      })
    })
  }



  // const getAPIData = () => {
  //   const rootAPI_URL = 'https://pokeapi.co/api/v2/pokemon?limit=20';
  //   axios.get(rootAPI_URL)
  //   .then(responseFromAPI => {
  //     const pokemonArray = responseFromAPI.data.results;
  //     pokemonArray.map(pokemon => {
  //       return getPokemonInfos(pokemon)
  //     })
  //     setPokemons(pokemonArray.map(e => e.name))
  //   })
  //   .catch(error => console.log('An error occured while fetching API:', error))
  // }

  // const getPokemonInfos = (pokemon) => {
  //   const url = pokemon.url;
  //   axios.get(url)
  //   .then(pokeInfos => {
  //     })
  //   .catch(error => error => console.log('An error occured while accessing Pokemon Infos:', error))
  // }
  return (
    <div>
      <NavBar />
      <div>
      
      </div>
      <PokemonList getPokemon={pokemonData}/>
    </div>
  );
}

export default App;
