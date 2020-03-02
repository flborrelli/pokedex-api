import React, { useState, useEffect, useMemo } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import SearchBar from './components/SearchBar';
import PokemonList from "./components/PokemonList";

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filteredPokemons, setFilteredPokemons] = useState('');
  const [showAllPokemons, setShowAllPokemons] = useState(true);
  const apiMainURL = "https://pokeapi.co/api/v2/pokemon?limit=20";


  useEffect(() => {
    getAPIData();
  }, []);

  // useEffect(() => {
  //   handleSearchInputChange(e);
  // }, []);

  //Fetch initial API data
  const getAPIData = async () => {
    try {
      const responseFromAPI = await getAllPokemonData(apiMainURL);
      await loadPokemon(responseFromAPI.results)
    } catch (error) {
      console.log("An error occured while fetching data from API", error);
    }
  };

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

  //Promise to fetch each pokemon additional data (avatar and id) by its url propriety
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

  // //Handle Pokemon Search 
  // const searchHandler = (value) => {
  //   setSearchValue(value);
  // }

  //Handle Input Change
  const handleSearchInputChange = (e) => {
    e.preventDefault();
    if(e !== ''){
      setShowAllPokemons(false)
      setSearchValue(e.target.value);
      filterPokemons(searchValue);
    } else {
      setShowAllPokemons(true)
    }
    console.log(e.target.value);
    console.log(filteredPokemons)
  }

  //Filter Pokemons according to the search input
  const filterPokemons = (input) => {
    const filteredArray = pokemonData.filter(pokemon => {
      return pokemon.name.includes(input.toLowerCase());
    })
    setFilteredPokemons(filteredArray)
  } 

  return (
    <div>
      <NavBar />
      <SearchBar handleInputChange={handleSearchInputChange} />
      <PokemonList getPokemon={pokemonData} getSearchInput={searchValue} showAllPokemons={showAllPokemons} filteredPokemons={filteredPokemons}/>
    </div>
  );
}

export default App;
