import React from "react";
import { Segment } from 'semantic-ui-react'

function PokemonList( { getPokemon } ) {
  return (
    <div className='d-flex justify-content-center mt-5'>
      <div className='pokelist'>
        {getPokemon.map(pokemon => {
          return <Segment raised className='segment' key={pokemon.id}>
          <div className='d-flex align-items-center'>
          <img src={pokemon.sprites.front_default} alt="avatar"/>
          <div>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</div>
          </div>
          </Segment>
          })}
      </div>
      
    </div>
  );
}

export default PokemonList;