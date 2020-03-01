import React, { useState, useEffect, useMemo } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import PokemonList from "./components/PokemonList";

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const apiMainURL = "https://pokeapi.co/api/v2/pokemon?limit=20";


  useEffect(() => {
    getAPIData();
  }, []);

  //Fetch initial API data
  const getAPIData = async () => {
    try {
      const responseFromAPI = await getAllPokemonData(apiMainURL);
      await loadPokemon(responseFromAPI.results)
    } catch (error) {
      console.log("An error occured while fetching data from API", error);
    }
  };

  //Load all pokemons after all promisses are done and update state
  const loadPokemon = async data => {
    try {
      const eachPokemonData = await Promise.all(data.map(async pokemon => {
        const pokemonRecord = await getPokemon(pokemon);
        return pokemonRecord;
      }))
      setPokemonData(eachPokemonData)
    } catch(error) {
      console.log('An error occured while loading pokemons', error)
    }
  }

  //Promise to fetch each pokemon additional data (avatar and id)
  const getPokemon = async ({ url }) => {
    return new Promise((resolve, reject) => {
      fetch(url)
      .then(res => res.json())
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        console.log('An error ocurred while fetching API:', error)
      })
    })
  }

  //Promise to fetch initial API data
  const getAllPokemonData = async (url) => {
    return new Promise((resolve, reject) => {
      fetch(url)
      .then(res => res.json())
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        console.log('An error ocurred while fetching API:', error)
      })
    });
  };
  
  console.log(pokemonData)
  return (
    <div>
      <NavBar />
      <PokemonList getPokemon={pokemonData}/>
    </div>
  );
}

export default App;
