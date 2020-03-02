import React from "react";
import { Segment } from 'semantic-ui-react';

function PokemonList( { getPokemon, showAllPokemons, filteredPokemons } ) {

  return (
    <div className='d-flex justify-content-center mt-5'>
      <div className='pokelist'>
        {
          showAllPokemons ? 

          getPokemon.map(pokemon => {
          return <Segment raised className='segment' key={pokemon.id}>
          <div className='d-flex align-items-center'>
          <img src={pokemon.sprites.front_default} alt="avatar"/>
          <div>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</div>
          </div>
          </Segment>
          })
          :
          filteredPokemons.map(pokemon => {
          return <Segment raised className='segment' key={pokemon.id}>
          <div className='d-flex align-items-center'>
          <img src={pokemon.sprites.front_default} alt="avatar"/>
          <div>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</div>
          </div>
          </Segment>
          })
        }
      </div>
      
    </div>
  );
}

export default React.memo(PokemonList);