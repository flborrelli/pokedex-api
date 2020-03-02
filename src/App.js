import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import SearchBar from './components/SearchBar';
import PokemonList from "./components/PokemonList";


function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [showAllPokemons, setShowAllPokemons] = useState(true);
  const [loader, setLoader] = useState(true);
  const apiMainURL = "https://pokeapi.co/api/v2/pokemon?limit=150";


  useEffect(() => {
    getAPIData();
  }, []);

  useEffect(() => {
    filterPokemons();
  }, [searchValue]);

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
        setLoader(false);
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


  //Handle Input Change
  const handleSearchInputChange = (e) => {
    e.preventDefault();
    if(e !== ''){
      setShowAllPokemons(false)
      setSearchValue(e.target.value);
      filterPokemons();
    } else {
      setShowAllPokemons(true)
    }
    console.log(e.target.value);
    console.log('considered:', searchValue, filteredPokemons)
  }

  //Filter Pokemons according to the search input
  const filterPokemons = () => {
    const re = new RegExp(searchValue, 'gi');
    const reVowels = new RegExp(/[aeiou]/, 'gi');
    const filteredArray = pokemonData.filter(pokemon => {
      if(pokemon.name.match(re) || pokemon.name.replace(reVowels, '').match(re)){
        return pokemon;
      }
      return null;
    })
    setFilteredPokemons(filteredArray)
  } 

  return (
    <div>
      <NavBar />
      <SearchBar handleInputChange={handleSearchInputChange} />
      <PokemonList getPokemon={pokemonData} getSearchInput={searchValue} showAllPokemons={showAllPokemons} filteredPokemons={filteredPokemons} loader={loader}/>
    </div>
  );
}

export default App;
